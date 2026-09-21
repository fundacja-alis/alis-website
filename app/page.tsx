import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { areas } from "@/data/areas";
import { projects } from "@/data/projects";
import { news } from "@/data/news";
import { site, siteUrl } from "@/data/site";
import { involvement, inquiryHref } from "@/data/involvement";
export const metadata: Metadata = {
  alternates: { canonical: siteUrl ? `${siteUrl}/` : undefined },
};
const Arrow = () => <span aria-hidden="true">↗</span>;
export default function Home() {
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NGO",
            name: site.name,
            description: site.description,
            foundingDate: "2026-04-29",
            ...(siteUrl ? { url: siteUrl } : {}),
            email: site.email,
            address: {
              "@type": "PostalAddress",
              streetAddress: site.address,
              addressLocality: "Tarnów",
              postalCode: "33-100",
              addressCountry: "PL",
            },
          }).replace(/</g, "\\u003c"),
        }}
      />
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
          <p className="hero-description">
            Tworzymy i wspieramy inicjatywy, które pomagają ludziom rozwijać
            możliwości, zdobywać kompetencje i budować lepszą przyszłość.
          </p>
          <div className="actions">
            <a className="button" href="#dzialamy">
              Poznaj nasze działania <Arrow />
            </a>
            <a className="text-link" href="#dolacz">
              Znajdź swoje miejsce <Arrow />
            </a>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true"><span>PRZESTRZEŃ DLA MOŻLIWOŚCI</span></div>
        <div className="hero-bottom">
          <span>
            Edukacja <i /> Człowiek <i /> Technologie <i /> Społeczność <i />{" "}
            Rozwój
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
            <p className="lead">
              Łączymy ludzi, wiedzę i środowiska, które często funkcjonują
              osobno.
            </p>
            <div>
              <p>
                Fundacja Rozwoju ALIS powstała w Tarnowie w 2026 roku. Tworzymy
                i wspieramy przedsięwzięcia, które pomagają ludziom rozwijać
                swoje możliwości.
              </p>
              <p>
                Od edukacji i wsparcia psychologicznego, przez rozwój
                kompetencji i nowe technologie, po inicjatywy społeczne,
                zawodowe i lokalne. Wierzymy, że każdy kolejny krok może
                otworzyć coś ważnego.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="dolacz" className="shell involvement-section" aria-labelledby="involvement-title">
        <div className="section-heading">
          <div><p className="eyebrow">TWÓJ PIERWSZY KROK</p><h2 id="involvement-title">Jest tu miejsce<br />także dla Ciebie.</h2></div>
          <p>Chcesz się rozwijać, dzielić wiedzą czy tworzyć coś wspólnie? Zacznij od tego, co jest Ci bliskie.</p>
        </div>
        <div className="involvement-grid">
          {involvement.map((item) => <article key={item.id} id={item.id} className="involvement-card">
            <p className="eyebrow">{item.label}</p><h3>{item.title}</h3><p>{item.description}</p>
            <a className="text-link" href={inquiryHref(item.subject, item.body)}>{item.cta} <Arrow /></a>
          </article>)}
        </div>
        <p className="involvement-note">Link otworzy wiadomość e-mail z podpowiedzią, co napisać. To początek rozmowy — nie zapis do programu.</p>
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
          <div className="areas">
            {areas.map((area, i) => (
              <details className="area" key={area.title}>
                <summary>
                  <span className="area-number">0{i + 1}</span>
                  <h3>{area.title}</h3>
                  <span className="area-short">{area.short}</span>
                  <span className="area-toggle" aria-hidden="true">
                    +
                  </span>
                </summary>
                <div className="area-body">
                  <p>{area.description}</p>
                  <ul>
                    {area.topics.map((topic) => (
                      <li key={topic}>{topic}</li>
                    ))}
                  </ul>
                </div>
              </details>
            ))}
          </div>
          <p className="areas-note">
            Warsztaty, spotkania i wydarzenia są sposobem realizacji naszych
            działań — w każdym z tych obszarów.
          </p>
        </div>
      </section>
      <section id="projekty" className="section shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">03 / PROJEKTY ALIS</p>
            <h2>To, co tworzymy.</h2>
          </div>
          <p>
            Miejsca, programy i inicjatywy.
            <br />
            Nasza misja w praktyce.
          </p>
        </div>
        {projects.length ? (
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
        ) : (
          <div className="project-empty">
            <div className="project-graphic" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
              <p>
                OD IDEI
                <br />
                DO MOŻLIWOŚCI.
              </p>
            </div>
            <div className="empty-copy">
              <span className="eyebrow">MIEJSCE NA KOLEJNE KROKI</span>
              <h3>
                Każda inicjatywa
                <br />
                zaczyna się od idei.
              </h3>
              <p>
                Tutaj będziemy przedstawiać projekty Fundacji i inicjatywy
                partnerskie — ich cele, przebieg i możliwości zaangażowania.
              </p>
              <a className="text-link" href="#wspolpraca">
                Porozmawiajmy o Twoim pomyśle <Arrow />
              </a>
            </div>
          </div>
        )}
      </section>
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
      <section id="aktualnosci" className="section shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">04 / AKTUALNOŚCI</p>
            <h2>Co nowego w ALIS?</h2>
          </div>
          <p>
            Inicjatywy, spotkania i kolejne kroki.
            <br />
            Bądź blisko naszych działań.
          </p>
        </div>
        {news.length ? (
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
        ) : (
          <div className="news-empty">
            <span className="news-mark" aria-hidden="true">
              ↗
            </span>
            <div>
              <h3>Nowe historie pojawią się tutaj.</h3>
              <p>
                Informacje o projektach, wydarzeniach i współpracach będziemy
                publikować na bieżąco.
              </p>
            </div>
            <a href="#kontakt" className="text-link">
              Pozostańmy w kontakcie <Arrow />
            </a>
          </div>
        )}
      </section>
      <section id="wspolpraca" className="cooperation section">
        <div className="shell cooperation-grid">
          <div>
            <p className="eyebrow">05 / WSPÓŁPRACA</p>
            <h2>
              Zróbmy coś
              <br />
              <span>razem.</span>
            </h2>
            <p>
              Dobre projekty rzadko powstają w pojedynkę. Jesteśmy otwarci na
              współpracę z ludźmi i organizacjami, które chcą tworzyć rzeczy
              wartościowe dla edukacji, rozwoju i społeczności.
            </p>
          </div>
          <div className="cooperation-right">
            <h3>
              Różne doświadczenia.
              <br />
              Wspólne możliwości.
            </h3>
            <div className="partner-types">
              {[
                "Firmy i przedsiębiorcy",
                "Szkoły i uczelnie",
                "Specjaliści i eksperci",
                "Organizacje społeczne",
                "Samorządy i instytucje",
                "Wolontariusze",
                "Środowiska technologiczne",
                "Darczyńcy",
                "Lokalne społeczności",
              ].map((x) => (
                <span key={x}>{x}</span>
              ))}
            </div>
            <a href={inquiryHref(involvement[2].subject, involvement[2].body)} className="text-link">
              Opowiedz o swoim pomyśle <Arrow />
            </a>
          </div>
        </div>
      </section>
      <section id="kontakt" className="section shell contact">
        <div>
          <p className="eyebrow">06 / KONTAKT</p>
          <h2>
            Masz pomysł, który
            <br />
            pasuje do naszej misji?
          </h2>
          <a href={`mailto:${site.email}`} className="contact-cta">
            Porozmawiajmy. <Arrow />
          </a>
          <p className="contact-guidance">Napisz, co chcesz zrobić i kogo dotyczy Twój pomysł. Na początek wystarczy kilka zdań.</p>
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
