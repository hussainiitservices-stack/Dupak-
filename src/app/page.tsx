import dynamic from "next/dynamic";
import { Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import SectionFallback from "@/components/SectionFallback";

const Products = dynamic(() => import("@/components/Products"));
const About = dynamic(() => import("@/components/About"));
const Process = dynamic(() => import("@/components/Process"));
const Contact = dynamic(() => import("@/components/Contact"));
const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton"));

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<SectionFallback height="h-[640px]" />}>
          <Products />
        </Suspense>
        <Suspense fallback={<SectionFallback height="h-[720px]" />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionFallback height="h-[480px]" />}>
          <Process />
        </Suspense>
        <Suspense fallback={<SectionFallback height="h-[560px]" />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
