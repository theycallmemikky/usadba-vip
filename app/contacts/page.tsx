import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const contactDetails = [
  {
    icon: Phone,
    label: "Телефон",
    value: "+7 988 880-00-04",
    href: "tel:+79888800004",
  },
  {
    icon: Mail,
    label: "Электронная почта",
    value: "usadba89888800004@gmail.com",
    href: "mailto:usadba89888800004@gmail.com",
  },
  {
    icon: MapPin,
    label: "Адрес",
    value: "Хостинский район, ул. Звёздная, 22, Сочи",
    href: "https://maps.yandex.ru/?text=Сочи+Хостинский+ул.+Звёздная+22",
  },
  {
    icon: Clock,
    label: "Режим работы",
    value: "Ежедневно 9:00 — 21:00",
    href: null,
  },
];

export default function ContactsPage() {
  return (
    <>
      {/* Page header */}
      <section
        className="pt-32 pb-16 text-center"
        style={{ background: "var(--color-navy-2)", borderBottom: "1px solid var(--color-border-gold)" }}
      >
        <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "var(--color-gold)" }}>
          Усадьба VIP
        </p>
        <h1
          className="font-display text-5xl md:text-7xl font-light"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
        >
          Контакты
        </h1>
        <div className="gold-divider mt-8 max-w-24 mx-auto" />
      </section>

      <section className="section-padding max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Свяжитесь с нами"
            title="Мы всегда на связи"
            subtitle="Позвоните нам, напишите или заполните форму — мы ответим в кратчайшие сроки"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: contact info */}
          <AnimatedSection delay={100}>
            <div className="space-y-6">
              {contactDetails.map((c, i) => (
                <div
                  key={c.label}
                  className="flex items-start gap-5 p-6 rounded-2xl"
                  style={{ background: "var(--color-card)", border: "1px solid var(--color-border)" }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "var(--color-gold-dim)" }}
                  >
                    <c.icon size={20} style={{ color: "var(--color-gold)" }} />
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "var(--color-text-dim)" }}>
                      {c.label}
                    </p>
                    {c.href ? (
                      <a
                        href={c.href}
                        target={c.href.startsWith("http") ? "_blank" : undefined}
                        rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-base transition-colors hover:text-gold"
                        style={{ color: "var(--color-text)" }}
                      >
                        {c.value}
                      </a>
                    ) : (
                      <p className="text-base" style={{ color: "var(--color-text)" }}>{c.value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Messengers */}
              <div
                className="p-6 rounded-2xl"
                style={{ background: "var(--color-card)", border: "1px solid var(--color-border)" }}
              >
                <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "var(--color-text-dim)" }}>
                  Мессенджеры
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://max.ru/u/f9LHodD0cOIR__cZdie05pnHwEMWYzpGyp27pcPXnNoAdYHuko1Xvici1Ec"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 rounded-xl btn-outline-gold text-sm flex-1 justify-center"
                  >
                    <MessageCircle size={16} />
                    MAX
                  </a>
                  <a
                    href="https://t.me/+79888800004"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 rounded-xl btn-outline-gold text-sm flex-1 justify-center"
                  >
                    <MessageCircle size={16} />
                    Telegram
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: form */}
          <AnimatedSection delay={200}>
            <ContactForm />
          </AnimatedSection>
        </div>

        {/* Map */}
        <AnimatedSection delay={100} className="mt-16">
          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: "1px solid var(--color-border)", height: 400 }}
          >
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=39.7913%2C43.5569&z=15&pt=39.791335,43.556903&l=map"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              title="Карта Усадьба VIP"
              style={{ filter: "grayscale(30%) contrast(1.1)" }}
            />
          </div>
          <p className="text-sm text-center mt-4" style={{ color: "var(--color-text-dim)" }}>
            Хостинский район, ул. Звёздная, 22, Сочи
          </p>
        </AnimatedSection>
      </section>
    </>
  );
}
