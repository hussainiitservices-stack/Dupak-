"use client";

import { useState } from "react";
import { useInquiryCart } from "@/context/InquiryCartContext";

type AddToInquiryButtonProps = {
  productSlug: string;
  name: string;
  image: string;
  size?: string;
  gsm?: string;
  finish?: string;
  notes?: string;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function AddToInquiryButton({
  productSlug,
  name,
  image,
  size,
  gsm,
  finish,
  notes,
  variant = "primary",
  className = "",
}: AddToInquiryButtonProps) {
  const { addItem } = useInquiryCart();
  const [added, setAdded] = useState(false);

  const styles =
    variant === "primary"
      ? added
        ? "bg-secondary text-white"
        : "bg-primary text-white shadow-md shadow-rose-200 hover:bg-primary-dark"
      : "border border-border bg-white text-secondary hover:border-primary hover:text-primary";

  const handleAdd = () => {
    addItem({
      productSlug,
      name,
      image,
      size,
      gsm,
      finish,
      notes,
      quantity: 1,
    });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);
  };

  return (
    <button
      type="button"
      onClick={handleAdd}
      className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${styles} ${className}`}
    >
      {added ? (
        <>
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Added to Cart
        </>
      ) : (
        <>
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          Add to Cart
        </>
      )}
    </button>
  );
}
