import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { flats } from "@/lib/data";
import PropertyDetailPage from "@/components/PropertyDetailPage";

export async function generateStaticParams() {
  return flats.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const flat = flats.find((f) => f.slug === slug);
  if (!flat) return {};
  const title = `${flat.title} — долгосрочная аренда в Сочи`;
  const description =
    flat.longDescription?.slice(0, 160) ||
    `${flat.title}. Долгосрочная аренда в Сочи. ${flat.area} м², до ${flat.guests} гостей.`;
  return {
    title,
    description,
    alternates: { canonical: `/flats/${flat.slug}` },
    openGraph: {
      title,
      description,
      type: "website",
      images: [{ url: flat.image, alt: flat.title }],
    },
  };
}

export default async function FlatDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const flat = flats.find((f) => f.slug === slug);
  if (!flat) notFound();

  return (
    <PropertyDetailPage
      property={flat}
      backHref="/flats"
      backLabel="Квартиры"
    />
  );
}
