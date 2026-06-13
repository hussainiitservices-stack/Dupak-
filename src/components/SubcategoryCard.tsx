import Image from "next/image";
import Link from "next/link";
import type { ProductCategory, ProductSubcategory } from "@/lib/data";

type SubcategoryCardProps = {
  category: ProductCategory;
  subcategory: ProductSubcategory;
};

export default function SubcategoryCard({ category, subcategory }: SubcategoryCardProps) {
  return (
    <Link
      href={`/products/${category.slug}/${subcategory.slug}`}
      className="group block h-full overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-xl hover:shadow-rose-100/60"
    >
      <div className="relative h-52 overflow-hidden bg-gradient-to-br from-stone-50 to-rose-50/40">
        <Image
          src={subcategory.image}
          alt={subcategory.name}
          fill
          loading="lazy"
          className="object-contain p-6 transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/5" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-secondary transition-colors group-hover:text-primary">
          {subcategory.name}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
          {subcategory.description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-transform duration-300 group-hover:translate-x-1">
          View product →
        </span>
      </div>
    </Link>
  );
}
