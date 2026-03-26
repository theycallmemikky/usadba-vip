import { notFound } from "next/navigation";
import { flats } from "@/lib/data";
import PropertyDetailPage from "@/components/PropertyDetailPage";

export async function generateStaticParams() {
  return flats.map((f) => ({ slug: f.slug }));
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
