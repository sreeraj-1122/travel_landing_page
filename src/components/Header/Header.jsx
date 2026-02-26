"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "@/assets/Logo.jpg";
import "./header.scss";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("EN");

  const languages = ["EN", "ES", "FR"];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Destinations", href: "#destinations" },
    { label: "Hotels", href: "#hotels" },
    { label: "Flights", href: "#flights" },
    { label: "Bookings", href: "#bookings" },
  ];

  return (
    <header
      className={`header${open ? " open" : ""}${scrolled ? " header--scrolled" : ""}`}
    >
      <div className="header__inner">
        <a href="#" className="header__logo" aria-label="Jadoo home">
          <Image src={Logo} alt="Jadoo Logo" width={115} height={34} priority />
        </a>
        <nav className="header__nav" aria-label="Main navigation">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} className="header__nav-link">
              {l.label}
            </a>
          ))}

          <div className="header__actions">
            <a href="#login" className="header__login">
              Login
            </a>
            <button className="header__signup" type="button">
              <span className="header__signup-border" />
              <span className="header__signup-text">Sign up</span>
            </button>
          </div>
        </nav>

        <div
          className={`header__lang${langOpen ? " open" : ""}`}
          aria-label="Language selector"
        >
          <button
            className="header__lang-toggle"
            onClick={() => setLangOpen(!langOpen)}
          >
            <span>{selectedLang}</span>
            <span className="header__lang-arrow" aria-hidden="true" />
          </button>

          {langOpen && (
            <ul className="header__lang-dropdown">
              {languages.map((lang) => (
                <li key={lang}>
                  <button
                    onClick={() => {
                      setSelectedLang(lang);
                      setLangOpen(false);
                    }}
                    className={selectedLang === lang ? "active" : ""}
                  >
                    {lang}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <button
          className="header__hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
