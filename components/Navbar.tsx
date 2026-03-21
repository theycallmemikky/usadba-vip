"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { href: "/", label: "Главная" },
  { href: "/cottages", label: "Коттеджи" },
  { href: "/apartments", label: "Апартаменты" },
  { href: "/gallery", label: "Галерея" },
  { href: "/reviews", label: "Отзывы" },
  { href: "/news", label: "Новости" },
  { href: "/contacts", label: "Контакты" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(10, 10, 18, 0.95)"
            : "linear-gradient(to bottom, rgba(10,10,18,0.85), transparent)",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(201,168,76,0.15)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex flex-col leading-none group">
              <span
                className="font-display text-2xl font-semibold tracking-wider gold-gradient-text"
                style={{ fontFamily: "var(--font-display)" }}
              >
                УСАДЬБА
              </span>
              <span
                className="text-xs tracking-[0.35em] uppercase"
                style={{ color: "var(--color-gold-muted)", letterSpacing: "0.35em" }}
              >
                VIP · СОЧИ
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm tracking-widest uppercase transition-colors duration-200 relative group"
                  style={{
                    color:
                      pathname === l.href
                        ? "var(--color-gold)"
                        : "var(--color-text-muted)",
                    letterSpacing: "0.1em",
                  }}
                >
                  {l.label}
                  <span
                    className="absolute -bottom-1 left-0 h-px transition-all duration-300"
                    style={{
                      background: "var(--color-gold)",
                      width: pathname === l.href ? "100%" : "0%",
                    }}
                  />
                </Link>
              ))}
            </nav>

            {/* Phone CTA */}
            <a
              href="tel:+79888800004"
              className="hidden lg:flex items-center gap-2 px-4 py-2 rounded btn-outline-gold text-sm"
            >
              <Phone size={14} />
              <span className="tracking-wider">+7 988 880-00-04</span>
            </a>

            {/* Burger */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="lg:hidden p-2 text-gold transition-colors"
              aria-label="Меню"
              style={{ color: "var(--color-gold)" }}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className="fixed inset-0 z-40 lg:hidden transition-all duration-300"
        style={{
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "rgba(10,10,18,0.97)", backdropFilter: "blur(20px)" }}
          onClick={() => setMenuOpen(false)}
        />
        <nav className="relative flex flex-col items-center justify-center h-full gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-display text-3xl font-light tracking-widest transition-colors duration-200"
              style={{
                color:
                  pathname === l.href ? "var(--color-gold)" : "var(--color-text)",
                fontFamily: "var(--font-display)",
              }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:+79888800004"
            className="mt-4 flex items-center gap-2 px-6 py-3 rounded btn-gold text-sm"
          >
            <Phone size={14} />
            +7 988 880-00-04
          </a>
        </nav>
      </div>
    </>
  );
}
