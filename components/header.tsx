"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navigation } from "@/data/site";
export function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        document.getElementById("menu-button")?.focus();
      }
    };
    if (open) window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="header">
      <div className="shell header-inner">
        <Link
          href="/"
          className="brand"
          aria-label="Fundacja Rozwoju ALIS — strona główna"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/logo.webp"
            width={765}
            height={437}
            alt=""
            priority
          />
          <span>
            Fundacja Rozwoju<strong>ALIS</strong>
          </span>
        </Link>
        <button
          id="menu-button"
          className="menu-button"
          aria-expanded={open}
          aria-controls="navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "Zamknij ×" : "Menu ☰"}
        </button>
        <nav
          id="navigation"
          aria-label="Menu główne"
          className={open ? "navigation is-open" : "navigation"}
        >
          {navigation.map(([name, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>
              {name}
              {name === "Kontakt" && <span aria-hidden="true"> ↗</span>}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
