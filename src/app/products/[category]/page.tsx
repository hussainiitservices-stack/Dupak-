import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import CategorySidebar from "@/components/CategorySidebar";
import ProductBreadcrumb from "@/components/ProductBreadcrumb";
import SubcategoryGrid from "@/components/SubcategoryGrid";
import {
  getAllCategoryParams,
  getCategoryBySlug,
} from "@/lib/products";

type PageProps = {
  params: Promise<{ category: string }>;
};

export async function generateStaticParams() {
  return getAllCategoryParams();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) return { title: "Category | Dupak" };

  return {
    title: `${category.name} | Dupak Products`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) notFound();

  return (
    <div className="section-lazy py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <ProductBreadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: category.name },
            ]}
          />
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.05} className="mt-8">
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
            <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_1fr]">
              <div className="p-8 sm:p-10">
                <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                  Category
                </span>
                <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-secondary sm:text-4xl">
                  {category.name}
                </h1>
                <p className="mt-4 max-w-xl leading-relaxed text-muted">
                  {category.description}
                </p>
                <p className="mt-6 text-sm font-medium text-muted">
                  {category.subcategories.length} product lines — pick one to view sizes, finishes, and add to cart.
                </p>
              </div>
              <div className="relative min-h-[240px] bg-gradient-to-br from-stone-50 to-rose-50/50 lg:min-h-full">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-contain p-10"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        <div className="mt-12 grid gap-10 lg:grid-cols-[240px_1fr]">
          <AnimateOnScroll delay={0.1} direction="left">
            <CategorySidebar category={category} />
          </AnimateOnScroll>

          <div>
            <AnimateOnScroll delay={0.12}>
              <h2 className="text-xl font-bold text-secondary">Choose a product</h2>
              <p className="mt-2 text-sm text-muted">
                Select a product line below to explore specs and request a quote.
              </p>
            </AnimateOnScroll>

            <div className="mt-8">
              <SubcategoryGrid category={category} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
