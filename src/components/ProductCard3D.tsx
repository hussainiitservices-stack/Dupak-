"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

type ProductCard3DProps = {
  image: string;
  alt: string;
  imageHeight?: string;
  children: ReactNode;
};

export default function ProductCard3D({
  image,
  alt,
  imageHeight = "h-56",
  children,
}: ProductCard3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [14, -14]), {
    stiffness: 300,
    damping: 28,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-14, 14]), {
    stiffness: 300,
    damping: 28,
  });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.article
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      whileHover={{ scale: 1.05, z: 80 }}
      transition={{ type: "spring", stiffness: 350, damping: 22 }}
      className="group perspective-1000 overflow-hidden rounded-2xl border border-border bg-card shadow-md hover:shadow-2xl hover:shadow-rose-200/50"
    >
      <motion.div
        style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}
        className={`relative ${imageHeight} overflow-hidden bg-stone-50`}
      >
        <Image
          src={image}
          alt={alt}
          fill
          className="object-contain p-6 drop-shadow-2xl transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </motion.div>
      <div style={{ transform: "translateZ(30px)" }} className="bg-card">
        {children}
      </div>
    </motion.article>
  );
}
