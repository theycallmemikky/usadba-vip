import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { apartments } from "@/lib/data";
import PropertyDetailPage from "@/components/PropertyDetailPage";

export async function generateStaticParams() {
  return apartments.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const apartment = apartments.find((a) => a.slug === slug);
  if (!apartment) return {};
  const title = `${apartment.title} — аренда в Сочи`;
  const description =
    apartment.longDescription?.slice(0, 160) ||
    `${apartment.title}. Аренда в коттеджном комплексе Усадьба VIP в Сочи. ${apartment.area} м², до ${apartment.guests} гостей.`;
  return {
    title,
    description,
    alternates: { canonical: `/apartments/${apartment.slug}` },
    openGraph: {
      title,
      description,
      type: "website",
      images: [{ url: apartment.image, alt: apartment.title }],
    },
  };
}

export default async function ApartmentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const apartment = apartments.find((a) => a.slug === slug);
  if (!apartment) notFound();

  return (
    <PropertyDetailPage
      property={apartment}
      backHref="/apartments"
      backLabel="Апартаменты"
    />
  );
}
