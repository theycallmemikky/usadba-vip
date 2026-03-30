import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Waves, Flame, TreePine, Shield, Star, Phone, MapPin } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import PropertyCard from "@/components/PropertyCard";
import { cottages, apartments, reviews } from "@/lib/data";

const features = [
  {
    icon: Waves,
    title: "Бассейн с подогревом",
    desc: "Открытый бассейн с панорамным видом на море доступен круглый год",
  },
  {
    icon: Flame,
    title: "Русская баня",
    desc: "Русская баня на дровах для полноценного отдыха и восстановления",
  },
  {
    icon: TreePine,
    title: "Субтропическая природа",
    desc: "Территория утопает в зелени субтропиков, в 5 минутах от моря",
  },
  {
    icon: Shield,
    title: "Закрытая территория",
    desc: "Охраняемый комплекс с видеонаблюдением, парковкой для гостей",
  },
];

const stats = [
  { value: "12+", label: "Объектов размещения" },
  { value: "500+", label: "Счастливых гостей" },
  { value: "5★", label: "Средний рейтинг" },
  { value: "10+", label: "Лет на рынке" },
];

export default function HomePage() {
  const featuredProperties = [cottages[0], cottages[1], apartments[0]];
  const featuredReviews = reviews.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/Usadba/territory/territory_cottages/a963d010.jpg`}
          alt="Комплекс Усадьба VIP Сочи"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: "center 30%", filter: "contrast(1.08) saturate(1.18) brightness(0.92)" }}
          unoptimized
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(7,9,11,0.45) 0%, rgba(7,9,11,0.25) 50%, rgba(7,9,11,0.15) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 30% 50%, rgba(95,125,140,0.09) 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-3xl">
            <p
              className="hero-reveal hero-reveal-1 text-xs tracking-[0.4em] uppercase mb-8 font-semibold"
              style={{ color: "#ffffff", textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}
            >
              ✦ Элитный отдых в Сочи ✦
            </p>
            <h1
              className="hero-reveal hero-reveal-2 font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-none mb-8"
              style={{ fontFamily: "var(--font-display)", color: "#ffffff", textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}
            >
              Усадьба
              <br />
              <span className="italic" style={{ color: "var(--color-gold-light)", textShadow: "0 2px 20px rgba(0,0,0,0.6)" }}>VIP</span>
            </h1>
            <p
              className="hero-reveal hero-reveal-3 text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
              style={{ color: "rgba(255,255,255,0.9)", textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}
            >
              Коттеджи и апартаменты класса люкс с панорамным видом на
              Чёрное море в Хостинском районе Сочи.
            </p>
            <div className="hero-reveal hero-reveal-4 flex flex-wrap gap-4">
              <Link
                href="/cottages"
                className="inline-flex items-center gap-2 px-10 py-4 rounded btn-gold text-base"
              >
                Выбрать вариант проживания
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/contacts"
                className="inline-flex items-center gap-2 px-10 py-4 rounded btn-outline-light text-base"
              >
                Связаться с нами
              </Link>
            </div>
          </div>
        </div>
        <a
          href="#stats"
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer hover:opacity-100 transition-opacity"
          style={{ opacity: 0.7 }}
        >
          <span className="text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.8)", textShadow: "0 1px 6px rgba(0,0,0,0.4)" }}>
            Листать
          </span>
          <div
            className="w-px h-12 animate-bounce"
            style={{ background: "linear-gradient(to bottom, var(--color-gold), transparent)" }}
          />
        </a>
      </section>

      {/* STATS */}
      <section
        id="stats"
        style={{
          background: "var(--color-navy-2)",
          borderTop: "1px solid var(--color-border-gold)",
          borderBottom: "1px solid var(--color-border-gold)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 100} className="text-center">
                <p
                  className="font-display text-4xl md:text-5xl font-light mb-2 gold-gradient-text"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <AnimatedCounter value={s.value} />
                </p>
                <p className="text-sm tracking-wide" style={{ color: "var(--color-text-muted)" }}>
                  {s.label}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section-padding max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Наши преимущества"
            title="Всё для вашего комфорта"
            subtitle="Комплекс Усадьба VIP предлагает Вам идеальные условия для незабываемого отдыха на черноморском побережье"
          />
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
          {features.map((f, i) => (
            <AnimatedSection key={f.title} delay={i * 120}>
              <div className="flex items-start gap-5">
                <f.icon size={24} className="mt-1 shrink-0" style={{ color: "var(--color-gold)" }} />
                <div>
                  <h3
                    className="font-display text-lg font-medium mb-2"
                    style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
                  >
                    {f.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                    {f.desc}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* FEATURED PROPERTIES */}
      <section className="section-padding" style={{ background: "var(--color-navy-2)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeader
              eyebrow="Наши объекты"
              title="Лучшие предложения"
              subtitle="Выберите идеальный вариант проживания для вашего отдыха в Сочи"
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProperties.map((p, i) => (
              <AnimatedSection key={p.id} delay={i * 100}>
                <PropertyCard property={p} />
              </AnimatedSection>
            ))}
          </div>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/cottages" className="inline-flex items-center gap-2 px-8 py-3 rounded btn-outline-gold text-sm">
              Все коттеджи <ArrowRight size={14} />
            </Link>
            <Link href="/apartments" className="inline-flex items-center gap-2 px-8 py-3 rounded btn-outline-gold text-sm">
              Все апартаменты <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section-padding max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Отзывы гостей"
            title="Нам доверяют"
            subtitle="Сотни гостей уже оценили высокий уровень сервиса и красоту нашего комплекса"
          />
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredReviews.map((r, i) => (
            <AnimatedSection key={r.id} delay={i * 100}>
              <div
                className="p-8 rounded-2xl card-glass h-full review-card"
                style={{ border: "1px solid var(--color-border)" }}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} size={14} fill="currentColor" style={{ color: "var(--color-gold)" }} />
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-6 italic" style={{ color: "var(--color-text-muted)" }}>
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: "var(--color-border)" }}>
                  <div>
                    <p className="font-medium text-sm" style={{ color: "var(--color-text)" }}>{r.name}</p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--color-text-dim)" }}>{r.property}</p>
                  </div>
                  <span className="text-xs" style={{ color: "var(--color-text-dim)" }}>{r.date}</span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/reviews" className="inline-flex items-center gap-2 px-8 py-3 rounded btn-outline-gold text-sm">
            Все отзывы <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* VIDEO TOUR */}
      <section className="section-padding" style={{ background: "var(--color-navy-2)", borderTop: "1px solid var(--color-border-gold)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeader
              eyebrow="Видеотур"
              title="Почувствуйте атмосферу"
              subtitle="Посмотрите видео о нашем комплексе и убедитесь сами — Усадьба VIP создана для настоящего отдыха"
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["vid1.mp4", "vid2.mp4", "vid3.mp4"].map((file, i) => {
              const src = `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/Usadba/videos/${file}`;
              return (
                <AnimatedSection key={src} delay={i * 120}>
                  <div
                    className="rounded-2xl overflow-hidden"
                    style={{ border: "1px solid var(--color-border-gold)", background: "var(--color-card)" }}
                  >
                    <video
                      src={src}
                      controls
                      playsInline
                      preload="metadata"
                      className="w-full"
                      style={{ display: "block", aspectRatio: "16/9", objectFit: "cover" }}
                    />
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative overflow-hidden">
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/Usadba/territory/territory_cottages/97a7f7d9.jpg`}
          alt="Усадьба VIP Сочи"
          fill
          className="object-cover"
          style={{ objectPosition: "center 40%", filter: "contrast(1.05) saturate(1.12) brightness(0.9)" }}
          unoptimized
        />
        <div className="absolute inset-0" style={{ background: "rgba(7,9,11,0.84)" }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-28 text-center">
          <AnimatedSection>
            <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: "var(--color-gold-light)" }}>
              Забронируйте прямо сейчас
            </p>
            <h2
              className="font-display text-4xl md:text-6xl font-light mb-8"
              style={{ fontFamily: "var(--font-display)", color: "#f0ede6" }}
            >
              Ваш идеальный отдых
              <br />
              <span className="gold-gradient-text italic">начинается здесь</span>
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:+79888800004" className="inline-flex items-center gap-2 px-8 py-4 rounded btn-gold text-sm">
                <Phone size={16} />
                +7 988 880-00-04
              </a>
              <Link href="/contacts" className="inline-flex items-center gap-2 px-8 py-4 rounded btn-outline-light text-sm">
                <MapPin size={16} />
                Как добраться
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
