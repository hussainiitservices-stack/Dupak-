import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { siteConfig } from "@/lib/site";

export default function Contact() {
  return (
    <section id="contact" className="section-lazy py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="relative min-h-[520px] overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/images/contact-envelope.jpg"
              alt="Contact Dupak"
              fill
              loading="lazy"
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-secondary/85" />

            <div className="relative grid lg:grid-cols-2">
              <div className="p-10 sm:p-14">
                <span className="text-sm font-semibold uppercase tracking-widest text-pink-300">
                  Get In Touch
                </span>
                <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
                  We&apos;d Love to Hear From You
                </h2>
                <p className="mt-4 leading-relaxed text-white/80">
                  Ready to brand your packaging? Reach out via WhatsApp or email and
                  our team will get back to you with a free mockup.
                </p>

                <div className="mt-10 space-y-5">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-4 rounded-xl bg-white/10 px-5 py-4 backdrop-blur-sm transition-colors hover:bg-white/20"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20">
                      <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-xs text-white/60">Email</p>
                      <p className="font-semibold text-white">{siteConfig.email}</p>
                    </div>
                  </a>

                  <a
                    href={siteConfig.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-xl bg-white/10 px-5 py-4 backdrop-blur-sm transition-colors hover:bg-white/20"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20">
                      <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.11.55 4.09 1.514 5.816L0 24l6.335-1.662A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.37l-.358-.213-3.76.987 1.004-3.66-.233-.376A9.818 9.818 0 1112 21.818z" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-xs text-white/60">WhatsApp</p>
                      <p className="font-semibold text-white">Chat with us now</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center p-10 sm:p-14">
                <div className="relative h-40 w-40">
                  <Image
                    src="/images/paper-cups.png"
                    alt="Dupak branded paper cups"
                    fill
                    className="animate-float object-contain drop-shadow-2xl"
                    sizes="160px"
                  />
                </div>
                <p className="mt-6 text-xl font-bold text-white">
                  Get a Free Mockup Today
                </p>
                <p className="mt-2 text-sm text-white/70">
                  See your brand on our products before you order
                </p>
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105 hover:bg-primary-dark"
                >
                  WhatsApp Us Now
                </a>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
