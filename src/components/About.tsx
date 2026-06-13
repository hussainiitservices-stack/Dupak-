import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { features, stats } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="section-lazy bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <AnimateOnScroll direction="left">
            <div className="relative h-[480px] overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/images/about-factory.jpg"
                alt="Dupak manufacturing facility"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-6 left-6 rounded-xl bg-white/95 px-5 py-4 backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                  Manufacturing
                </p>
                <p className="text-lg font-bold text-secondary">UAE &amp; GCC</p>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Welcome to Dupak
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-secondary sm:text-4xl">
              We Brand All Packaging Products
            </h2>
            <p className="mt-6 leading-relaxed text-muted">
              Dupak Manufacturing LLC specializes in custom-branded packaging for
              businesses across the UAE and GCC. From paper cups and PET cups to bowls,
              bags, bottles, and boxes — we turn your packaging into a powerful
              marketing tool.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Whether you run a café, restaurant, ice cream parlor, or retail brand,
              our team works with you from concept to delivery to create packaging that
              reflects your identity.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <AnimateOnScroll key={stat.label} delay={i * 0.1}>
                  <div className="rounded-2xl border border-border bg-background p-5 text-center">
                    <p className="text-2xl font-extrabold text-primary">{stat.value}</p>
                    <p className="mt-1 text-sm text-muted">{stat.label}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </AnimateOnScroll>
        </div>

        <div className="mt-24">
          <AnimateOnScroll className="text-center">
            <h3 className="text-2xl font-bold text-secondary">Why Choose Dupak</h3>
          </AnimateOnScroll>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, i) => (
              <AnimateOnScroll key={feature.title} delay={i * 0.1}>
                <div className="rounded-2xl border border-border bg-background p-6 transition-shadow hover:shadow-lg">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-rose-50 text-primary">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-secondary">{feature.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {feature.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
