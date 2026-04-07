import Link from "next/link";
import Image from "next/image";
import { Users, Maximize, BedDouble, ArrowRight } from "lucide-react";

export interface Property {
  id: string;
  slug: string;
  title: string;
  type: "cottage" | "apartment" | "flat";
  image: string;
  images: string[];
  area: number;
  guests: number;
  bedrooms: number;
  description: string;
  longDescription: string;
  features: string[];
  price?: number;
  price14days?: number;
  priceMonth?: number;
  price11months?: number;
  href: string;
}

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <div
      className="group rounded-2xl overflow-hidden card-glass card-glass-hover flex flex-col"
      style={{ border: "1px solid var(--color-border)" }}
    >
      {/* Image */}
      <Link href={property.href} className="relative overflow-hidden block cursor-pointer" style={{ height: 240 }}>
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          unoptimized
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(7,9,11,0.85) 0%, transparent 60%)",
          }}
        />
        <span
          className="absolute top-4 left-4 text-xs tracking-widest uppercase px-3 py-1 rounded"
          style={{
            background: "rgba(7,9,11,0.65)",
            border: "1px solid rgba(255,255,255,0.25)",
            color: "#ffffff",
            backdropFilter: "blur(8px)",
          }}
        >
          {property.type === "cottage" ? "Коттедж" : property.type === "flat" ? "Квартира" : "Апартаменты"}
        </span>
      </Link>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3
          className="font-display text-2xl font-medium mb-3"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
        >
          {property.title}
        </h3>
        <p className="text-sm mb-5 leading-relaxed flex-1" style={{ color: "var(--color-text-muted)" }}>
          {property.description}
        </p>

        {/* Stats */}
        <div
          className="flex items-center gap-5 py-4 mb-5 border-y"
          style={{ borderColor: "var(--color-border)" }}
        >
          <div className="flex items-center gap-2 text-sm" style={{ color: "var(--color-text-muted)" }}>
            <Maximize size={14} style={{ color: "var(--color-gold)" }} />
            {property.area} м²
          </div>
          <div className="flex items-center gap-2 text-sm" style={{ color: "var(--color-text-muted)" }}>
            <Users size={14} style={{ color: "var(--color-gold)" }} />
            до {property.guests} гостей
          </div>
          <div className="flex items-center gap-2 text-sm" style={{ color: "var(--color-text-muted)" }}>
            <BedDouble size={14} style={{ color: "var(--color-gold)" }} />
            {property.bedrooms} {property.bedrooms === 1 ? "спальня" : property.bedrooms >= 2 && property.bedrooms <= 4 ? "спальни" : "спален"}
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-6">
          {property.features.slice(0, 4).map((f) => (
            <span
              key={f}
              className="text-xs px-3 py-1 rounded-full"
              style={{
                background: "var(--color-border)",
                color: "var(--color-text-muted)",
              }}
            >
              {f}
            </span>
          ))}
        </div>

        <Link
          href={property.href}
          className="flex items-center justify-center gap-2 w-full py-3 rounded btn-outline-gold text-sm"
        >
          Подробнее
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
