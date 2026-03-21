import { Star, Quote } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";
import { reviews } from "@/lib/data";
import Link from "next/link";

export default function ReviewsPage() {
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
          Отзывы
        </h1>
        <div className="gold-divider mt-8 max-w-24 mx-auto" />
      </section>

      <section className="section-padding max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Мнения гостей"
            title="Что говорят наши гости"
            subtitle="Нам важно мнение каждого гостя. Вот что они говорят о своём отдыхе в Усадьбе VIP"
          />
        </AnimatedSection>

        {/* Rating summary */}
        <AnimatedSection delay={100}>
          <div
            className="flex flex-col md:flex-row items-center justify-center gap-12 p-10 rounded-2xl mb-16"
            style={{ background: "var(--color-card)", border: "1px solid var(--color-border-gold)" }}
          >
            <div className="text-center">
              <p className="font-display text-8xl font-light gold-gradient-text" style={{ fontFamily: "var(--font-display)" }}>
                5.0
              </p>
              <div className="flex gap-1 justify-center mt-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" style={{ color: "var(--color-gold)" }} />
                ))}
              </div>
              <p className="text-sm mt-2" style={{ color: "var(--color-text-muted)" }}>Средняя оценка</p>
            </div>
            <div
              className="w-px h-20 hidden md:block"
              style={{ background: "var(--color-border-gold)" }}
            />
            <div className="grid grid-cols-3 gap-8 text-center">
              {[
                { val: "100%", label: "Рекомендуют" },
                { val: "500+", label: "Гостей" },
                { val: "10+", label: "Лет работы" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-display text-3xl font-light gold-gradient-text" style={{ fontFamily: "var(--font-display)" }}>
                    {s.val}
                  </p>
                  <p className="text-sm mt-1" style={{ color: "var(--color-text-muted)" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <AnimatedSection key={r.id} delay={i * 80}>
              <div
                className="p-8 rounded-2xl h-full flex flex-col"
                style={{ background: "var(--color-card)", border: "1px solid var(--color-border)" }}
              >
                <Quote size={28} style={{ color: "var(--color-gold-dim)" }} className="mb-4" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} size={13} fill="currentColor" style={{ color: "var(--color-gold)" }} />
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: "var(--color-text-muted)" }}>
                  {r.text}
                </p>
                <div className="flex items-center justify-between pt-5 border-t" style={{ borderColor: "var(--color-border)" }}>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: "var(--color-text)" }}>{r.name}</p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--color-gold-muted)" }}>{r.property}</p>
                  </div>
                  <span className="text-xs" style={{ color: "var(--color-text-dim)" }}>{r.date}</span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection delay={200}>
          <div
            className="text-center mt-20 p-12 rounded-2xl"
            style={{ background: "var(--color-navy-2)", border: "1px solid var(--color-border-gold)" }}
          >
            <p className="font-display text-3xl font-light mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}>
              Хотите оставить отзыв?
            </p>
            <p className="text-sm mb-8" style={{ color: "var(--color-text-muted)" }}>
              Поделитесь впечатлениями о вашем отдыхе — напишите нам напрямую
            </p>
            <Link href="/contacts" className="inline-flex items-center gap-2 px-8 py-4 rounded btn-gold text-sm">
              Написать нам
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
