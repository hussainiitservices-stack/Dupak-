"use client";

import { InquiryCartProvider } from "@/context/InquiryCartContext";
import LazyCartUi from "@/components/LazyCartUi";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <InquiryCartProvider>
      {children}
      <LazyCartUi />
    </InquiryCartProvider>
  );
}
