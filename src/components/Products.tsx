"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import ProductCard3D from "@/components/ProductCard3D";
import { marqueeProducts, products, siteConfig } from "@/lib/data";

function MarqueeItem({
  name,
  image,
  slug,
}: {
  name: string;
  image: string;
  slug: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.12, rotateY: 12, z: 50 }}
      transition={{ type: "spring", stiffness: 400, damping: 18 }}
      className="perspective-1000 group mx-4 flex w-52 shrink-0 flex-col items-center"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="relative h-52 w-52 overflow-hidden rounded-3xl border-2 border-white bg-white shadow-lg shadow-rose-100/60 transition-shadow duration-300 group-hover:shadow-2xl group-hover:shadow-rose-200/80">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain p-5 transition-transform duration-500 group-hover:scale-110"
          sizes="208px"
        />
        <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/5" />
      </div>
      <p className="mt-4 text-center text-sm font-bold text-secondary">{name}</p>
      <a
        href={`#${slug}`}
        className="mt-1 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100"
      >
        View details ↓
      </a>
    </motion.div>
  );
}

export default function Products() {
  const marqueeItems = [...marqueeProducts, ...marqueeProducts, ...marqueeProducts];

  return (
    <section id="products" className="overflow-hidden py-24">
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
        </AnimateOnScroll>
      </div>

      {/* Marquee strip */}
      <div className="relative mt-14">
        <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" />

        <div className="animate-marquee flex w-max py-4">
          {marqueeItems.map((product, i) => {
            const item = products.find((p) => p.slug === product.slug)!;
            return (
              <MarqueeItem
                key={`${product.slug}-${i}`}
                name={product.name}
                image={item.thumb}
                slug={product.slug}
              />
            );
          })}
        </div>
      </div>

      {/* Product grid with 3D cards */}
      <div className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="mb-12 text-center">
          <h3 className="text-xl font-bold text-secondary">Explore Our Full Range</h3>
          <p className="mt-2 text-sm text-muted">Hover any product for a 3D preview</p>
        </AnimateOnScroll>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <AnimateOnScroll key={product.slug} delay={index * 0.06}>
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
                    <a
                      href={siteConfig.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
                    >
                      Get a Quote
                      <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </ProductCard3D>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
