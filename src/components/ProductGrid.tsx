import AnimateOnScroll from "@/components/AnimateOnScroll";
import ProductCard3D from "@/components/ProductCard3D";
import ProductCardActions from "@/components/ProductCardActions";
import type { Product } from "@/lib/data";

export default function ProductGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <p className="rounded-2xl border border-dashed border-border px-6 py-12 text-center text-muted">
        No products found in this category yet.
      </p>
    );
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((product, index) => (
        <AnimateOnScroll key={product.slug} delay={index * 0.05}>
          <div id={product.slug}>
            <ProductCard3D image={product.image} alt={product.name}>
              <div className="p-6">
                <h3 className="text-lg font-bold text-secondary">{product.name}</h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-primary">
                  {product.sizes}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {product.description}
                </p>
                <ProductCardActions product={product} />
              </div>
            </ProductCard3D>
          </div>
        </AnimateOnScroll>
      ))}
    </div>
  );
}
