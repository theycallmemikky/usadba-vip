import Link from "next/link";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const navLinks = [
  { href: "/cottages", label: "Коттеджи" },
  { href: "/apartments", label: "Апартаменты" },
  { href: "/flats", label: "Квартиры" },
  { href: "/gallery", label: "Галерея" },
  { href: "/reviews", label: "Отзывы" },
  { href: "/news", label: "Новости" },
  { href: "/contacts", label: "Контакты" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--color-navy-2)",
        borderTop: "1px solid var(--color-border-gold)",
      }}
    >
      {/* Top divider */}
      <div className="gold-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <span
                className="font-display text-3xl font-semibold gold-gradient-text block"
                style={{ fontFamily: "var(--font-display)" }}
              >
                УСАДЬБА
              </span>
              <span
                className="text-xs tracking-[0.35em] uppercase"
                style={{ color: "var(--color-gold-muted)" }}
              >
                VIP · СОЧИ
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
              Элитный комплекс для отдыха в Хостинском районе Сочи. Коттеджи,
              апартаменты и виллы с видом на море.
            </p>
            {/* Messengers */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://max.ru/u/f9LHodD0cOIR__cZdie05pnHwEMWYzpGyp27pcPXnNoAdYHuko1Xvici1Ec"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded text-xs btn-outline-gold"
              >
                <MessageCircle size={14} />
                MAX
              </a>
              <a
                href="https://t.me/+79888800004"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded text-xs btn-outline-gold"
              >
                <MessageCircle size={14} />
                Telegram
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-xs tracking-[0.2em] uppercase mb-6 font-semibold"
              style={{ color: "var(--color-gold)" }}
            >
              Навигация
            </h4>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm transition-colors duration-200 hover:text-gold"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4
              className="text-xs tracking-[0.2em] uppercase mb-6 font-semibold"
              style={{ color: "var(--color-gold)" }}
            >
              Контакты
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+79888800004"
                  className="flex items-center gap-3 text-sm transition-colors hover:text-gold"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  <Phone size={14} style={{ color: "var(--color-gold)", flexShrink: 0 }} />
                  +7 988 880-00-04
                </a>
              </li>
              <li>
                <a
                  href="mailto:usadba89888800004@gmail.com"
                  className="flex items-start gap-3 text-sm transition-colors hover:text-gold"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  <Mail size={14} style={{ color: "var(--color-gold)", flexShrink: 0, marginTop: 2 }} />
                  usadba89888800004@gmail.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm" style={{ color: "var(--color-text-muted)" }}>
                  <MapPin size={14} style={{ color: "var(--color-gold)", flexShrink: 0, marginTop: 2 }} />
                  <span>Хостинский район, ул. Звёздная, 22, Сочи</span>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-3 text-sm" style={{ color: "var(--color-text-muted)" }}>
                  <Clock size={14} style={{ color: "var(--color-gold)", flexShrink: 0 }} />
                  Ежедневно 9:00 — 21:00
                </div>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4
              className="text-xs tracking-[0.2em] uppercase mb-6 font-semibold"
              style={{ color: "var(--color-gold)" }}
            >
              Забронировать
            </h4>
            <p className="text-sm mb-6" style={{ color: "var(--color-text-muted)" }}>
              Свяжитесь с нами для бронирования и получения специальных предложений.
            </p>
            <Link
              href="/contacts"
              className="inline-block px-6 py-3 rounded btn-gold text-sm text-center w-full"
            >
              Оставить заявку
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t"
        style={{ borderColor: "var(--color-border)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "var(--color-text-dim)" }}>
            © {new Date().getFullYear()} Усадьба VIP. Все права защищены.
          </p>
          <p className="text-xs" style={{ color: "var(--color-text-dim)" }}>
            Сочи, Хостинский район
          </p>
        </div>
      </div>
    </footer>
  );
}
