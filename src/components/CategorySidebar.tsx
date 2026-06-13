import Image from "next/image";
import Link from "next/link";
import type { ProductCategory } from "@/lib/data";

type CategorySidebarProps = {
  category: ProductCategory;
  activeSubcategory?: string;
};

export default function CategorySidebar({
  category,
  activeSubcategory,
}: CategorySidebarProps) {
  return (
    <aside className="rounded-2xl border border-border bg-card p-5 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary">
        In this category
      </p>
      <ul className="mt-4 space-y-1">
        <li>
          <Link
            href={`/products/${category.slug}`}
            className={`block rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
              !activeSubcategory
                ? "bg-rose-50 text-primary"
                : "text-muted hover:bg-stone-50 hover:text-secondary"
            }`}
          >
            All products
          </Link>
        </li>
        {category.subcategories.map((subcategory) => (
          <li key={subcategory.slug}>
            <Link
              href={`/products/${category.slug}/${subcategory.slug}`}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                activeSubcategory === subcategory.slug
                  ? "bg-rose-50 text-primary"
                  : "text-muted hover:bg-stone-50 hover:text-secondary"
              }`}
            >
              <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-lg border border-border bg-white">
                <Image
                  src={subcategory.image}
                  alt=""
                  fill
                  className="object-contain p-1"
                  sizes="36px"
                />
              </span>
              {subcategory.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
