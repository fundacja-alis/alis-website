type FacilityEvent = { label: string; title: string; body: string[]; details: string; note: string; cta: string; href: string };
type Facility = { title: string; body: string[]; cta?: string; href?: string; logo: string; logoWidth: number; logoHeight: number; subtitle: string; event?: FacilityEvent };
type Area = { title: string; short: string; description: string[]; topics: string[]; facilities?: Facility[] };
export const areas: Area[] = [
  {
    "title": "Edukacja i rozwój",
    "short": "Edukacja, wsparcie i samodzielność.",
    "description": [
      "Tworzymy i rozwijamy miejsca, w których edukacja łączy się z rozwojem, wsparciem i przygotowaniem do samodzielnego funkcjonowania. Prowadzimy placówki edukacyjne i wychowawcze oraz rozwijamy projekty odpowiadające na potrzeby dzieci i młodzieży."
    ],
    "topics": [
      "Edukacja",
      "Rozwój",
      "Wsparcie młodzieży"
    ],
    "facilities": [
      {
        "title": "MOS „Rozwiń Skrzydła” w Tarnowie",
        "body": [
          "Niepubliczny Młodzieżowy Ośrodek Socjoterapii „Rozwiń Skrzydła” to całodobowa placówka dla dziewcząt zagrożonych niedostosowaniem społecznym.",
          "Ośrodek łączy opiekę i wychowanie z socjoterapią, pomocą psychologiczno-pedagogiczną oraz edukacją.",
          "Przy MOS działa prowadzona przez Fundację Niepubliczna Szkoła Podstawowa Specjalna, dzięki czemu wychowanki mogą realizować edukację w środowisku dostosowanym do ich indywidualnych potrzeb."
        ],
        "cta": "Poznaj MOS",
        "href": "https://mos-tarnow.pl",
        "logo": "/images/logo-mos.png",
        "logoWidth": 2000,
        "logoHeight": 1414,
        "subtitle": "Młodzieżowy ośrodek socjoterapii wraz ze szkołą podstawową"
      },
      {
        "title": "Zespół Szkół Niepublicznych w Tarnowie",
        "body": [
          "Od roku szkolnego 2026/2027 Fundacja Rozwoju ALIS jest organem prowadzącym Zespół Szkół Niepublicznych w Tarnowie.",
          "ZSN rozwija działalność Fundacji w obszarze edukacji i przygotowania młodzieży do dalszej nauki, zdobywania kwalifikacji oraz funkcjonowania na rynku pracy.",
          "Fundacja wspiera rozwój ZSN jako miejsca łączącego edukację z praktycznym przygotowaniem młodych ludzi do dorosłego życia."
        ],
        "cta": "Poznaj ZSN",
        "href": "https://zsn.com.pl",
        "logo": "/images/logo-zsn.svg",
        "logoWidth": 2500,
        "logoHeight": 2500,
        "subtitle": "Edukacja i przygotowanie do życia zawodowego"
      }
    ]
  },
  {
    "title": "Zdrowie psychiczne i dobrostan",
    "short": "Psychologia, psychiatria i profilaktyka.",
    "description": [
      "Rozwijamy działania z zakresu psychologii, psychiatrii, profilaktyki i wsparcia terapeutycznego.",
      "Interesują nas zarówno działania interwencyjne, jak i rozwiązania pozwalające wcześniej rozpoznawać problemy, wzmacniać odporność psychiczną i zwiększać dostępność profesjonalnej pomocy.",
      "Tworzymy przestrzeń do współpracy specjalistów oraz rozwoju projektów odpowiadających na współczesne wyzwania związane ze zdrowiem psychicznym."
    ],
    "topics": [
      "Psychologia i psychiatria",
      "Profilaktyka",
      "Wsparcie terapeutyczne"
    ]
  },
  {
    "title": "Technologie i przyszłość",
    "short": "Technologia, która służy ludziom.",
    "description": [
      "Wierzymy, że technologia powinna służyć ludziom.",
      "Rozwijamy projekty wykorzystujące sztuczną inteligencję, narzędzia cyfrowe i nowoczesne rozwiązania w edukacji, pracy i działalności społecznej.",
      "Wspieramy rozwój kompetencji cyfrowych i szukamy praktycznych zastosowań technologii tam, gdzie może ona rzeczywiście poprawić jakość życia, edukacji i funkcjonowania organizacji."
    ],
    "topics": [
      "AI",
      "Technologie cyfrowe",
      "Kompetencje przyszłości",
      "Innowacje"
    ],
    "facilities": [
      {
        "title": "Tarnow Tech Community",
        "body": [
          "Wspieramy Tarnow Tech Community, która rozwija lokalny ekosystem innowacji i łączy osoby związane z technologią, IT i nowoczesnym biznesem."
        ],
        "logo": "/images/logo-ttc.png",
        "logoWidth": 800,
        "logoHeight": 290,
        "subtitle": "Tarnowska społeczność IT, technologii i biznesu",
        "event": {
          "label": "Najbliższe spotkanie",
          "title": "Warsztaty tworzenia agentów AI",
          "body": [
            "20 października 2026 r. w Akademii Tarnowskiej odbędą się praktyczne warsztaty pracy z Google Antigravity i tworzenia własnych agentów AI. Wymagane są wcześniejsze doświadczenie w programowaniu oraz własny laptop z zasilaczem."
          ],
          "details": "📍 Budynek C, sala C06 · Start: 18:00, rejestracja od 17:30",
          "note": "Wstęp bezpłatny, liczba miejsc ograniczona — obowiązuje wcześniejsze pobranie biletu.",
          "cta": "Zobacz szczegóły i pobierz bilet",
          "href": "https://luma.com/7g61d94h"
        }
      }
    ]
  },
  {
    "title": "Rozwój społeczny",
    "short": "Ludzie, partnerstwa i wspólne działania.",
    "description": [
      "Wspieramy inicjatywy, które wzmacniają ludzi i społeczności.",
      "Budujemy partnerstwa pomiędzy organizacjami społecznymi, instytucjami, specjalistami i biznesem. Tworzymy przestrzeń do współpracy, wymiany doświadczeń i realizacji wspólnych przedsięwzięć."
    ],
    "topics": [
      "Inicjatywy społeczne",
      "Partnerstwa",
      "Wymiana doświadczeń"
    ]
  },
  {
    "title": "Rozwój zawodowy i przedsiębiorczość",
    "short": "Kompetencje w życiu i pracy.",
    "description": [
      "Wspieramy rozwój kompetencji potrzebnych w życiu zawodowym i społecznym.",
      "Interesują nas projekty związane z rozwojem kwalifikacji, przedsiębiorczością, przygotowaniem do rynku pracy, szkoleniami oraz zdobywaniem nowych kompetencji przez młodzież i dorosłych."
    ],
    "topics": [
      "Kwalifikacje",
      "Przedsiębiorczość",
      "Rynek pracy",
      "Szkolenia"
    ]
  }
];
