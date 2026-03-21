import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";
import PropertyCard from "@/components/PropertyCard";
import { apartments, flats } from "@/lib/data";
import { Tv, Wind, Coffee, ShowerHead, Lock, Shirt } from "lucide-react";

const amenities = [
  { icon: Tv, label: "Smart TV" },
  { icon: Wind, label: "Кондиционер" },
  { icon: Coffee, label: "Кофемашина" },
  { icon: ShowerHead, label: "Дождевой душ" },
  { icon: Lock, label: "Электронный замок" },
  { icon: Shirt, label: "Ежедневная уборка" },
];

export default function ApartmentsPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative h-72 md:h-96 flex items-end overflow-hidden">
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/Usadba/apartments/apartments%207/apartamenty-7-v-kottedzhe-7-photo-big.jpg`}
          alt="Апартаменты Усадьба VIP"
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
            Апартаменты и квартиры
          </h1>
        </div>
      </section>

      {/* Apartments in Cottages */}
      <section className="section-padding max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeader
            eyebrow="В коттеджном комплексе"
            title="Апартаменты"
            subtitle="Стильные апартаменты с дизайнерским ремонтом, видом на море и всеми удобствами комплекса"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {apartments.map((a, i) => (
            <AnimatedSection key={a.id} delay={i * 100}>
              <PropertyCard property={a} />
            </AnimatedSection>
          ))}
        </div>

        {/* Flats Section */}
        <div className="gold-divider mb-20" />
        <AnimatedSection>
          <SectionHeader
            eyebrow="В жилых комплексах"
            title="Квартиры"
            subtitle="Квартиры с видом на море в жилых комплексах и клубных домах района Хоста"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {flats.map((f, i) => (
            <AnimatedSection key={f.id} delay={i * 100}>
              <PropertyCard property={f} />
            </AnimatedSection>
          ))}
        </div>

        {/* Amenities */}
        <div className="gold-divider mb-20" />
        <AnimatedSection>
          <SectionHeader
            eyebrow="Оснащение"
            title="Продумано до мелочей"
            subtitle="Каждый апартамент оборудован всем необходимым для комфортного и приятного пребывания"
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
