import dynamic from "next/dynamic";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import CategorySidebar from "@/components/CategorySidebar";
import ProductBreadcrumb from "@/components/ProductBreadcrumb";
import ProductGrid from "@/components/ProductGrid";
import {
  getAllSubcategoryParams,
  getCategoryBySlug,
  getProductsForSubcategory,
  getSubcategory,
} from "@/lib/products";
import { getProductLineSpec } from "@/lib/product-lines";

const ProductLinePage = dynamic(() => import("@/components/ProductLinePage"));

type PageProps = {
  params: Promise<{ category: string; subcategory: string }>;
};

export async function generateStaticParams() {
  return getAllSubcategoryParams();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: categorySlug, subcategory: subcategorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  const subcategory = getSubcategory(categorySlug, subcategorySlug);

  if (!category || !subcategory) return { title: "Products | Dupak" };

  return {
    title: `${subcategory.name} | ${category.name} | Dupak`,
    description: subcategory.description,
  };
}

export default async function SubcategoryPage({ params }: PageProps) {
  const { category: categorySlug, subcategory: subcategorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  const subcategory = getSubcategory(categorySlug, subcategorySlug);

  if (!category || !subcategory) notFound();

  const products = getProductsForSubcategory(categorySlug, subcategorySlug);
  const lineSpec = subcategory.lineSpecSlug
    ? getProductLineSpec(subcategory.lineSpecSlug)
    : undefined;

  return (
    <div className="section-lazy py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <ProductBreadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: category.name, href: `/products/${category.slug}` },
              { label: subcategory.name },
            ]}
          />
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.05} className="mt-8">
          <div className="grid items-center gap-8 overflow-hidden rounded-3xl border border-border bg-card shadow-sm lg:grid-cols-[1.2fr_1fr]">
            <div className="p-8 sm:p-10">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                {category.name}
              </span>
              <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-secondary sm:text-4xl">
                {subcategory.name}
              </h1>
              <p className="mt-4 max-w-xl leading-relaxed text-muted">
                {subcategory.description}
              </p>
            </div>
            <div className="relative min-h-[220px] bg-gradient-to-br from-stone-50 to-rose-50/50 lg:min-h-[280px]">
              <Image
                src={subcategory.image}
                alt={subcategory.name}
                fill
                className="object-contain p-8"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
            </div>
          </div>
        </AnimateOnScroll>

        <div className="mt-12 grid gap-10 lg:grid-cols-[240px_1fr]">
          <AnimateOnScroll delay={0.1} direction="left">
            <CategorySidebar
              category={category}
              activeSubcategory={subcategory.slug}
            />
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.15}>
            {lineSpec ? (
              <ProductLinePage spec={lineSpec} />
            ) : (
              <ProductGrid products={products} />
            )}
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  );
}
