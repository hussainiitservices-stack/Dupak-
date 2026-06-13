"use client";

import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import CategoryCard from "@/components/CategoryCard";
import { marqueeProducts, productCategories, products } from "@/lib/data";

const productBySlug = new Map(products.map((product) => [product.slug, product]));

function MarqueeItem({
  name,
  image,
  slug,
}: {
  name: string;
  image: string;
  slug: string;
}) {
  const product = productBySlug.get(slug);

  return (
    <div className="group mx-4 flex w-52 shrink-0 flex-col items-center transition-transform duration-300 hover:scale-105">
      <Link
        href={
          product
            ? `/products/${product.categorySlug}/${product.subcategorySlug}`
            : "/products"
        }
        prefetch={false}
        className="flex flex-col items-center"
      >
        <div className="relative h-52 w-52 overflow-hidden rounded-3xl border-2 border-white bg-white shadow-lg shadow-rose-100/60 transition-shadow duration-300 group-hover:shadow-xl group-hover:shadow-rose-200/80">
          <Image
            src={image}
            alt={name}
            fill
            loading="lazy"
            className="object-contain p-5 transition-transform duration-500 group-hover:scale-110"
            sizes="208px"
          />
          <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/5" />
        </div>
        <p className="mt-4 text-center text-sm font-bold text-secondary">{name}</p>
        <span className="mt-1 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
          View details →
        </span>
      </Link>
    </div>
  );
}

export default function Products() {
  const marqueeItems = [...marqueeProducts, ...marqueeProducts];

  return (
    <section id="products" className="section-lazy overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Our Products
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-secondary sm:text-4xl">
            Branded Packaging Solutions
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Paper cups, PET cups, U-shape cups, ice cream bowls &amp; more — all
            custom-branded with your logo.
          </p>
          <Link
            href="/products"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-rose-200 transition-transform hover:scale-105 hover:bg-primary-dark"
          >
            Browse All Categories
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </AnimateOnScroll>
      </div>

      <div className="relative mt-14">
        <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" />

        <div className="animate-marquee flex w-max py-4">
          {marqueeItems.map((product, i) => (
            <MarqueeItem
              key={`${product.slug}-${i}`}
              name={product.name}
              image={product.image}
              slug={product.slug}
            />
          ))}
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="mb-12 text-center">
          <h3 className="text-xl font-bold text-secondary">Browse by Category</h3>
          <p className="mt-2 text-sm text-muted">
            Pick a category, add products to your cart, and request a quote
          </p>
        </AnimateOnScroll>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((category, index) => (
            <AnimateOnScroll key={category.slug} delay={index * 0.05}>
              <CategoryCard category={category} />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
