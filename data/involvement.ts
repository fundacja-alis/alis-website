import { site } from './site';

export const involvement = [
  { id: 'uczestnicy', label: 'DLA CIEBIE I BLISKICH', title: 'Szukasz możliwości rozwoju?', description: 'Interesuje Cię edukacja, rozwój kompetencji lub wsparcie? Napisz, czego szukasz, i zapytaj o aktualne możliwości udziału w działaniach ALIS.', cta: 'Zapytaj o możliwości', subject: 'ALIS — możliwości udziału', body: 'Dzień dobry,\n\nInteresuje mnie obszar: …\nChcę dowiedzieć się więcej o: …\n\nPozdrawiam' },
  { id: 'wolontariat', label: 'WOLONTARIAT I WIEDZA', title: 'Chcesz podzielić się tym, co umiesz?', description: 'Twój czas, wiedza i doświadczenie mogą pomóc innym. Opowiedz, co lubisz robić i w jakim zakresie chcesz się zaangażować.', cta: 'Porozmawiaj o wolontariacie', subject: 'ALIS — zainteresowanie wolontariatem', body: 'Dzień dobry,\n\nChcę zaangażować się w wolontariat.\nMoje umiejętności i zainteresowania: …\nMoja dostępność: …\n\nPozdrawiam' },
  { id: 'partnerstwo', label: 'FIRMY I ORGANIZACJE', title: 'Masz pomysł na wspólne działanie?', description: 'Reprezentujesz firmę, szkołę, uczelnię, samorząd lub NGO? Połączmy doświadczenia wokół konkretnej potrzeby i wspólnie poszukajmy rozwiązania.', cta: 'Zaproponuj współpracę', subject: 'ALIS — propozycja współpracy', body: 'Dzień dobry,\n\nReprezentuję: …\nPomysł na współpracę i jej odbiorcy: …\nMożemy wnieść: …\n\nPozdrawiam' },
  { id: 'wsparcie', label: 'DARCZYŃCY', title: 'Chcesz wesprzeć rozwój innych?', description: 'Wsparcie może mieć różne formy. Zapytaj o bieżące potrzeby Fundacji i porozmawiajmy o tym, jak możesz pomóc je realizować.', cta: 'Zapytaj, jak wesprzeć ALIS', subject: 'ALIS — wsparcie działań Fundacji', body: 'Dzień dobry,\n\nChcę poznać aktualne potrzeby Fundacji.\nInteresuje mnie wsparcie w formie: …\n\nPozdrawiam' },
];

export function inquiryHref(subject: string, body: string) {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
