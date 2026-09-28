import { pageMetadata } from "@/utils/seo";
import { JsonLd } from "@/components/json-ld";
import { registry } from "@/data/foundation";
import Link from "next/link";
import Image from "next/image";
import { areas } from "@/data/areas";
import { publishedProjects as projects } from "@/data/projects";
import { publishedNews as news } from "@/data/news";
import { site, siteUrl } from "@/data/site";
import { involvement } from "@/data/involvement";
import { ContactForm } from "@/components/contact-form";
export const metadata = pageMetadata({ title: site.title, description: site.description, path: "/" });
const Arrow = () => <span aria-hidden="true">↗</span>;
export default function Home() {
  return (
    <main id="main">
      <JsonLd data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "NGO",
            "@id": `${siteUrl}/#organization`,
            name: site.name,
            description: site.description,
            foundingDate: "2026-04-29",
            url: `${siteUrl}/`,
            logo: `${siteUrl}/images/logo.webp`,
            sameAs: [site.facebook],
            email: site.email,
            taxID: registry.nip,
            identifier: { "@type": "PropertyValue", propertyID: "KRS", value: registry.krs },
            address: {
              "@type": "PostalAddress",
              streetAddress: site.address,
              addressLocality: "Tarnów",
              postalCode: "33-100",
              addressCountry: "PL",
            },
          },
          {
            "@type": "WebSite",
            "@id": `${siteUrl}/#website`,
            url: `${siteUrl}/`,
            name: site.name,
            alternateName: "Fundacja ALIS",
            inLanguage: "pl-PL",
            publisher: { "@id": `${siteUrl}/#organization` },
          },
        ],
      }} />
      <section className="hero shell">
        <Image className="hero-image" src="/images/hero-sculpture.webp" alt="" fill priority sizes="100vw" />
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="dot" /> FUNDACJA ROZWOJU ALIS · TARNÓW
          </p>
          <h1>
            Rozwijamy
            <br />
            <span>skrzydła.</span>
          </h1>
          <p className="hero-subtitle">Ludzi. Idei. Społeczności.</p>
          <p className="hero-description">Działamy na styku edukacji, zdrowia psychicznego, nowych technologii i rozwoju społecznego. Tworzymy rozwiązania, które odpowiadają na rzeczywiste potrzeby ludzi i społeczności.</p>
          <div className="actions">
            <a className="button" href="#dzialamy">
              Poznaj nasze działania <Arrow />
            </a>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true"><span>PRZESTRZEŃ DLA MOŻLIWOŚCI</span></div>
        <div className="hero-bottom">
          <span>
            Edukacja <i /> Zdrowie psychiczne <i /> Technologie <i /> Rozwój społeczny
          </span>
          <a href="#o-nas">
            Poznaj ALIS <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>
      <section id="o-nas" className="section about shell">
        <p className="eyebrow section-label">01 / O FUNDACJI</p>
        <div>
          <h2>
            Rozwój nie ma
            <br />
            jednej ścieżki.
          </h2>
          <div className="about-columns">
            <p className="lead">Fundacja Rozwoju ALIS działa od 2026 roku w Tarnowie. Prowadzimy placówki, rozwijamy własne inicjatywy i tworzymy partnerstwa.</p>
            <div>
              <p>Pracujemy zarówno nad długofalowymi przedsięwzięciami, jak i projektami rozwiązującymi konkretne problemy.</p>
              <p>Do naszych stałych działań należy prowadzenie MOS „Rozwiń Skrzydła” wraz ze szkołą podstawową oraz Zespołu Szkół Niepublicznych w Tarnowie. Ich działalność uzupełniamy współpracą ze specjalistami, organizacjami, instytucjami i biznesem.</p>
              <Link href="/dokumenty/statut" className="text-link">Przeczytaj statut Fundacji <Arrow /></Link>
            </div>
          </div>

        </div>
      </section>
      <section id="dzialamy" className="areas-section section">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / KIERUNKI DZIAŁANIA</p>
              <h2>
                Wiele możliwości.
                <br />
                Jeden kierunek: rozwój.
              </h2>
            </div>
            <p>
              Pięć obszarów, które się przenikają.
              <br />
              Człowiek zawsze w centrum.
            </p>
          </div>
          <div className="areas area-overview">
            {areas.map((area, i) => (
              <article className="area" key={area.title}>
                <div className="area-heading">
                  <span className="area-number">0{i + 1}</span>
                  <h3>{area.title}</h3>
                  <span className="area-short">{area.short}</span>
                </div>
                <div className="area-body">
                  <div>{area.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
                  <ul>
                    {area.topics.map((topic) => (
                      <li key={topic}>{topic}</li>
                    ))}
                  </ul>
                </div>
                {area.facilities && <div className="facility-list">
                  {area.facilities.map((facility) => <details className="facility-item" key={facility.href}>
                    <summary className="facility-summary">
                      <span className="facility-logo"><Image src={facility.logo} alt="" width={facility.logoWidth} height={facility.logoHeight} sizes="(max-width: 560px) 88px, 160px" /></span>
                      <span className="facility-label"><span className="facility-title">{facility.title}</span><span className="facility-subtitle">{facility.subtitle}</span></span>
                      <span className="facility-toggle" aria-hidden="true">+</span>
                    </summary>
                    <div className="facility-content">
                      {facility.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                      <a className="text-link" href={facility.href} target="_blank" rel="noopener noreferrer">{facility.cta} <span className="sr-only">(otwiera nową kartę)</span><Arrow /></a>
                    </div>
                  </details>)}
                </div>}
              </article>
            ))}
          </div>
          <p className="areas-note">
            Warsztaty, spotkania i wydarzenia są sposobem realizacji naszych
            działań — w każdym z tych obszarów.
          </p>
        </div>
      </section>
      {projects.length > 0 && (
      <section id="projekty" className="section shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">PROJEKTY ALIS</p>
            <h2>Od pomysłu do działania.</h2>
          </div>
          <p>
            Realizujemy własne inicjatywy oraz projekty we współpracy z instytucjami, organizacjami, specjalistami i biznesem. Koncentrujemy się na przedsięwzięciach, które odpowiadają na rzeczywiste potrzeby i prowadzą do konkretnej zmiany.
          </p>
        </div>
          <div className="cards">
            {[...projects]
              .sort((a, b) => Number(b.featured) - Number(a.featured))
              .map((project) => (
                <article className="project-card" key={project.slug}>
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    width={900}
                    height={600}
                  />
                  <div className="card-content">
                    <span className="eyebrow">
                      {project.category} · {project.status}
                    </span>
                    <h3>{project.title}</h3>
                    <p>{project.excerpt}</p>
                    <p className="ownership">
                      {project.ownership === "foundation"
                        ? "Projekt Fundacji ALIS"
                        : "Współpraca / partner projektu"}
                      {project.partner && ` · ${project.partner}`}
                    </p>
                    <Link
                      className="text-link"
                      href={`/projekty/${project.slug}`}
                    >
                      Zobacz projekt <Arrow />
                    </Link>
                  </div>
                </article>
              ))}
          </div>
      </section>
      )}
      <section className="manifesto">
        <div className="shell manifesto-inner">
          <p className="eyebrow">WIERZYMY W MOŻLIWOŚCI</p>
          <h2>
            Rozwój nie zawsze
            <br />
            zaczyna się
            <br />
            <span>w tym samym miejscu.</span>
          </h2>
          <div className="manifesto-bottom">
            <div>
              <p>Czasem od szkoły. Czasem od rozmowy.</p>
              <p>Od zdobycia nowej umiejętności. Od pierwszej pracy.</p>
              <p>Od własnego projektu. Od spotkania właściwych ludzi.</p>
            </div>
            <p className="manifesto-conclusion">
              My tworzymy przestrzeń,
              <br />
              żeby mógł się zacząć. <Arrow />
            </p>
          </div>
        </div>
      </section>
      {news.length > 0 && (
      <section id="aktualnosci" className="section shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">AKTUALNOŚCI</p>
            <h2>Co nowego w ALIS?</h2>
          </div>
          <p>
            Inicjatywy, spotkania i kolejne kroki.
            <br />
            Bądź blisko naszych działań.
          </p>
        </div>
          <div className="cards">
            {[...news]
              .sort((a, b) => b.date.localeCompare(a.date))
              .map((item) => (
                <article className="news-card" key={item.slug}>
                  <p className="eyebrow">
                    {item.category} ·{" "}
                    <time dateTime={item.date}>
                      {new Date(item.date).toLocaleDateString("pl-PL", {
                        timeZone: "UTC",
                      })}
                    </time>
                  </p>
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                  <Link
                    className="text-link"
                    href={`/aktualnosci/${item.slug}`}
                  >
                    Czytaj więcej <Arrow />
                  </Link>
                </article>
              ))}
          </div>
      </section>
      )}
      <section id="wspolpraca" className="shell involvement-section" aria-labelledby="involvement-title">
        <span id="dolacz" className="section-anchor" aria-hidden="true" />
        <div className="section-heading">
          <div><p className="eyebrow">WSPÓŁPRACA</p><h2 id="involvement-title">Zróbmy coś razem.</h2></div>
          <p>Współpracujemy z osobami, firmami, instytucjami, uczelniami i organizacjami, które chcą razem z nami tworzyć wartościowe działania. Możesz dołączyć jako partner, wolontariusz, darczyńca albo wesprzeć konkretną inicjatywę.</p>
        </div>
        <div className="involvement-grid">
          {involvement.map((item) => <article key={item.id} id={item.id} className="involvement-card">
            <p className="eyebrow">{item.label}</p><h3>{item.title}</h3><p>{item.description}</p>
          </article>)}
        </div>
        <ContactForm />
      </section>
      <section id="kontakt" className="section shell contact">
        <div>
          <p className="eyebrow">KONTAKT</p>
          <h2>Kontakt z Fundacją.</h2>
          <p className="contact-guidance">W sprawach dotyczących Fundacji i jej działalności napisz na adres naszego biura.</p>
          <Link href="/dokumenty" className="text-link">Poznaj zasady działania Fundacji <Arrow /></Link>
        </div>
        <address>
          <div>
            <span>NAPISZ DO NAS</span>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
          <div>
            <span>ODWIEDŹ NAS</span>
            <p>
              {site.name}
              <br />
              {site.address}
              <br />
              {site.city}
            </p>
          </div>
        </address>
      </section>
    </main>
  );
}
