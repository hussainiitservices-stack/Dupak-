import Image from "next/image";
import type { ReactNode } from "react";

type ProductCard3DProps = {
  image: string;
  alt: string;
  imageHeight?: string;
  children: ReactNode;
  priority?: boolean;
};

export default function ProductCard3D({
  image,
  alt,
  imageHeight = "h-56",
  children,
  priority = false,
}: ProductCard3DProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-card shadow-md transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-200/40">
      <div className={`relative ${imageHeight} overflow-hidden bg-stone-50`}>
        <Image
          src={image}
          alt={alt}
          fill
          priority={priority}
          loading={priority ? undefined : "lazy"}
          className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="bg-card">{children}</div>
    </article>
  );
}
