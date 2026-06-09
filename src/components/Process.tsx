"use client";

import AnimateOnScroll from "@/components/AnimateOnScroll";
import { processSteps } from "@/lib/data";

export default function Process() {
  return (
    <section id="process" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            How It Works
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-secondary sm:text-4xl">
            Custom Design in 4 Simple Steps
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            From picking your product to receiving branded packaging at your door —
            we make the process seamless.
          </p>
        </AnimateOnScroll>

        <div className="relative mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute top-12 right-[12.5%] left-[12.5%] hidden h-px bg-border lg:block" />

          {processSteps.map((step, i) => (
            <AnimateOnScroll key={step.step} delay={i * 0.12}>
              <div className="relative text-center">
                <div className="relative z-10 mx-auto flex h-24 w-24 items-center justify-center rounded-2xl bg-primary text-2xl font-extrabold text-white shadow-lg shadow-rose-100 transition-transform hover:scale-110">
                  {step.step}
                </div>
                <h3 className="mt-6 text-lg font-bold text-secondary">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
