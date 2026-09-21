import Link from "next/link";
import { site } from "@/data/site";
export function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer-top">
          <Link href="/" className="footer-logo">
            ALIS<span>Fundacja Rozwoju</span>
          </Link>
          <p>
            Rozwijamy skrzydła.
            <br />
            Ludzi. Idei. Społeczności.
          </p>
          <div>
            <Link href="/#o-nas">O Fundacji</Link>
            <Link href="/#projekty">Projekty</Link>
            <Link href="/#kontakt">Kontakt</Link>
          </div>
          <div>
            <Link href="/#aktualnosci">Aktualności</Link>
            <Link href="/dokumenty">Dokumenty</Link>
            <Link href="/polityka-prywatnosci">Polityka prywatności</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {site.name}
          </span>
          <span>Z Tarnowa. Z myślą o możliwościach.</span>
          <a href="#main">Wróć na górę ↑</a>
        </div>
      </div>
    </footer>
  );
}
