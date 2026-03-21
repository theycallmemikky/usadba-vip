import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";
import { newsItems } from "@/lib/data";
import { Calendar, Tag } from "lucide-react";

export default function NewsPage() {
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
          Новости
        </h1>
        <div className="gold-divider mt-8 max-w-24 mx-auto" />
      </section>

      <section className="section-padding max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Последние новости"
            title="Всегда в курсе событий"
            subtitle="Следите за обновлениями, акциями и новостями нашего комплекса"
          />
        </AnimatedSection>

        {/* Featured post */}
        <AnimatedSection delay={100}>
          <div
            className="relative rounded-2xl overflow-hidden mb-12"
            style={{ border: "1px solid var(--color-border)" }}
          >
            <div className="grid md:grid-cols-2">
              <div className="relative h-72 md:h-auto min-h-64">
                <Image
                  src={newsItems[0].image}
                  alt={newsItems[0].title}
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0" style={{ background: "rgba(7,9,11,0.3)" }} />
              </div>
              <div className="p-10 flex flex-col justify-center" style={{ background: "var(--color-card)" }}>
                <div className="flex items-center gap-4 mb-6">
                  <span
                    className="text-xs px-3 py-1 rounded-full tracking-wider"
                    style={{ background: "var(--color-gold-dim)", color: "var(--color-gold-light)" }}
                  >
                    {newsItems[0].category}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs" style={{ color: "var(--color-text-dim)" }}>
                    <Calendar size={12} />
                    {newsItems[0].date}
                  </span>
                </div>
                <h2
                  className="font-display text-3xl font-light mb-4"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
                >
                  {newsItems[0].title}
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                  {newsItems[0].excerpt}
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Other posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsItems.slice(1).map((n, i) => (
            <AnimatedSection key={n.id} delay={i * 100}>
              <div
                className="rounded-2xl overflow-hidden card-glass-hover"
                style={{ background: "var(--color-card)", border: "1px solid var(--color-border)" }}
              >
                <div className="relative h-56">
                  <Image src={n.image} alt={n.title} fill className="object-cover" unoptimized />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(7,9,11,0.8), transparent)" }} />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="flex items-center gap-1.5 text-xs" style={{ color: "var(--color-gold)" }}>
                      <Tag size={11} />
                      {n.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs" style={{ color: "var(--color-text-dim)" }}>
                      <Calendar size={11} />
                      {n.date}
                    </span>
                  </div>
                  <h3
                    className="font-display text-2xl font-light mb-3"
                    style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
                  >
                    {n.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                    {n.excerpt}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  );
}
