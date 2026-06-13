import type { Metadata } from "next";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import CategoryCard from "@/components/CategoryCard";
import ProductBreadcrumb from "@/components/ProductBreadcrumb";
import { productCategories } from "@/lib/data";

export const metadata: Metadata = {
  title: "Products | Dupak",
  description:
    "Browse Dupak's full range of branded paper cups, PET cups, bowls, bags, bottles, boxes, and accessories.",
};

export default function ProductsPage() {
  return (
    <div className="section-lazy py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <ProductBreadcrumb items={[{ label: "Home", href: "/" }, { label: "Products" }]} />
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.05} className="mt-8 max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Product Catalog
          </span>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-secondary sm:text-4xl">
            Browse by Category
          </h1>
          <p className="mt-4 leading-relaxed text-muted">
            Five simple categories — paper cups, PET drinkware, bowls, bags &amp;
            boxes, and accessories. Add to cart and request a quote anytime.
          </p>
        </AnimateOnScroll>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((category, index) => (
            <AnimateOnScroll key={category.slug} delay={0.08 + index * 0.06}>
              <CategoryCard category={category} />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
}
