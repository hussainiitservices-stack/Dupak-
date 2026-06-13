import Image from "next/image";
import Link from "next/link";
import { productCategories } from "@/lib/data";

export default function ProductsMegaMenu() {
  return (
    <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
      {productCategories.map((category) => (
        <div key={category.slug} className="rounded-2xl border border-border/60 bg-stone-50/50 p-4">
          <Link
            href={`/products/${category.slug}`}
            className="group flex items-start gap-3"
          >
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-border bg-white">
              <Image
                src={category.image}
                alt=""
                fill
                loading="lazy"
                className="object-contain p-2"
                sizes="56px"
              />
            </div>
            <div>
              <p className="text-sm font-bold text-secondary transition-colors group-hover:text-primary">
                {category.name}
              </p>
              <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted">
                {category.description}
              </p>
            </div>
          </Link>

          <ul className="mt-3 space-y-0.5 border-t border-border/60 pt-3">
            {category.subcategories.map((subcategory) => (
              <li key={subcategory.slug}>
                <Link
                  href={`/products/${category.slug}/${subcategory.slug}`}
                  className="flex items-center gap-2.5 rounded-lg px-2 py-1.5 text-sm text-muted transition-colors hover:bg-white hover:text-primary"
                >
                  <span className="relative h-8 w-8 shrink-0 overflow-hidden rounded-md border border-border/60 bg-white">
                    <Image
                      src={subcategory.image}
                      alt=""
                      fill
                      loading="lazy"
                      className="object-contain p-1"
                      sizes="32px"
                    />
                  </span>
                  {subcategory.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="flex flex-col justify-center rounded-2xl bg-rose-50 p-5 lg:col-span-2 xl:col-span-3">
        <p className="text-sm font-bold text-secondary">View all products</p>
        <p className="mt-1 text-sm text-muted">
          Browse the full catalog, add items to your cart, and request a quote.
        </p>
        <Link
          href="/products"
          className="mt-4 inline-flex w-fit items-center gap-1 text-sm font-semibold text-primary"
        >
          Go to product catalog
          <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}
