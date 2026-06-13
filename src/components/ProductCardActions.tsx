"use client";

import AddToInquiryButton from "@/components/AddToInquiryButton";
import type { Product } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export default function ProductCardActions({ product }: { product: Product }) {
  return (
    <div className="mt-5 flex flex-wrap items-center gap-3">
      <AddToInquiryButton
        productSlug={product.slug}
        name={product.name}
        image={product.thumb}
        size={product.sizes}
      />
      <a
        href={siteConfig.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-sm font-semibold text-muted transition-colors hover:text-primary"
      >
        WhatsApp
      </a>
    </div>
  );
}
