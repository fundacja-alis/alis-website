const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const ts = require("typescript");

require.extensions[".ts"] = (module, filename) => module._compile(
  ts.transpileModule(fs.readFileSync(filename, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText,
  filename,
);
const { pageMetadata, serializeJsonLd, breadcrumbSchema } = require("../utils/seo.ts");
const { site, siteUrl } = require("../data/site.ts");

test("subpages share their own title, description and canonical URL", () => {
  const metadata = pageMetadata({ title: "Statut Fundacji", description: "Treść statutu.", path: "/dokumenty/statut" });
  assert.equal(metadata.alternates.canonical, siteUrl + "/dokumenty/statut");
  assert.equal(metadata.openGraph.url, metadata.alternates.canonical);
  assert.equal(metadata.openGraph.title, "Statut Fundacji | " + site.name);
  assert.equal(metadata.twitter.title, metadata.openGraph.title);
  assert.equal(metadata.twitter.description, "Treść statutu.");
  assert.equal(metadata.openGraph.locale, "pl_PL");
});

test("home title is absolute so the layout cannot append the foundation name twice", () => {
  const metadata = pageMetadata({ title: site.title, description: site.description, path: "/" });
  assert.deepEqual(metadata.title, { absolute: site.title });
  assert.equal(metadata.openGraph.title, site.title);
  assert.equal(metadata.alternates.canonical, siteUrl + "/");
});

test("publication metadata applies only to articles", () => {
  const page = { title: "Wydarzenie", description: "Relacja.", path: "/aktualnosci/wydarzenie" };
  assert.equal(pageMetadata(page).openGraph.type, "website");
  const article = pageMetadata({ ...page, publishedTime: "2026-09-28" });
  assert.equal(article.openGraph.type, "article");
  assert.equal(article.openGraph.publishedTime, "2026-09-28");
});

test("JSON-LD cannot close its script tag and preserves the original text", () => {
  const data = { headline: "</script><script>alert(1)</script>", name: "ALIS & Tarnów" };
  const encoded = serializeJsonLd(data);
  assert.equal(encoded.includes("<"), false);
  assert.deepEqual(JSON.parse(encoded), data);
});

test("breadcrumb links use the configured public domain and consecutive positions", () => {
  const data = breadcrumbSchema([
    { name: "Strona główna", path: "/" },
    { name: "Dokumenty", path: "/dokumenty" },
    { name: "Statut", path: "/dokumenty/statut" },
  ]);
  assert.deepEqual(data.itemListElement.map(item => item.position), [1, 2, 3]);
  assert.deepEqual(data.itemListElement.map(item => item.item), [
    siteUrl + "/", siteUrl + "/dokumenty", siteUrl + "/dokumenty/statut",
  ]);
});
