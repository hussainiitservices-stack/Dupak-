"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useInquiryCart } from "@/context/InquiryCartContext";

const InquiryCartDrawer = dynamic(() => import("@/components/InquiryCartDrawer"), {
  ssr: false,
});

const InquiryFormModal = dynamic(() => import("@/components/InquiryFormModal"), {
  ssr: false,
});

export default function LazyCartUi() {
  const { isCartOpen, isFormOpen, itemCount, hydrated } = useInquiryCart();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (hydrated && (isCartOpen || isFormOpen || itemCount > 0)) {
      setEnabled(true);
    }
  }, [hydrated, isCartOpen, isFormOpen, itemCount]);

  if (!enabled) return null;

  return (
    <>
      <InquiryCartDrawer />
      <InquiryFormModal />
    </>
  );
}
