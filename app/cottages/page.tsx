import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";
import PropertyCard from "@/components/PropertyCard";
import { cottages } from "@/lib/data";
import { TreePine, Waves, Flame, Wifi, Car, UtensilsCrossed } from "lucide-react";

const amenities = [
  { icon: Waves, label: "Бассейн с подогревом" },
  { icon: Flame, label: "Сауна и хаммам" },
  { icon: TreePine, label: "Ландшафтный сад" },
  { icon: Wifi, label: "Высокоскоростной Wi-Fi" },
  { icon: Car, label: "Бесплатная парковка" },
  { icon: UtensilsCrossed, label: "Оборудованная кухня" },
];

export default function CottagesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative h-72 md:h-96 flex items-end overflow-hidden">
        <Image
          src="/Usadba/cottages/cottage%205/prezidentskii-kottedzh-5-photos-big.jpg"
          alt="Коттеджи Усадьба VIP"
          fill
          priority
          className="object-cover"
          unoptimized
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(10,10,18,1) 0%, rgba(10,10,18,0.5) 100%)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "var(--color-gold)" }}>
            Усадьба VIP
          </p>
          <h1
            className="font-display text-4xl md:text-6xl font-light"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
          >
            Коттеджи
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Наши коттеджи"
            title="Роскошь на природе"
            subtitle="Просторные коттеджи с панорамным видом на море, бассейном и всей инфраструктурой для комфортного отдыха"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {cottages.map((c, i) => (
            <AnimatedSection key={c.id} delay={i * 100}>
              <PropertyCard property={c} />
            </AnimatedSection>
          ))}
        </div>

        {/* Amenities */}
        <div className="gold-divider mb-20" />
        <AnimatedSection>
          <SectionHeader
            eyebrow="Инфраструктура"
            title="Всё включено"
            subtitle="Все коттеджи оснащены по высшему стандарту — ничего лишнего не нужно брать с собой"
          />
        </AnimatedSection>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {amenities.map((a, i) => (
            <AnimatedSection key={a.label} delay={i * 80}>
              <div className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl" style={{ background: "var(--color-card)", border: "1px solid var(--color-border)" }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "var(--color-gold-dim)" }}>
                  <a.icon size={20} style={{ color: "var(--color-gold)" }} />
                </div>
                <span className="text-sm leading-snug" style={{ color: "var(--color-text-muted)" }}>{a.label}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  );
}
