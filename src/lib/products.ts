import { productCategories, products, type Product, type ProductCategory } from "@/lib/data";

export type { Product, ProductCategory };

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return productCategories.find((c) => c.slug === slug);
}

export function getSubcategory(
  categorySlug: string,
  subcategorySlug: string,
) {
  const category = getCategoryBySlug(categorySlug);
  return category?.subcategories.find((s) => s.slug === subcategorySlug);
}

export function getProductsForSubcategory(
  categorySlug: string,
  subcategorySlug: string,
): Product[] {
  const subcategory = getSubcategory(categorySlug, subcategorySlug);
  if (!subcategory) return [];

  return subcategory.productSlugs
    .map((slug) => getProductBySlug(slug))
    .filter((p): p is Product => Boolean(p));
}

export function getProductsForCategory(categorySlug: string): Product[] {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return [];

  const slugs = category.subcategories.flatMap((s) => s.productSlugs);
  return [...new Set(slugs)]
    .map((slug) => getProductBySlug(slug))
    .filter((p): p is Product => Boolean(p));
}

export function getAllCategoryParams() {
  return productCategories.map((c) => ({ category: c.slug }));
}

export function getAllSubcategoryParams() {
  return productCategories.flatMap((c) =>
    c.subcategories.map((s) => ({ category: c.slug, subcategory: s.slug })),
  );
}
