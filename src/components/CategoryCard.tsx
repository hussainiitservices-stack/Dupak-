import Image from "next/image";
import Link from "next/link";
import type { ProductCategory } from "@/lib/data";

export default function CategoryCard({ category }: { category: ProductCategory }) {
  return (
    <Link
      href={`/products/${category.slug}`}
      className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-rose-100/60"
    >
      <div className="relative h-48 bg-stone-50">
        <Image
          src={category.image}
          alt={category.name}
          fill
          loading="lazy"
          className="object-contain p-8 transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-secondary transition-colors group-hover:text-primary">
          {category.name}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
          {category.description}
        </p>
        <p className="mt-4 text-sm font-semibold text-primary">
          {category.subcategories.length} products →
        </p>
      </div>
    </Link>
  );
}
