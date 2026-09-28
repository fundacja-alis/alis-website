import Link from "next/link";
import { site } from "@/data/site";
import { registry } from "@/data/foundation";
export function Footer() {
  return (
    <footer className="footer footer-compact">
      <div className="shell footer-contact">
        <address><strong>{site.name}</strong><span>{site.address}</span><span>{site.city}</span><a href={`mailto:${site.email}`}>{site.email}</a><span className="footer-registry">KRS {registry.krs} · NIP {registry.nip} · REGON {registry.regon}</span><span>Zarząd Fundacji — Prezes Dawid Mikosiński</span></address>
        <nav className="footer-links" aria-label="Informacje o fundacji">
          <a
            href={site.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fundacja Rozwoju ALIS na Facebooku (otwiera się w nowej karcie)"
            style={{ display: "inline-flex", alignItems: "center", alignSelf: "flex-start", gap: 8 }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
              <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047v-2.66c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.971h-1.513c-1.491 0-1.956.931-1.956 1.887v2.263h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073Z" />
            </svg>
            Facebook
          </a>
          <Link href="/dokumenty">Dokumenty</Link>
          <Link href="/polityka-prywatnosci">Polityka prywatności</Link>
        </nav>
      </div>
      <div className="shell footer-inner">
        <span className="footer-copyright">© 2026 Fundacja Rozwoju ALIS</span>
        <span className="footer-credit">powered by <strong>AIgentka</strong></span>
      </div>
    </footer>
  );
}
