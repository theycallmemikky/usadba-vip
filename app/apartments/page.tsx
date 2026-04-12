import type { Metadata } from "next";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";
import PropertyCard from "@/components/PropertyCard";
import { apartments } from "@/lib/data";
import { Wifi, Sofa, Monitor, Shirt, UtensilsCrossed } from "lucide-react";

export const metadata: Metadata = {
  title: "Апартаменты в Сочи — аренда апартаментов в элитном комплексе",
  description:
    "Аренда комфортабельных апартаментов в коттеджном комплексе Усадьба VIP, Хостинский район Сочи. Апартаменты с видом на море, на охраняемой территории с бассейном и баней.",
  alternates: { canonical: "/apartments" },
};

const amenities = [
  { icon: Wifi, label: "Wi-Fi" },
  { icon: Sofa, label: "Удобная мебель" },
  { icon: Monitor, label: "Техника" },
  { icon: Shirt, label: "Текстиль" },
  { icon: UtensilsCrossed, label: "Посуда" },
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
          style={{ background: "linear-gradient(to top, rgba(7,9,11,1) 0%, rgba(7,9,11,0.5) 100%)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "var(--color-gold-light)" }}>
            Усадьба VIP
          </p>
          <h1
            className="font-display text-4xl md:text-6xl font-light"
            style={{ fontFamily: "var(--font-display)", color: "#f0ede6" }}
          >
            Апартаменты
          </h1>
        </div>
      </section>

      {/* Apartments in Cottages */}
      <section className="section-padding max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeader
            eyebrow="В коттеджном комплексе"
            title="Апартаменты"
            subtitle="Стильные апартаменты с современным ремонтом, панорамным видом на море и всеми преимуществами комплекса для комфортной жизни и отдыха"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {apartments.map((a, i) => (
            <AnimatedSection key={a.id} delay={i * 100}>
              <PropertyCard property={a} />
            </AnimatedSection>
          ))}
        </div>

        {/* Amenities */}
        <div className="gold-divider mb-20" />
        <AnimatedSection>
          <SectionHeader
            title="Продумано до мелочей"
            subtitle="Все виды апартаментов оборудованы всем необходимым для комфортного и приятного проживания"
          />
        </AnimatedSection>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
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
