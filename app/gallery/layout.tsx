import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Фотогалерея — Усадьба VIP Сочи",
  description:
    "Фотогалерея коттеджного комплекса Усадьба VIP в Сочи. Фото коттеджей, апартаментов, квартир, территории, бассейна и окрестностей.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
