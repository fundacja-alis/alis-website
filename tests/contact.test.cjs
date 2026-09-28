const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const ts = require('typescript');
require.extensions['.ts'] = (module, filename) => module._compile(ts.transpileModule(fs.readFileSync(filename,'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true } }).outputText, filename);
const { handleContact } = require('../utils/contact/handler.ts');
const { deliverContact, getContactSettings } = require('../utils/contact/server.ts');
const { validateContact } = require('../data/contact.ts');
const input = () => ({ subject:'Partnerstwo i współpraca', fullName:'Anna Kowalska', organization:'', email:'anna@example.org', phone:'', message:'Propozycja wspólnego projektu.', consent:true, requestId:'dca9438f-17c4-4a31-9f95-d53c25e00330', website:'' });
const request = (data=input(), headers={}) => new Request('https://fundacja-alis.pl/api/contact', { method:'POST', headers:{ origin:'https://fundacja-alis.pl', 'content-type':'application/json', ...headers }, body:JSON.stringify(data) });
const dependencies = (overrides={}) => ({ config:{origin:'https://fundacja-alis.pl',hashSecret:'test-only-secret'}, consumeLimit:async()=>true, deliver:async()=>true, ...overrides });

test('disabled configuration never transmits data',async()=>{
  let calls=0;const result=await handleContact(request(),dependencies({config:null,deliver:async()=>{calls++;return true;}}));
  assert.equal(result.status,503);assert.equal(calls,0);
});
test('rejects foreign origins before calling services',async()=>{
  let calls=0;const result=await handleContact(request(input(),{origin:'https://other.example'}),dependencies({consumeLimit:async()=>{calls++;return true;}}));
  assert.equal(result.status,403);assert.equal(calls,0);
});
test('invalid fields, missing consent, header injection and unknown topics rejected',async()=>{
  for(const change of [{email:'invalid'},{consent:false},{fullName:'   '},{message:'  '},{subject:'unknown'},{email:'anna@example.org\r\nBcc:x@example.org'},{fullName:[]},{message:'x'.repeat(5001)},{requestId:'not-a-uuid'}]){
    const result=await handleContact(request({...input(),...change}),dependencies({deliver:async()=>{throw Error('must not send');}}));assert.equal(result.status,400);
  }
});
test('honeypot does not fake a successful send',async()=>assert.equal((await handleContact(request({...input(),website:'spam'}),dependencies())).status,400));
test('rejects oversized payload even with no content-length',async()=>assert.equal((await handleContact(request({...input(),message:'x'.repeat(40000)}),dependencies())).status,413));
test('rejects unsupported content types',async()=>assert.equal((await handleContact(request(input(),{'content-type':'text/plain'}),dependencies())).status,415));
test('success only after delivery provider acceptance',async()=>{
  let hash,delivered;const result=await handleContact(request(),dependencies({consumeLimit:async(h)=>{hash=h;return true;},deliver:async(m)=>{delivered=m;return true;}}));
  assert.equal(result.status,200);assert.match(hash,/^[a-f0-9]{64}$/);assert.equal(delivered.email,'anna@example.org');
});
test('provider rejection and exceptions do not return success',async()=>{
  assert.equal((await handleContact(request(),dependencies({deliver:async()=>false}))).status,502);
  assert.equal((await handleContact(request(),dependencies({deliver:async()=>{throw Error('private provider error');}}))).status,503);
});
test('rate-limit denial prevents email sending',async()=>{
  let calls=0;const result=await handleContact(request(),dependencies({consumeLimit:async()=>false,deliver:async()=>{calls++;return true;}}));assert.equal(result.status,429);assert.equal(calls,0);
});
test('rate-limit outage fails closed',async()=>assert.equal((await handleContact(request(),dependencies({consumeLimit:async()=>{throw Error('database offline');}}))).status,503));
test('unchanged retries reuse idempotency key; edited payload gets a different key',async()=>{
  const keys=[];const deps=dependencies({deliver:async(_,key)=>{keys.push(key);return true;}});
  await handleContact(request(),deps);await handleContact(request(),deps);await handleContact(request({...input(),message:'Inna treść'}),deps);
  assert.equal(keys[0],keys[1]);assert.notEqual(keys[0],keys[2]);
});
test('Resend transport fixes recipient, reply-to and sends only plain text',async()=>{
  const original=global.fetch;let sent;
  global.fetch=async(url,init)=>{sent={url,...init};return Response.json({id:'test-provider-id'});};
  try{
    const success=await deliverContact({apiKey:'fake-key',from:'kontakt@fundacja-alis.pl'},validateContact({...input(),message:'<script>alert(1)</script>'}),'test-key');
    assert.equal(success,true);const body=JSON.parse(sent.body);assert.deepEqual(body.to,['biuro@fundacja-alis.pl']);assert.equal(body.reply_to,'anna@example.org');assert.equal(body.html,undefined);assert.equal(sent.headers['Idempotency-Key'],'test-key');
  }finally{global.fetch=original;}
});
test('provider HTTP success without a message ID is not delivery acceptance',async()=>{
  const original=global.fetch;global.fetch=async()=>Response.json({});
  try{assert.equal(await deliverContact({apiKey:'fake',from:'test@example.org'},validateContact(input()),'test'),false);}finally{global.fetch=original;}
});
test('configuration is off unless explicitly enabled',()=>{
  const old=process.env.CONTACT_FORM_ENABLED;delete process.env.CONTACT_FORM_ENABLED;
  try{assert.equal(getContactSettings(),null);}finally{if(old!==undefined)process.env.CONTACT_FORM_ENABLED=old;}
});
