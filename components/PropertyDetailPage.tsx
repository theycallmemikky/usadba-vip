"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  X,
  ChevronLeft,
  ChevronRight,
  Users,
  Maximize,
  BedDouble,
  Phone,
  MessageCircle,
} from "lucide-react";
import type { Property } from "./PropertyCard";
import AnimatedSection from "./AnimatedSection";

interface Props {
  property: Property;
  backHref: string;
  backLabel: string;
}

export default function PropertyDetailPage({ property, backHref, backLabel }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight")
        setLightboxIndex((i) => (i === null ? null : (i + 1) % property.images.length));
      if (e.key === "ArrowLeft")
        setLightboxIndex((i) =>
          i === null ? null : (i - 1 + property.images.length) % property.images.length
        );
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, property.images.length]);

  const typeBadge =
    property.type === "cottage" ? "Коттедж" : property.type === "flat" ? "Квартира" : "Апартаменты";

  return (
    <>
      {/* Hero */}
      <section className="relative flex items-end overflow-hidden" style={{ height: "65vh", minHeight: 400 }}>
        <Image
          src={property.image}
          alt={property.title}
          fill
          priority
          className="object-cover"
          unoptimized
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(7,9,11,1) 0%, rgba(7,9,11,0.3) 100%)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <span
            className="inline-block text-xs tracking-widest uppercase px-3 py-1 rounded mb-4"
            style={{
              background: "rgba(95,125,140,0.15)",
              border: "1px solid rgba(95,125,140,0.3)",
              color: "var(--color-gold-light)",
              backdropFilter: "blur(8px)",
            }}
          >
            {typeBadge}
          </span>
          <h1
            className="font-display text-4xl md:text-6xl font-light"
            style={{ fontFamily: "var(--font-display)", color: "#f0ede6" }}
          >
            {property.title}
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 text-sm hover:opacity-80 transition-opacity"
            style={{ color: "var(--color-text-muted)" }}
          >
            <ArrowLeft size={16} style={{ color: "var(--color-gold)" }} />
            Назад: {backLabel}
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Description and features */}
          <div className="lg:col-span-2 space-y-10">
            <AnimatedSection>
              <h2
                className="font-display text-2xl font-medium mb-4"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
              >
                Описание
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--color-text-muted)" }}
              >
                {property.longDescription}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <h3
                className="font-display text-xl font-medium mb-4"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
              >
                Удобства
              </h3>
              <div className="flex flex-wrap gap-3">
                {property.features.map((f) => (
                  <span
                    key={f}
                    className="text-sm px-4 py-2 rounded-full"
                    style={{
                      background: "var(--color-card)",
                      border: "1px solid var(--color-border)",
                      color: "var(--color-text-muted)",
                    }}
                  >
                    {f}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <AnimatedSection delay={150}>
              {/* Specs */}
              <div
                className="p-6 rounded-2xl mb-6"
                style={{ background: "var(--color-card)", border: "1px solid var(--color-border)" }}
              >
                <h3
                  className="font-display text-lg font-medium mb-5"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
                >
                  Параметры
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm" style={{ color: "var(--color-text-muted)" }}>
                      <Maximize size={16} style={{ color: "var(--color-gold)" }} />
                      Площадь
                    </div>
                    <span className="text-sm font-medium" style={{ color: "var(--color-text)" }}>
                      {property.area} м²
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm" style={{ color: "var(--color-text-muted)" }}>
                      <Users size={16} style={{ color: "var(--color-gold)" }} />
                      Гостей
                    </div>
                    <span className="text-sm font-medium" style={{ color: "var(--color-text)" }}>
                      до {property.guests}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm" style={{ color: "var(--color-text-muted)" }}>
                      <BedDouble size={16} style={{ color: "var(--color-gold)" }} />
                      Спальни
                    </div>
                    <span className="text-sm font-medium" style={{ color: "var(--color-text)" }}>
                      {property.bedrooms}
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div
                className="p-6 rounded-2xl"
                style={{ background: "var(--color-gold-dim)", border: "1px solid var(--color-border-gold)" }}
              >
                <h3
                  className="font-display text-lg font-medium mb-1"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-gold-light)" }}
                >
                  Забронировать
                </h3>
                <p className="text-xs mb-5" style={{ color: "var(--color-text-muted)" }}>
                  Узнайте стоимость и наличие свободных дат
                </p>
                <a
                  href="tel:+79888800004"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded mb-3 btn-gold text-sm"
                >
                  <Phone size={15} />
                  +7 988 880-00-04
                </a>
                <a
                  href="https://max.ru/u/f9LHodD0cOIR__cZdie05pnHwEMWYzpGyp27pcPXnNoAdYHuko1Xvici1Ec"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded text-sm btn-outline-gold"
                >
                  <MessageCircle size={15} />
                  MAX
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      {property.images.length > 1 && (
        <section className="section-padding" style={{ background: "var(--color-navy-2)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <h2
                className="font-display text-3xl font-light text-center mb-12"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
              >
                Фотогалерея
              </h2>
            </AnimatedSection>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {property.images.map((src, i) => (
                <AnimatedSection key={i} delay={i * 40}>
                  <button
                    className="relative block w-full overflow-hidden rounded-xl group cursor-pointer"
                    style={{ height: 200 }}
                    onClick={() => setLightboxIndex(i)}
                    aria-label={`Открыть фото ${i + 1}`}
                  >
                    <Image
                      src={src}
                      alt={`${property.title} — фото ${i + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      unoptimized
                    />
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: "rgba(95,125,140,0.12)" }}
                    />
                  </button>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.95)" }}
          onClick={() => setLightboxIndex(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 rounded-full z-10"
            style={{ background: "rgba(255,255,255,0.1)", color: "white" }}
            onClick={() => setLightboxIndex(null)}
            aria-label="Закрыть"
          >
            <X size={24} />
          </button>
          {property.images.length > 1 && (
            <>
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full z-10"
                style={{ background: "rgba(255,255,255,0.1)", color: "white" }}
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex(
                    (lightboxIndex - 1 + property.images.length) % property.images.length
                  );
                }}
                aria-label="Предыдущее фото"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full z-10"
                style={{ background: "rgba(255,255,255,0.1)", color: "white" }}
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((lightboxIndex + 1) % property.images.length);
                }}
                aria-label="Следующее фото"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
          <div
            className="relative max-w-5xl w-full mx-16 max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={property.images[lightboxIndex]}
              alt={`${property.title} — фото ${lightboxIndex + 1}`}
              width={1200}
              height={800}
              className="w-full h-auto max-h-[85vh] object-contain"
              unoptimized
            />
          </div>
          <div
            className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            {lightboxIndex + 1} / {property.images.length}
          </div>
        </div>
      )}
    </>
  );
}
