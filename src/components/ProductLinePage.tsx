"use client";

import Image from "next/image";
import { useState } from "react";
import AddToInquiryButton from "@/components/AddToInquiryButton";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import CupSizeChart from "@/components/CupSizeChart";
import type { ProductLineSpec } from "@/lib/product-lines";
import { siteConfig } from "@/lib/site";

export default function ProductLinePage({ spec }: { spec: ProductLineSpec }) {
  const [activeFinish, setActiveFinish] = useState(spec.finishes[0]?.slug ?? "normal");
  const [selectedGsm, setSelectedGsm] = useState(spec.gsmOptions[0] ?? "");

  const finish = spec.finishes.find((f) => f.slug === activeFinish) ?? spec.finishes[0];

  return (
    <div className="space-y-10">
      <AnimateOnScroll>
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="p-8 sm:p-10">
              <h2 className="text-2xl font-extrabold text-secondary sm:text-3xl">{spec.title}</h2>
              <p className="mt-4 leading-relaxed text-muted">{spec.description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <AddToInquiryButton
                  productSlug={spec.slug}
                  name={spec.name}
                  image={spec.heroImage}
                  gsm={selectedGsm}
                  finish={finish?.name}
                  notes={`Available sizes: ${spec.sizes.map((s) => s.label).join(", ")}`}
                />
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold text-secondary hover:border-primary hover:text-primary"
                >
                  WhatsApp Quote
                </a>
              </div>
            </div>
            <div className="relative min-h-[280px] bg-gradient-to-br from-stone-50 to-rose-50/50">
              <Image
                src={spec.heroImage}
                alt={spec.name}
                fill
                className="object-contain p-8"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll delay={0.05}>
        <h3 className="text-lg font-bold text-secondary">Available Sizes</h3>
        <p className="mt-1 text-sm text-muted">
          All dimensions in millimetres — height, top diameter, and bottom diameter.
        </p>
        <div className="mt-4">
          <CupSizeChart sizes={spec.sizes} title={spec.title} />
        </div>
        <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-white">
          <Image
            src={spec.chartImage}
            alt={`${spec.name} size chart`}
            width={1200}
            height={600}
            loading="lazy"
            className="h-auto w-full object-contain p-4"
          />
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll delay={0.08}>
        <h3 className="text-lg font-bold text-secondary">Paper GSM Options</h3>
        <p className="mt-1 text-sm text-muted">
          Select the board weight for your cups — we&apos;ll confirm the best GSM for your use case.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          {spec.gsmOptions.map((gsm) => (
            <button
              key={gsm}
              type="button"
              onClick={() => setSelectedGsm(gsm)}
              className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all ${
                selectedGsm === gsm
                  ? "border-primary bg-primary text-white shadow-md shadow-rose-200"
                  : "border-border bg-white text-secondary hover:border-primary/40"
              }`}
            >
              {gsm}
            </button>
          ))}
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll delay={0.1}>
        <h3 className="text-lg font-bold text-secondary">Finish Options</h3>
        <p className="mt-1 text-sm text-muted">
          Choose foiling, emboss, or normal print for your branded cups.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {spec.finishes.map((option) => (
            <button
              key={option.slug}
              type="button"
              onClick={() => setActiveFinish(option.slug)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                activeFinish === option.slug
                  ? "bg-secondary text-white shadow-md"
                  : "bg-stone-100 text-muted hover:bg-stone-200 hover:text-secondary"
              }`}
            >
              {option.name}
            </button>
          ))}
        </div>

        {finish && (
          <div className="mt-6 grid gap-6 overflow-hidden rounded-2xl border border-border bg-card sm:grid-cols-2">
            <div className="relative min-h-[260px] bg-stone-50">
              <Image
                src={finish.image}
                alt={`${spec.name} — ${finish.name} finish`}
                fill
                loading="lazy"
                className="object-contain p-6"
                sizes="(max-width: 640px) 100vw, 400px"
              />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                {finish.name} Finish
              </span>
              <p className="mt-3 leading-relaxed text-muted">{finish.description}</p>
              <p className="mt-4 text-sm text-secondary">
                <span className="font-semibold">Selected GSM:</span> {selectedGsm}
              </p>
              <AddToInquiryButton
                productSlug={spec.slug}
                name={spec.name}
                image={finish.image}
                gsm={selectedGsm}
                finish={finish.name}
                variant="secondary"
                className="mt-6"
              />
            </div>
          </div>
        )}
      </AnimateOnScroll>

      <AnimateOnScroll delay={0.12}>
        <div className="rounded-2xl border border-border bg-rose-50/50 p-6 sm:p-8">
          <h3 className="font-bold text-secondary">Size Summary</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[520px] text-left text-sm">
              <thead>
                <tr className="border-b border-border text-xs uppercase tracking-wide text-muted">
                  <th className="pb-3 pr-4">Size</th>
                  <th className="pb-3 pr-4">Height</th>
                  <th className="pb-3 pr-4">Top Ø</th>
                  <th className="pb-3">Bottom Ø</th>
                </tr>
              </thead>
              <tbody>
                {spec.sizes.map((size) => (
                  <tr key={size.label} className="border-b border-border/60 last:border-0">
                    <td className="py-3 pr-4 font-semibold text-secondary">{size.label}</td>
                    <td className="py-3 pr-4 text-muted">{size.height} mm</td>
                    <td className="py-3 pr-4 text-muted">{size.topDiameter} mm</td>
                    <td className="py-3 text-muted">{size.bottomDiameter} mm</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  );
}
