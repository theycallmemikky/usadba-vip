"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { galleryImages } from "@/lib/data";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";

const categories = ["Все", "Коттеджи", "Апартаменты", "Территория", "Видео"];
const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
const videos = [
  { src: `${base}/Usadba/videos/vid1.mp4`, title: "Усадьба VIP — обзор комплекса" },
  { src: `${base}/Usadba/videos/vid2.mp4`, title: "Коттеджи и апартаменты" },
  { src: `${base}/Usadba/videos/vid3.mp4`, title: "Территория и инфраструктура" },
];

export default function GalleryPage() {
  const [active, setActive] = useState("Все");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = (active === "Все" || active === "Видео") ? galleryImages : galleryImages.filter((g) => g.category === active);

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
          Галерея
        </h1>
        <div className="gold-divider mt-8 max-w-24 mx-auto" />
      </section>

      <section className="section-padding max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Фотографии"
            title="Вид изнутри"
            subtitle="Откройте для себя красоту нашего комплекса — коттеджи, апартаменты и живописная территория"
          />
        </AnimatedSection>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="px-6 py-2 rounded-full text-sm tracking-wider transition-all duration-200"
              style={
                active === cat
                  ? { background: "var(--color-gold)", color: "var(--color-navy)", fontWeight: 600 }
                  : { border: "1px solid var(--color-border)", color: "var(--color-text-muted)", background: "transparent" }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        {active === "Видео" ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videos.map((v, i) => (
              <AnimatedSection key={v.src} delay={i * 120}>
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{ border: "1px solid var(--color-border-gold)", background: "var(--color-card)" }}
                >
                  <video
                    src={v.src}
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full"
                    style={{ display: "block", aspectRatio: "16/9", objectFit: "cover" }}
                  />
                  <p className="text-sm text-center py-3 px-4" style={{ color: "var(--color-text-muted)" }}>
                    {v.title}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        ) : (
        /* Photo Grid */
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((img, i) => (
            <AnimatedSection key={img.src} delay={i * 60}>
              <button
                className="relative w-full group overflow-hidden rounded-xl"
                style={{ aspectRatio: "4/3" }}
                onClick={() => setLightbox(img.src)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  unoptimized
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                  style={{ background: "linear-gradient(to top, rgba(10,10,18,0.8), transparent)" }}
                >
                  <span className="text-sm" style={{ color: "var(--color-gold-light)" }}>
                    {img.alt}
                  </span>
                </div>
              </button>
            </AnimatedSection>
          ))}
        </div>
        )}
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(10,10,18,0.95)" }}
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 p-2 rounded-full"
            style={{ background: "var(--color-card)", color: "var(--color-gold)" }}
            onClick={() => setLightbox(null)}
          >
            <X size={24} />
          </button>
          <div className="relative max-w-5xl w-full" style={{ maxHeight: "85vh", aspectRatio: "16/9" }}>
            <Image src={lightbox} alt="Фото" fill className="object-contain rounded-xl" unoptimized />
          </div>
        </div>
      )}
    </>
  );
}
