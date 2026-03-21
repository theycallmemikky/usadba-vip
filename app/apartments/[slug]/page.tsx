import { notFound } from "next/navigation";
import { apartments } from "@/lib/data";
import PropertyDetailPage from "@/components/PropertyDetailPage";

export async function generateStaticParams() {
  return apartments.map((a) => ({ slug: a.slug }));
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
