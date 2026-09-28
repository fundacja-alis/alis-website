export type StatuteBlock = { type: "paragraphHeading" | "subheading" | "paragraph"; text: string };
export type StatuteChapter = { id: string; label: string; title: string; blocks: StatuteBlock[] };
// Transkrypcja dokumentu użytkownika; zachowano numerację i brzmienie źródła.
// Końcowe paragrafy 31–32 odczytano ze skanu. Adres prywatny i podpis pominięte.
export const statuteVersion = "Tekst jednolity";
export const statuteChapters: StatuteChapter[] = [
  {
    "id": "rozdzial-1",
    "label": "Rozdział I",
    "title": "Postanowienia ogólne",
    "blocks": [
      {
        "type": "paragraphHeading",
        "text": "§ 1"
      },
      {
        "type": "paragraph",
        "text": "Fundacja Rozwoju ALIS zwana dalej Fundacją, ustanowiona przez Pana Filipa Kądziołkę , [adres zamieszkania fundatora pominięty], zwanego dalej Fundatorem, aktem notarialnym sporządzonym przez notariusza Dorotę Majka z dnia 29 kwietnia 2026 r. za Rep A. nr 1696/2026, działa na podstawie przepisów Ustawy z dnia 6 kwietnia 1984 r. o fundacjach, Ustawy z dnia 24 kwietnia 2003 r. o działalności pożytku publicznego i wolontariacie oraz postanowień niniejszego Statutu."
      },
      {
        "type": "paragraphHeading",
        "text": "§ 2"
      },
      {
        "type": "paragraph",
        "text": "1. Nazwa fundacji brzmi: Fundacja Rozwoju ALIS Fundacja może dla celów współpracy z zagranicą posługiwać się tłumaczeniem nazwy w wybranych językach obcych."
      },
      {
        "type": "paragraph",
        "text": "2. Siedzibą Fundacji jest m. Tarnów , Ul: Bernardyńska 25"
      },
      {
        "type": "paragraph",
        "text": "3. Czas trwania Fundacji jest nieoznaczony."
      },
      {
        "type": "paragraph",
        "text": "4. Terenem działania Fundacji jest cały obszar Rzeczpospolitej Polskiej, przy czym w zakresie niezbędnym dla właściwego realizowania celów, Fundacja może prowadzić działalność także poza granicami Rzeczpospolitej Polskiej."
      },
      {
        "type": "paragraph",
        "text": "5. Fundacja może: 1) tworzyć oddziały, zakłady, filie i przedstawicielstwa w kraju i zagranicą 2) tworzyć i przystępować do spółek prawa handlowego."
      },
      {
        "type": "paragraph",
        "text": "6. Fundacja może łączyć się z innymi fundacjami."
      },
      {
        "type": "paragraphHeading",
        "text": "§ 3"
      },
      {
        "type": "paragraph",
        "text": "1. Fundacja posiada osobowość prawną."
      },
      {
        "type": "paragraph",
        "text": "2. Nadzór nad Fundacją sprawuje Minister właściwy ze względu na cele Fundacji tj. minister właściwy ds. pracy i polityki społecznej."
      },
      {
        "type": "paragraphHeading",
        "text": "§ 4"
      },
      {
        "type": "paragraph",
        "text": "1. Fundacja używa pieczątek z danymi identyfikacyjnymi Fundacji."
      },
      {
        "type": "paragraph",
        "text": "2. Fundacja może używać wyróżniającego ją znaku graficznego."
      },
      {
        "type": "paragraphHeading",
        "text": "§ 5"
      },
      {
        "type": "paragraph",
        "text": "1. Fundacja może ustanawiać certyfikaty, odznaki, medale honorowe i przyznawać je z innymi nagrodami i wyróżnieniami osobom fizycznym i prawnym zasłużonym dla Fundacji."
      }
    ]
  },
  {
    "id": "rozdzial-2",
    "label": "Rozdział II",
    "title": "Cele i zasady działania Fundacji",
    "blocks": [
      {
        "type": "paragraphHeading",
        "text": "§ 6"
      },
      {
        "type": "paragraph",
        "text": "Celem działania Fundacji jest:"
      },
      {
        "type": "paragraph",
        "text": "1. Inicjowanie i wspieranie inicjatyw społeczno-gospodarczych na rzecz rozwoju gospodarczego Polski;"
      },
      {
        "type": "paragraph",
        "text": "2. Inicjowanie i wspieranie nowatorskich rozwiązań w różnorodnych dziedzinach życia społecznego, a szczególnie w ochronie praw i wolności człowieka i obywatela, w edukacji i profilaktyce społecznej;"
      },
      {
        "type": "paragraph",
        "text": "3. Propagowanie wykorzystania nowoczesnych technologii w ogólnie pojętym poradnictwie obywatelskim;"
      },
      {
        "type": "paragraph",
        "text": "4. Popularyzacja idei mediacji rodzinnej i społecznej;"
      },
      {
        "type": "paragraph",
        "text": "5. Rozwijanie i umacnianie postaw nastawionych na aktywne współdziałanie w rozwoju społeczeństwa obywatelskiego;"
      },
      {
        "type": "paragraph",
        "text": "6. działalności na rzecz integracji i reintegracji zawodowej i społecznej osób zagrożonych wykluczeniem społecznym;"
      },
      {
        "type": "paragraph",
        "text": "7. działalności na rzecz dzieci i młodzieży, w tym edukacji i wypoczynku dzieci i młodzieży;"
      },
      {
        "type": "paragraph",
        "text": "8. Działalność na rzecz organizacji lub podmiotów, których celami statutowymi jest: działalność naukowa, naukowo-techniczna, oświatowa, kulturalna, w zakresie kultury fizycznej i sportu, ochrony środowiska, dobroczynności, ochrony zdrowia i pomocy społecznej, rehabilitacji zawodowej i społecznej inwalidów."
      },
      {
        "type": "paragraph",
        "text": "9. Ograniczanie bezrobocia poprzez prowadzenie szkoleń tematycznych oraz doradztwa, a także wdrażanie projektów z zakresu dotacji na rozpoczęcie działalności gospodarczej w tym start-up."
      },
      {
        "type": "paragraph",
        "text": "10. Prowadzenia przedsięwzięć na rzecz aktywizacji zawodowej osób bezrobotnych, wykluczonych, z problemami jak też niepełnosprawnych."
      },
      {
        "type": "paragraph",
        "text": "11. Kreowanie postaw innowacyjnych oraz promowanie przedsięwzięć innowacyjnych."
      },
      {
        "type": "paragraph",
        "text": "12. Wspieranie przedsiębiorstw poprzez organizację szkoleń, kursów oraz doradztwa specjalistycznego."
      },
      {
        "type": "paragraph",
        "text": "13. Wspieranie rozwoju społeczności lokalnych i ponad lokalnych, samorządnych wspólnot, organizacji pozarządowych, podmiotów prowadzących działalność gospodarczą i innych instytucji działających na rzecz dobra publicznego w różnych dziedzinach życia społecznego, takich jak: edukacja, nauka, kultura, sport, informacja, integracja europejska, ochrona środowiska, ochrona zdrowia, przedsiębiorczość, pomoc społeczna, charytatywna i humanitarna itp.;"
      },
      {
        "type": "paragraph",
        "text": "14. Wyrównywanie szans grup słabszych lub zagrożonych społecznym wykluczeniem, takich jak np.: mniejszości narodowe, niepełnosprawni, dzieci i młodzież ze środowisk patologicznych lub terenów zaniedbanych gospodarczo, społecznie, kulturowo, poprzez: a. przeciwdziałanie marginalizacji regionów,"
      },
      {
        "type": "paragraph",
        "text": "b. propagowanie idei równości szans kobiet i mężczyzn,"
      },
      {
        "type": "paragraph",
        "text": "c. wspieranie grup społecznych o specjalnych potrzebach,"
      },
      {
        "type": "paragraph",
        "text": "d. reintegracja społeczna i zawodowa osób niepełnosprawnych,"
      },
      {
        "type": "paragraph",
        "text": "e. wsparcie rozwoju przedsiębiorczości społecznej,"
      },
      {
        "type": "paragraph",
        "text": "f. wspieranie osób niepełnosprawnych i starszych."
      },
      {
        "type": "paragraph",
        "text": "15. Rozwój społeczeństwa obywatelskiego i aktywności społecznej obywateli."
      },
      {
        "type": "paragraph",
        "text": "16. Upowszechnianie wiedzy na temat zjawisk społecznych, ekonomicznych, politycznych poprzez programy badawcze, informacyjne i wydawnicze."
      },
      {
        "type": "paragraph",
        "text": "17. Prowadzenie i wspieranie działań na rzecz rozwoju edukacji, nauki, oświaty, wychowania i szkolnictwa wyższego."
      },
      {
        "type": "paragraph",
        "text": "18. Współpraca z instytucjami edukacyjnymi i naukowymi."
      },
      {
        "type": "paragraph",
        "text": "19. Upowszechnianie idei kształcenia zawodowego i ustawicznego."
      },
      {
        "type": "paragraph",
        "text": "20. Promowanie innowacyjnego podejścia do edukacji i doskonalenia zawodowego."
      },
      {
        "type": "paragraph",
        "text": "21. Promocja i organizacja wolontariatu."
      },
      {
        "type": "paragraph",
        "text": "22. Przeciwdziałanie i łagodzenie skutków bezrobocia."
      },
      {
        "type": "paragraph",
        "text": "23. Wspieranie działań na rzecz integracji europejskiej oraz rozwijania kontaktów i współpracy między społeczeństwami."
      },
      {
        "type": "paragraph",
        "text": "24. Poprawa funkcjonowania administracji rządowej i samorządowej wszystkich szczebli,"
      },
      {
        "type": "paragraph",
        "text": "25. Wspieranie działań na rzecz rozwoju, modernizacji, poprawy jakości życia , konkurencyjności obszarów wiejskich."
      },
      {
        "type": "paragraph",
        "text": "26. Działalność na rzecz osób w wieku emerytalnym"
      },
      {
        "type": "paragraph",
        "text": "27. Zwalczanie negatywnych efektów tzw. starzejącego się społeczeństwa poprzez budowanie kapitału społecznego w drodze wzmocnienia i ożywienia więzi między pokoleniami"
      },
      {
        "type": "paragraph",
        "text": "28. Kształtowanie świadomości obywatelskiej i wykorzystania potencjału seniorów w budowaniu dobrobytu kraju"
      },
      {
        "type": "paragraph",
        "text": "29. Działalność charytatywna"
      },
      {
        "type": "paragraph",
        "text": "30. Ekologii i ochrony zwierząt oraz ochrony dziedzictwa przyrodniczego"
      },
      {
        "type": "paragraph",
        "text": "31. Turystyki i krajoznawstwa"
      },
      {
        "type": "paragraphHeading",
        "text": "§ 7"
      },
      {
        "type": "paragraph",
        "text": "Realizacja celów Fundacji następuje w szczególności poprzez:"
      },
      {
        "type": "paragraph",
        "text": "1. Organizowanie konferencji naukowych, seminariów, sympozjów, spotkań, wykładów, obozów edukacyjnych, warsztatów, wystaw, ekspozycji i targów i innych przedsięwzięć o charakterze edukacyjnym i popularyzatorskim."
      },
      {
        "type": "paragraph",
        "text": "2. Organizowanie, prowadzenie i finansowanie prac naukowo-badawczych."
      },
      {
        "type": "paragraph",
        "text": "3. Działalność edukacyjną, wydawniczą i badawczą, w tym prowadzenie młodzieżowego ośrodka socjoterapii, szkół oraz innych placówek i podmiotów;"
      },
      {
        "type": "paragraph",
        "text": "4. Rzecznictwo interesów grup marginalizowanych społecznie, w tym pomoc dzieciom i młodzieży niedostosowanym społecznie;"
      },
      {
        "type": "paragraph",
        "text": "5. Współpracę z rodzicami dzieci i młodzieży, angażowanie rodziców w proces wychowawczy i edukację wychowanków w zakresie wymienionym w celach działania Fundacji;"
      },
      {
        "type": "paragraph",
        "text": "6. Utrzymywanie kontaktów i współpracy z organizacjami w Polsce i za granicą."
      },
      {
        "type": "paragraph",
        "text": "7. Fundowanie stypendiów."
      },
      {
        "type": "paragraph",
        "text": "8. Udzielanie innego finansowego i rzeczowego wsparcia osobom i instytucjom."
      },
      {
        "type": "paragraph",
        "text": "9. Opracowywanie raportów o stanie środowiska i planów ochrony środowiska, dokumentacji przyrodniczych, opinii."
      },
      {
        "type": "paragraph",
        "text": "10. Prowadzenie działalności wydawniczej, poligraficznej i reklamowej."
      },
      {
        "type": "paragraph",
        "text": "11. oradztwo oraz tworzenie banków informacji."
      },
      {
        "type": "paragraph",
        "text": "12. Poradnictwo prawne."
      },
      {
        "type": "paragraph",
        "text": "13. Tworzenie, promocję, wsparcie technicznie, szkoleniowe, informacyjnie oraz finansowe Podmiotów Ekonomii Społecznej, w szczególności organizacji pozarządowych i spółdzielni socjalnych."
      },
      {
        "type": "paragraph",
        "text": "14. Tworzeniem, promocję, wsparcie technicznie, szkoleniowe, informacyjnie oraz finansowe inicjatyw obywatelskich oraz społeczności lokalnych a także wspieranie osób zaangażowanych w rozwiązywanie problemów społecznych i podmiotów działających w zakresie pożytku publicznego."
      },
      {
        "type": "paragraph",
        "text": "15. Pomoc grupom społecznym wymagającym wsparcia, znajdującym się w szczególnej sytuacji, w szczególności: osobom niepełnosprawnym, bezdomnym i bezrobotnym, dzieciom i młodzieży."
      },
      {
        "type": "paragraph",
        "text": "16. Działania w zakresie zwalczania bezrobocia i aktywizacji zawodowej obywateli."
      },
      {
        "type": "paragraph",
        "text": "17. Działania na rzecz integracji europejskiej oraz rozwijania kontaktów i współpracy między społeczeństwami."
      },
      {
        "type": "paragraph",
        "text": "18. Zbieranie i wymianę informacji, wiedzy i doświadczeń oraz prowadzenie badań w obszarach działalności Fundacji."
      },
      {
        "type": "paragraph",
        "text": "19. Współpracę z władzami samorządowymi, rządowymi i organizacjami pozarządowymi w zakresie wymienionym w celach działania Fundacji."
      },
      {
        "type": "paragraph",
        "text": "20. Prowadzenie ośrodka szkoleniowo-wypoczynkowego."
      },
      {
        "type": "paragraph",
        "text": "21. Prowadzenie i organizację szkoleń, konferencji i seminariów."
      },
      {
        "type": "paragraph",
        "text": "22. Prowadzenie i organizację targów i wystaw."
      },
      {
        "type": "paragraph",
        "text": "23. Prowadzenie działań edukacyjnych w różnych formach szkolnych i pozaszkolnych dla dzieci, młodzieży i dorosłych."
      },
      {
        "type": "paragraph",
        "text": "24. Działania w zakresie rehabilitacji zawodowej i (lub) społecznej osób niepełnosprawnych."
      },
      {
        "type": "paragraph",
        "text": "25. Organizowanie i prowadzenie Biura Fundacji."
      },
      {
        "type": "paragraph",
        "text": "26. Prowadzenie różnorodnych usług w formie placówek i zespołów wielospecjalistycznej pomocy, szczególnie w zakresie terapii, edukacji, rewalidacji i wychowania m.in. w ramach wychowania przedszkolnego, wczesnego wspomagania rozwoju, realizacji obowiązku szkolnego i obowiązku nauki, a także edukacji obywatelskiej, wypoczynku oraz działalności rehabilitacyjno–rekreacyjnej, kulturalnej, sportowej i innej wynikającej z idei aktywnego życia, przy włączeniu w życie lokalnej społeczności"
      },
      {
        "type": "paragraph",
        "text": "27. Inicjowanie i prowadzenie różnorodnych form pomocy – grup wsparcia, placówek stałego i czasowego pobytu, informacji doradztwa, poradnictwa, terapii itp."
      },
      {
        "type": "paragraph",
        "text": "28. Działalność ekspercką i inspirowanie badań naukowych w dziedzinie zgodnej z celami Fundacji, oraz współdziałanie w ich prowadzeniu, a także przyczynianie się do stosowania wyników badań w praktyce"
      },
      {
        "type": "paragraph",
        "text": "29. Prowadzenie działań zmierzających do gromadzenia środków finansowych poprzez zbiórki pieniędzy organizowane w sieci internet za pośrednictwem portali społecznościowych"
      },
      {
        "type": "paragraph",
        "text": "30. Wspieranie poprzez akcje informacyjne i edukacyjne działalności pożytku publicznego prowadzonej przez osoby trzecie"
      },
      {
        "type": "paragraph",
        "text": "31. Propagowanie wykorzystania nowoczesnych technologii w prowadzeniu działalności organizacji pożytku publicznego"
      },
      {
        "type": "paragraph",
        "text": "32. Działalność związana z projekcją filmów"
      },
      {
        "type": "paragraph",
        "text": "33. Działalność związana z oprogramowaniem"
      },
      {
        "type": "paragraph",
        "text": "34. Działalność portali internetowych"
      },
      {
        "type": "paragraph",
        "text": "35. Działalność na rzecz stosunków międzyludzkich ( public relations) i komunikacji międzyludzkiej"
      },
      {
        "type": "paragraph",
        "text": "36. Doradztwo w zakresie prowadzenia działalności gospodarczej i zarządzania"
      },
      {
        "type": "paragraph",
        "text": "37. Działalność związana z wystawianiem przedstawień artystycznych"
      },
      {
        "type": "paragraph",
        "text": "38. Działalność bibliotek"
      },
      {
        "type": "paragraph",
        "text": "39. Realizację programów w dziedzinie profilaktyki uzależnień wśród dzieci i młodzieży"
      },
      {
        "type": "paragraph",
        "text": "40. Współpraca z instytucjami państwowymi i organizacjami społecznymi w kraju i zagranicą działającymi w zakresie objętym celami Fundacji"
      },
      {
        "type": "paragraph",
        "text": "41. Udostępnianie innym podmiotom powierzchni użytkowej na realizację celów zgodnych z celami statutowymi Fundacji Organizowanie dowozu"
      },
      {
        "type": "paragraph",
        "text": "44. Prowadzenie innych niezbędnych działań służących realizacji celów statutowych."
      },
      {
        "type": "paragraphHeading",
        "text": "§ 8"
      },
      {
        "type": "paragraph",
        "text": "1. Statutowa działalność Fundacji, o której mowa w § 7 Statutu może być działalnością pożytku publicznego prowadzoną przez Fundację jako działalność nieodpłatna."
      },
      {
        "type": "paragraph",
        "text": "2. Jednakże działalność określona w § 7 może mieć także charakter odpłatny. Decyzję w sprawie podjęcia odpłatnej działalności pożytku publicznego w którymkolwiek z wyodrębnionych w § 7 zakresów podejmuje zarząd w drodze zarządzenia lub uchwały. Fundacja może także prowadzić działalność gospodarczą na zasadach określonych w przepisach prawa."
      },
      {
        "type": "paragraph",
        "text": "3. Prowadzona przez Fundację działalność pożytku publicznego jest odrębnie ewidencjonowana organizacyjnie oraz księgowo zgodnie z przepisami o rachunkowości."
      },
      {
        "type": "paragraphHeading",
        "text": "§ 9"
      },
      {
        "type": "paragraph",
        "text": "Fundacja realizuje swoje zadania we współpracy z:"
      },
      {
        "type": "paragraph",
        "text": "1. Jednostkami samorządu terytorialnego oraz administracją publiczną."
      },
      {
        "type": "paragraph",
        "text": "2. Instytucjami i placówkami naukowo-badawczymi, organizacjami stawiającymi sobie cele podobne bądź zbieżne z celami Fundacji."
      },
      {
        "type": "paragraph",
        "text": "3. Europejskimi i międzynarodowymi instytucjami publicznymi, rządowymi i organizacjami pozarządowymi, których celem jest wsparcie strukturalne, finansowe, gospodarcze, kształceniowe regionów w Europie Środkowej i Wschodniej."
      },
      {
        "type": "paragraph",
        "text": "4. Firmami komercyjnymi i bankami, które mogą wspierać, finansować i przyczyniać się do realizacji celów Fundacji."
      },
      {
        "type": "paragraph",
        "text": "5. Szkołami, uczelniani wyższymi, placówkami oświaty i kultury."
      },
      {
        "type": "paragraph",
        "text": "6. Osobami fizycznymi chcącymi działać publicznie i mogącymi wpłynąć pozytywnie na realizację celów, które stawia sobie Fundacja."
      },
      {
        "type": "paragraphHeading",
        "text": "§ 10"
      },
      {
        "type": "paragraph",
        "text": "Dla osiągnięcia swoich celów Fundacja może wspierać działalność innych podmiotów prowadzących działalność zbieżną z celami Fundacji."
      }
    ]
  },
  {
    "id": "rozdzial-3",
    "label": "Rozdział III",
    "title": "Majątek i dochody Fundacji",
    "blocks": [
      {
        "type": "paragraphHeading",
        "text": "§ 11"
      },
      {
        "type": "paragraph",
        "text": "1. Majątek Fundacji stanowi Fundusz Założycielski w kwocie pieniężnej 1.500,00 złotych (słownie: jeden tysiąc pięćset złotych), oraz środki finansowe, prawa majątkowe, nieruchomości i ruchomości nabyte przez Fundację w trakcie jej działania. Z funduszu założycielskiego na działalność gospodarczą przeznacza się 1000 zł ( jeden tysiąc), o ile Fundacja będzie prowadziła działalność."
      },
      {
        "type": "paragraphHeading",
        "text": "§ 12"
      },
      {
        "type": "paragraph",
        "text": "1. Fundacja odpowiada za swoje zobowiązania całym swoim majątkiem."
      },
      {
        "type": "paragraph",
        "text": "2. Fundator wyłączony jest od odpowiedzialności za zobowiązania Fundacji."
      },
      {
        "type": "paragraphHeading",
        "text": "§ 13"
      },
      {
        "type": "paragraph",
        "text": "1. Dochody Fundacji pochodzą w szczególności z:"
      },
      {
        "type": "paragraph",
        "text": "a. Darowizn, spadków, zapisów."
      },
      {
        "type": "paragraph",
        "text": "b. Dotacji i subwencji od osób trzecich."
      },
      {
        "type": "paragraph",
        "text": "c. Dochodów ze zbiórek i imprez publicznych."
      },
      {
        "type": "paragraph",
        "text": "d. Dochodów z majątku ruchomego i nieruchomego."
      },
      {
        "type": "paragraph",
        "text": "e. Odsetek bankowych."
      },
      {
        "type": "paragraph",
        "text": "f. Wpływów z odpłatnej działalności statutowej."
      },
      {
        "type": "paragraph",
        "text": "g. Działalności gospodarczej i inwestycyjnej prowadzonej przez Fundację."
      },
      {
        "type": "paragraphHeading",
        "text": "§ 14"
      },
      {
        "type": "paragraph",
        "text": "1. Majątek i dochody Fundacji są przeznaczone na cele statutowe, jak też na pokrycie niezbędnych kosztów tej działalności."
      },
      {
        "type": "paragraph",
        "text": "2. Dochody z dotacji, darowizn, spadków i zapisów mogą być użyte na realizację wszystkich celów Fundacji, jeżeli ofiarodawcy nie postanowili inaczej."
      },
      {
        "type": "paragraph",
        "text": "3. Fundacja może tworzyć fundusze, w tym o charakterze celowym zgodnie z wolą ofiarodawcy."
      },
      {
        "type": "paragraph",
        "text": "4. Fundacja nie przyjmuje płatności w gotówce o wartości równej lub przekraczającej równowartości wskazanej w przepisach prawa aktualnie obowiązującego o podatku PIT, CIT oraz ustawy o swobodzie działalności gospodarczej."
      },
      {
        "type": "paragraph",
        "text": "5. W przypadku powołania Fundacji do dziedziczenia Zarząd Fundacji składa oświadczenie o przyjęciu spadku z dobrodziejstwem inwentarza tylko wówczas, gdy w chwili składania tego oświadczenia jest oczywiste, że stan czynny spadku przewyższa długi spadkowe."
      },
      {
        "type": "paragraphHeading",
        "text": "§ 15"
      },
      {
        "type": "paragraph",
        "text": "1. Fundacja może tworzyć inne podmioty, fundacje, stowarzyszenia, spółki, nabywać akcje lub udziały w spółkach."
      },
      {
        "type": "paragraph",
        "text": "2. Fundacja może tworzyć podmioty umożliwiające realizację jej celów statutowych."
      },
      {
        "type": "paragraphHeading",
        "text": "§ 16"
      },
      {
        "type": "paragraph",
        "text": "1. Fundacja prowadzi gospodarkę finansową oraz rachunkowość zgodnie z obowiązującymi przepisami."
      },
      {
        "type": "paragraph",
        "text": "2. Rokiem obrachunkowym jest rok kalendarzowy."
      },
      {
        "type": "paragraph",
        "text": "3. Środki pieniężne przechowywane są na rachunku bankowym Fundacji. Dopuszczalne jest wprowadzenie w Fundacji obrotu gotówkowego (kasy)."
      }
    ]
  },
  {
    "id": "rozdzial-4",
    "label": "Rozdział IV",
    "title": "Organy Fundacji",
    "blocks": [
      {
        "type": "paragraphHeading",
        "text": "§ 17"
      },
      {
        "type": "paragraph",
        "text": "Organami Fundacji są:"
      },
      {
        "type": "paragraph",
        "text": "a. Rada Fundacji, zwana dalej Radą,"
      },
      {
        "type": "paragraph",
        "text": "b. Zarząd Fundacji, zwany dalej Zarządem."
      },
      {
        "type": "paragraphHeading",
        "text": "§ 18"
      },
      {
        "type": "paragraph",
        "text": "1. Fundator może być członkiem Rady Fundacji lub członkiem Zarządu Fundacji."
      },
      {
        "type": "paragraph",
        "text": "2. Nie wolno łączyć funkcji członka Rady Fundacji i członka Zarządu Fundacji."
      },
      {
        "type": "subheading",
        "text": "Rada Fundacji"
      },
      {
        "type": "paragraphHeading",
        "text": "§ 19"
      },
      {
        "type": "paragraph",
        "text": "1. Rada jest organem kontrolnym i inicjatywnym, odrębnym od Zarządu i nie podlegającym mu, w szczególności w zakresie wykonywania kontroli wewnętrznej."
      },
      {
        "type": "paragraph",
        "text": "2. Rada składa się z 2 -4 osób, powołanych i odwoływanych przez Fundatora na czas nieoznaczony."
      },
      {
        "type": "paragraph",
        "text": "3. W razie, gdyby Fundator nie miał zdolności do czynności prawnych lub zmarł nie pozostawiwszy spadkobierców, członków Rady na miejsce osób, które przestały pełnić tę funkcję lub dla rozszerzenia składu Rady, powołuje swą decyzją Rada."
      },
      {
        "type": "paragraph",
        "text": "4. Członkostwo w Radzie Fundacji ustaje w przypadku pisemnej rezygnacji z członkostwa lub śmierci członka Rady."
      },
      {
        "type": "paragraph",
        "text": "5. W przypadku odwołania lub śmierci członka Rady, Fundator dokonuje uzupełnienia składu Rady."
      },
      {
        "type": "paragraph",
        "text": "6. W razie powołania członka Rady Fundacji, za jego zgodą, do Zarządu Fundacji lub nawiązania przez członka Rady Fundacji stosunku pracy z Fundacją – członkostwo takiej osoby w Radzie Fundacji ulega zawieszeniu, odpowiednio na czas pełnienia funkcji lub trwania stosunku pracy."
      },
      {
        "type": "paragraph",
        "text": "7. Przewodniczącym Rady jest - w razie jego powołania do składy Rady - Fundator. Jeżeli Fundator nie jest członkiem Rady, Przewodniczącego Rady wskazuje Fundator a w razie braku takiego wskazania, Rada wybiera ze swego grona Przewodniczącego Rady. Przewodniczący Rady kieruje pracami Rady, reprezentuje ją na zewnątrz oraz zwołuje i przewodniczy zebraniom Rady."
      },
      {
        "type": "paragraph",
        "text": "8. Członkowie Rady nie pobierają wynagrodzenia z tytułu udziału w pracach tego organu, z wyjątkiem zwrotu udokumentowanych wydatków związanych z uczestnictwem w pracach tych organów, w tym kosztów podróży."
      },
      {
        "type": "paragraphHeading",
        "text": "§ 20"
      },
      {
        "type": "paragraph",
        "text": "1. Do kompetencji Rady należy:"
      },
      {
        "type": "paragraph",
        "text": "a. Nadzór i kontrola nad działalnością Fundacji."
      },
      {
        "type": "paragraph",
        "text": "b. Nadzór nad działalnością Zarządu."
      },
      {
        "type": "paragraph",
        "text": "c. Zatwierdzanie rocznych sprawozdań z działalności Fundacji przedstawionych przez Zarząd i udzielanie absolutorium Zarządowi w terminie do 6 miesięcy po upływie każdego roku kalendarzowego."
      },
      {
        "type": "paragraph",
        "text": "d. Występowanie do Zarządu z wnioskami dotyczącymi działalności Fundacji."
      },
      {
        "type": "paragraph",
        "text": "e. Opiniowanie rocznych i wieloletnich programów działania Fundacji."
      },
      {
        "type": "paragraph",
        "text": "f. Wyrażanie opinii w sprawach przedłożonych jej przez Zarząd."
      },
      {
        "type": "paragraphHeading",
        "text": "§ 21"
      },
      {
        "type": "paragraph",
        "text": "1. Rada pracuje na posiedzeniach zwoływanych w miarę potrzeby przez Przewodniczącego Rady z jego inicjatywy lub na wniosek Fundatora lub Zarządu. W posiedzeniach tych może uczestniczyć Fundator oraz Zarząd."
      },
      {
        "type": "paragraph",
        "text": "2. Posiedzenia Rady zwołuje się za pomocą poczty elektronicznej, telefonu lub listem poleconym."
      },
      {
        "type": "paragraph",
        "text": "2. O posiedzeniu Rady muszą zostać poinformowani wszyscy członkowie Rady."
      },
      {
        "type": "paragraph",
        "text": "3. Uchwały Rady Fundacji zapadają zwykłą większością głosów, z tym, że dla ważności tych uchwał wymagana jest obecność Przewodniczącego, chyba że Statut stanowi inaczej."
      },
      {
        "type": "paragraph",
        "text": "4. W razie równej liczby głosów oddanych za i przeciw danej uchwale decyduje głos Przewodniczącego."
      },
      {
        "type": "paragraph",
        "text": "5. Każdy członek Rady ma jeden głos."
      },
      {
        "type": "paragraph",
        "text": "6. Głosowanie może być przeprowadzane w trybie obiegowym."
      },
      {
        "type": "subheading",
        "text": "Zarząd Fundacji"
      },
      {
        "type": "paragraphHeading",
        "text": "§ 22"
      },
      {
        "type": "paragraph",
        "text": "1. Zarząd kieruje działalnością Fundacji i reprezentuje ją na zewnątrz."
      },
      {
        "type": "paragraph",
        "text": "2. Zarząd składa się z 1-4 osób, powoływanych i odwoływanych przez Radę Fundacji na czas nieoznaczony."
      },
      {
        "type": "paragraph",
        "text": "3. Członków Zarządu powołuje i odwołuje Rada Fundacji. Rada Fundacji może odwołać członka Zarządu w każdym czasie, bez podania przyczyn."
      },
      {
        "type": "paragraphHeading",
        "text": "§ 23"
      },
      {
        "type": "paragraph",
        "text": "1. Mandat Członka Zarządu Fundacji wygasa:"
      },
      {
        "type": "paragraph",
        "text": "a. Z chwilą jego odwołania z Zarządu Fundacji przez Radę Fundacji."
      },
      {
        "type": "paragraph",
        "text": "b. Z chwilą doręczenia Przewodniczącemu Rady Fundacji, na adres Fundacji, pisma o rezygnacji z mandatu Członka Zarządu Fundacji."
      },
      {
        "type": "paragraph",
        "text": "c. Z chwilą utraty praw obywatelskich na skutek skazania prawomocnym wyrokiem sądu za przestępstwo popełnione z winy umyślnej."
      },
      {
        "type": "paragraph",
        "text": "d. Z chwilą choroby, ułomności lub utraty sił – powodujących trwałą niezdolność do sprawowania funkcji."
      },
      {
        "type": "paragraph",
        "text": "e. Z chwilą śmierci."
      },
      {
        "type": "paragraphHeading",
        "text": "§ 24"
      },
      {
        "type": "paragraph",
        "text": "1. Prezesa i Wiceprezesa wskazuje Fundator, a w razie braku wskazania Rada."
      },
      {
        "type": "paragraph",
        "text": "2. Zarząd może przyjąć regulamin swojej działalności."
      },
      {
        "type": "paragraphHeading",
        "text": "§ 25"
      },
      {
        "type": "paragraph",
        "text": "1. Posiedzenia Zarządu Fundacji, w razie Zarządu wieloosobowego odbywają się w miarę potrzeb."
      },
      {
        "type": "paragraph",
        "text": "2. Posiedzenia Zarządu zwołuje się za pomocą poczty elektronicznej, telefonu lub listem poleconym."
      },
      {
        "type": "paragraph",
        "text": "3. O posiedzeniu Zarządu muszą zostać poinformowani wszyscy członkowie Zarządu z minimum dwudniowym wyprzedzeniem."
      },
      {
        "type": "paragraph",
        "text": "4. Posiedzenia Zarządu mogą odbywać się w trybie telekonferencji"
      },
      {
        "type": "paragraph",
        "text": "5. Uchwały Zarządu zapadają zwykłą większością głosów."
      },
      {
        "type": "paragraph",
        "text": "6. W razie równej liczby głosów oddanych za i przeciw danej uchwale decyduje głos Prezesa Zarządu."
      },
      {
        "type": "paragraph",
        "text": "7. Każdy członek Zarządu ma jeden głos."
      },
      {
        "type": "paragraph",
        "text": "8. Głosowanie może być przeprowadzane w trybie obiegowym."
      },
      {
        "type": "paragraphHeading",
        "text": "§ 26"
      },
      {
        "type": "paragraph",
        "text": "1. Członkowie Zarządu mogą być zatrudniani w Fundacji zarówno w oparciu o stosunek pracy, jak i stosunki cywilnoprawne."
      },
      {
        "type": "paragraph",
        "text": "2. Wynagrodzenie członków Zarządu z tytułu pełnienia funkcji w Zarządzie ustala Rada Fundacji. W razie Zarządu jednoosobowego, Przewodniczący Rady Fundacji reprezentuje Fundację w zawieraniu umów z Członkiem Zarządu,"
      },
      {
        "type": "paragraphHeading",
        "text": "§ 27"
      },
      {
        "type": "paragraph",
        "text": "1. Do zadań Zarządu Fundacji należy w szczególności:"
      },
      {
        "type": "paragraph",
        "text": "a. Reprezentowanie Fundacji na zewnątrz."
      },
      {
        "type": "paragraph",
        "text": "b. Opracowywanie rocznych i wieloletnich planów pracy."
      },
      {
        "type": "paragraph",
        "text": "c. Opracowanie planu dochodów, wydatków i kosztów działalności."
      },
      {
        "type": "paragraph",
        "text": "d. Sporządzanie rocznych sprawozdań z działalności Fundacji i przedkładanie ich Radzie."
      },
      {
        "type": "paragraph",
        "text": "e. Zarządzanie majątkiem Fundacji."
      },
      {
        "type": "paragraph",
        "text": "f. Przyjmowanie subwencji, darowizn, spadków i zapisów."
      },
      {
        "type": "paragraph",
        "text": "g. Zatrudnianie pracowników i ustalanie ich wynagrodzenia, z zastrzeżeniem § 25 oraz § 35 ust. 2 i 3 Statutu."
      },
      {
        "type": "paragraph",
        "text": "h. Kierowanie bieżącą działalnością Fundacji oraz realizację planów działania Fundacji."
      },
      {
        "type": "paragraph",
        "text": "i. Występowanie z wnioskiem do Rady w sprawie zmian w Statucie, połączenia oraz likwidacji Fundacji."
      },
      {
        "type": "paragraph",
        "text": "j. Podejmowanie uchwał o rejestracji statusu organizacji pożytku publicznego."
      },
      {
        "type": "paragraph",
        "text": "k. Coroczne składanie ministrowi właściwemu ds. rozwoju sprawozdań z działalności Fundacji."
      },
      {
        "type": "paragraph",
        "text": "l. Wykonywanie uchwał Rady Fundacji."
      },
      {
        "type": "paragraph",
        "text": "m. Pozyskiwanie środków na działalność Fundacji."
      },
      {
        "type": "paragraph",
        "text": "n. Podejmowanie decyzji we wszystkich innych sprawach niezastrzeżonych do kompetencji Rady Fundacji."
      }
    ]
  },
  {
    "id": "rozdzial-5",
    "label": "Rozdział V",
    "title": "Sposób reprezentacji",
    "blocks": [
      {
        "type": "paragraphHeading",
        "text": "§ 28"
      },
      {
        "type": "paragraph",
        "text": "1. Reprezentować Fundację na zewnątrz może każdy członek Zarządu samodzielnie."
      },
      {
        "type": "paragraph",
        "text": "2. Do składania oświadczeń woli w sprawach majątkowych uprawniony jest Prezes Zarządu działający samodzielnie."
      },
      {
        "type": "paragraph",
        "text": "3. Każdy członek Zarządu może zostać upoważniony decyzją Prezesa Zarządu do reprezentowania Fundacji w określonej w upoważnieniu sprawie i określonym zakresie. Upoważnienie wymaga zachowania formy pisemnej."
      },
      {
        "type": "paragraph",
        "text": "4. W stosunkach pomiędzy Prezesem Zarządu a Fundacją, oświadczenia woli w imieniu Fundacji składa Wiceprezes Zarządu działający samodzielnie, lub pełnomocnik upoważniony uchwałą Zarządu lub Przewodniczący Rady."
      }
    ]
  },
  {
    "id": "rozdzial-6",
    "label": "6. Rozdział VI",
    "title": "Działalność gospodarcza",
    "blocks": [
      {
        "type": "paragraph",
        "text": "47.99.Z Pozostała sprzedaż detaliczna prowadzona poza siecią sklepową , straganami i targowiskami,"
      },
      {
        "type": "paragraph",
        "text": "49.39.Z Pozostały transport lądowy pasażerski, gdzie indziej niesklasyfikowany"
      },
      {
        "type": "paragraph",
        "text": "56.29.Z Pozostała usługowa działalność gastronomiczna"
      },
      {
        "type": "paragraph",
        "text": "79.12.Z Działalność organizatorów turystyki,"
      },
      {
        "type": "paragraph",
        "text": "87.30.Z Pomoc społeczna z zakwaterowaniem dla osób w podeszłym wieku i osób niepełnosprawnych,"
      },
      {
        "type": "paragraph",
        "text": "88.10.Z Pomoc społeczna bez zakwaterowania dla osób w podeszłym wieku i osób niepełnosprawnych,"
      },
      {
        "type": "paragraph",
        "text": "85.59 B Pozostałe pozaszkolne formy edukacji, gdzie indziej niesklasyfikowane"
      },
      {
        "type": "paragraph",
        "text": "93.19 Z Pozostała działalność związana ze sportem"
      },
      {
        "type": "paragraph",
        "text": "93.29.Z Pozostała działalność rozrywkowa i rekreacyjna."
      },
      {
        "type": "paragraph",
        "text": "58.11 Z Wydawanie książek"
      },
      {
        "type": "paragraph",
        "text": "58.14 Z Wydawanie czasopism i pozostałych periodyków"
      },
      {
        "type": "paragraph",
        "text": "58.19 Z Pozostała działalność wydawnicza"
      },
      {
        "type": "paragraph",
        "text": "70.21 Z Stosunki międzyludzkie (public relations) i komunikacja"
      },
      {
        "type": "paragraph",
        "text": "72.19 Z Badania naukowe i prace rozwojowe w dziedzinie pozostałych nauk przyrodniczych i technicznych"
      },
      {
        "type": "paragraph",
        "text": "72.20 Z Badania naukowe i prace rozwojowe w dziedzinie nauk społecznych i humanistycznych"
      },
      {
        "type": "paragraph",
        "text": "78.10 Z Działalność związana z wyszukiwaniem miejsc pracy i pozyskiwaniem pracowników"
      },
      {
        "type": "paragraph",
        "text": "78.20 .Z Działalność agencji pracy tymczasowej"
      },
      {
        "type": "paragraph",
        "text": "78.30 Z Pozostała działalność związana z udostępnianiem pracowników"
      },
      {
        "type": "paragraph",
        "text": "79.12 Z Działalność organizatorów turystyki"
      },
      {
        "type": "paragraph",
        "text": "82.30 Z Działalność związana z organizacją targów, wystaw i kongresów"
      },
      {
        "type": "paragraph",
        "text": "85.10 Z Wychowanie przedszkolne"
      },
      {
        "type": "paragraph",
        "text": "85.20 Z Szkoły podstawowe"
      },
      {
        "type": "paragraph",
        "text": "85.32 .C Szkoły specjalne przysposabiające do pracy"
      },
      {
        "type": "paragraph",
        "text": "85.42 A Zakłady kształcenia nauczycieli i kolegia pracowników służb społecznych."
      },
      {
        "type": "paragraph",
        "text": "85.51 Z Pozaszkolne formy edukacji sportowej oraz zajęć sportowych i rekreacyjnych"
      },
      {
        "type": "paragraph",
        "text": "85.52 Z Pozaszkolne formy edukacji artystycznej"
      },
      {
        "type": "paragraph",
        "text": "85.59 B Pozostałe pozaszkolne formy edukacji, gdzie indziej niesklasyfikowane"
      },
      {
        "type": "paragraph",
        "text": "85.60 Z Działalność wspomagająca edukację"
      },
      {
        "type": "paragraph",
        "text": "86.90 A Działalność fizjoterapeutyczna"
      },
      {
        "type": "paragraph",
        "text": "86.90E Pozostała działalność w zakresie opieki zdrowotnej, gdzie indziej niesklasyfikowana"
      },
      {
        "type": "paragraph",
        "text": "86.93.Z – Działalność psychologiczna i psychoterapeutyczna, z wyłączeniem lekarskiej"
      },
      {
        "type": "paragraph",
        "text": "87.10 Z Pomoc społeczna z zakwaterowaniem zapewniająca opiekę pielęgniarską"
      },
      {
        "type": "paragraph",
        "text": "87.90 Z Pozostała pomoc społeczna z zakwaterowaniem"
      },
      {
        "type": "paragraph",
        "text": "59.11 Z Działalność związana z produkcją filmów, nagrań wideo i programów telewizyjnych"
      },
      {
        "type": "paragraph",
        "text": "63.12 Z Działalność portali internetowych"
      },
      {
        "type": "paragraph",
        "text": "63.99 Z Pozostała działalność usługowa w zakresie informacji, gdzie indziej niesklasyfikowana"
      },
      {
        "type": "paragraph",
        "text": "68.20 Z Wynajem i zarządzanie nieruchomościami własnymi lub dzierżawionymi"
      },
      {
        "type": "paragraph",
        "text": "70.21 Z Stosunki międzyludzkie (public relations) i komunikacja"
      },
      {
        "type": "paragraph",
        "text": "70.22 Z Pozostałe doradztwo w zakresie prowadzenia działalności gospodarczej i zarządzania"
      },
      {
        "type": "paragraph",
        "text": "71.11 Z Działalność w zakresie architektury"
      },
      {
        "type": "paragraph",
        "text": "72.19 Z Badania naukowe i prace rozwojowe w dziedzinie pozostałych nauk przyrodniczych i technicznych"
      },
      {
        "type": "paragraph",
        "text": "73.11 Z Działalność agencji reklamowych"
      },
      {
        "type": "paragraph",
        "text": "74.90 Z Pozostała działalność profesjonalna, naukowa i techniczna, gdzie indziej niesklasyfikowana"
      },
      {
        "type": "paragraph",
        "text": "82.11 Z Działalność usługowa związana z administracyjną obsługą biura"
      },
      {
        "type": "paragraph",
        "text": "82.99 Z Pozostała działalność wspomagająca prowadzenie działalności gospodarczej, gdzie indziej niesklasyfikowana"
      },
      {
        "type": "paragraph",
        "text": "85.59 Z Nauka języków obcych"
      },
      {
        "type": "paragraph",
        "text": "86.90 Działalność fizjoterapeutyczna"
      },
      {
        "type": "paragraph",
        "text": "96.04 Z Działalność usługowa związana z poprawą kondycji fizycznej."
      }
    ]
  },
  {
    "id": "rozdzial-7",
    "label": "Rozdział VII",
    "title": "Zmiana statutu",
    "blocks": [
      {
        "type": "paragraphHeading",
        "text": "§ 29"
      },
      {
        "type": "paragraph",
        "text": "Zmiany statutu Fundacji, w tym celów Fundacji, dokonuje: Fundator z własnej inicjatywy lub na wniosek Rady lub Zarządu."
      }
    ]
  },
  {
    "id": "rozdzial-8",
    "label": "Rozdział VIII",
    "title": "Postanowienia końcowe",
    "blocks": [
      {
        "type": "paragraphHeading",
        "text": "§ 30"
      },
      {
        "type": "paragraph",
        "text": "1. Dla efektywnego realizowania swoich celów Fundacja może połączyć się z inną fundacją."
      },
      {
        "type": "paragraph",
        "text": "2. W sprawach połączenia z inną fundacją decyzję podejmuje Rada i wymagana jest zgoda Fundatora."
      },
      {
        "type": "paragraphHeading",
        "text": "§ 31"
      },
      {
        "type": "paragraph",
        "text": "1. Fundacja ulega likwidacji w razie osiągnięcia celów, dla których została ustanowiona lub w razie Wyczerpania się jej środków finansowych I majątku."
      },
      {
        "type": "paragraph",
        "text": "2. Decyzję o likwidacji podejmuje Fundator lub jednogłośnie Rada przy obecności co najmniej połowy Członków."
      },
      {
        "type": "paragraph",
        "text": "3. Jeżeli po zaspokojeniu wierzycieli likwidowanej Fundacji pozostaną środki majątkowe, odpowiednio Fundator lub Rada Fundacji przeznaczy je na rzecz działających w Polsce organizacji o zbliżonych celach."
      },
      {
        "type": "paragraphHeading",
        "text": "§ 32"
      },
      {
        "type": "paragraph",
        "text": "1. W przypadku śmierci albo choroby, ułomności lub utraty sił – powodujących trwałą niezdolność Fundatora do wykonywania uprawnień wynikających ze statutu, jego uprawnienia Przewidziane w statucie wykonują jego spadkobiercy, a do czasu ich powołania wykonuje je Rada chyba że statut stanowi inaczej."
      }
    ]
  }
];
