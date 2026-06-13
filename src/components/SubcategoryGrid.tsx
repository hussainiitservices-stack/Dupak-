import AnimateOnScroll from "@/components/AnimateOnScroll";
import SubcategoryCard from "@/components/SubcategoryCard";
import type { ProductCategory } from "@/lib/data";

export default function SubcategoryGrid({ category }: { category: ProductCategory }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {category.subcategories.map((subcategory, index) => (
        <AnimateOnScroll key={subcategory.slug} delay={index * 0.05}>
          <SubcategoryCard category={category} subcategory={subcategory} />
        </AnimateOnScroll>
      ))}
    </div>
  );
}
