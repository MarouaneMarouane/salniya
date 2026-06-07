import ProductDetail from "@/components/ProductDetail";
import { PRODUCTS } from "@/lib/data";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ id: p.id }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) notFound();
  return <ProductDetail product={product} />;
}
