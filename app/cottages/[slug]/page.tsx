import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cottages } from "@/lib/data";
import PropertyDetailPage from "@/components/PropertyDetailPage";

export async function generateStaticParams() {
  return cottages.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cottage = cottages.find((c) => c.slug === slug);
  if (!cottage) return {};
  const title = `${cottage.title} — аренда в Сочи`;
  const description =
    cottage.longDescription?.slice(0, 160) ||
    `${cottage.title}. Аренда в коттеджном комплексе Усадьба VIP в Сочи. ${cottage.area} м², до ${cottage.guests} гостей.`;
  return {
    title,
    description,
    alternates: { canonical: `/cottages/${cottage.slug}` },
    openGraph: {
      title,
      description,
      type: "website",
      images: [{ url: cottage.image, alt: cottage.title }],
    },
  };
}

export default async function CottageDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cottage = cottages.find((c) => c.slug === slug);
  if (!cottage) notFound();

  return (
    <PropertyDetailPage
      property={cottage}
      backHref="/cottages"
      backLabel="Коттеджи"
    />
  );
}
