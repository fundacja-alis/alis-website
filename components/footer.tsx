import Link from "next/link";
import { site } from "@/data/site";
export function Footer() {
  return (
    <footer className="footer footer-compact">
      <div className="shell footer-contact">
        <address><strong>{site.name}</strong><span>{site.address}</span><span>{site.city}</span><a href={`mailto:${site.email}`}>{site.email}</a></address>
        <nav className="footer-links" aria-label="Informacje o fundacji">
          <Link href="/dokumenty">Dokumenty</Link>
          <Link href="/dokumenty/statut">Statut</Link>
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
