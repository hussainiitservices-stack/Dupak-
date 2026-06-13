"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { heroSlides } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[active];

  return (
    <section className="relative min-h-[92vh] overflow-hidden pt-16">
      <div
        className="absolute inset-0 transition-colors duration-700"
        style={{ backgroundColor: slide.bgColor }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-white/25" aria-hidden />

      <div className="relative mx-auto flex min-h-[calc(92vh-4rem)] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid w-full items-center gap-10 lg:grid-cols-2">
          <div>
            <div key={slide.title} className="animate-slide-up">
              <span className="mb-6 inline-block rounded-full border border-primary/20 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary shadow-sm">
                {slide.eyebrow}
              </span>
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-secondary sm:text-5xl lg:text-6xl">
                {slide.title}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                {slide.description}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-rose-200 transition-transform hover:scale-105 hover:bg-primary-dark"
                >
                  {slide.cta}
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-secondary/20 bg-white px-8 py-3.5 text-sm font-semibold text-secondary shadow-sm transition-colors hover:border-primary hover:text-primary"
                >
                  Browse Products
                </Link>
              </div>
            </div>

            <div className="mt-14 flex items-center gap-3">
              {heroSlides.map((s, i) => (
                <button
                  key={s.eyebrow}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Go to ${s.eyebrow} slide`}
                  className={`flex items-center gap-2 rounded-full transition-all duration-300 ${
                    i === active
                      ? "bg-white px-3 py-1.5 shadow-md"
                      : "px-1 py-1 opacity-60 hover:opacity-100"
                  }`}
                >
                  <span
                    className={`block rounded-full transition-all ${
                      i === active ? "h-2.5 w-2.5 bg-primary" : "h-2 w-2 bg-secondary/40"
                    }`}
                  />
                  {i === active && (
                    <span className="text-xs font-semibold text-secondary">{s.eyebrow}</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div key={slide.image} className="relative flex justify-center animate-fade-in">
            <div className="animate-float relative h-[340px] w-[340px] transition-transform duration-300 hover:scale-105 sm:h-[420px] sm:w-[420px]">
              <div className="absolute -inset-4 rounded-full bg-white/60 shadow-2xl shadow-rose-100/80" />
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="relative z-10 object-contain p-8 drop-shadow-2xl"
                sizes="(max-width: 640px) 340px, 420px"
                priority={active === 0}
                loading={active === 0 ? "eager" : "lazy"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
