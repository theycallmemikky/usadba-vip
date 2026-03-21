import { notFound } from "next/navigation";
import { cottages } from "@/lib/data";
import PropertyDetailPage from "@/components/PropertyDetailPage";

export async function generateStaticParams() {
  return cottages.map((c) => ({ slug: c.slug }));
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
