"use client";

import { useState, type FormEvent } from "react";
import { useInquiryCart, type InquiryCartItem } from "@/context/InquiryCartContext";
import { siteConfig } from "@/lib/site";

function buildInquiryMessage(
  items: InquiryCartItem[],
  form: {
    name: string;
    email: string;
    phone: string;
    company: string;
    message: string;
  },
) {
  const productLines = items
    .map((item, index) => {
      const details = [
        item.gsm ? `GSM: ${item.gsm}` : null,
        item.finish ? `Finish: ${item.finish}` : null,
        item.size ? `Size: ${item.size}` : null,
        `Quantity: ${item.quantity}`,
      ]
        .filter(Boolean)
        .join(" | ");

      return `${index + 1}. ${item.name}\n   ${details}`;
    })
    .join("\n\n");

  return [
    "Hello Dupak, I would like to inquire about the following products:",
    "",
    productLines,
    "",
    "--- Contact Details ---",
    `Name: ${form.name}`,
    `Email: ${form.email}`,
    `Phone: ${form.phone}`,
    form.company ? `Company: ${form.company}` : null,
    form.message ? `\nMessage:\n${form.message}` : null,
  ]
    .filter(Boolean)
    .join("\n");
}

export default function InquiryFormModal() {
  const { items, isFormOpen, closeInquiryForm, clearCart } = useInquiryCart();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  if (!isFormOpen) return null;

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const body = buildInquiryMessage(items, form);
    const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent("Quote Request — Dupak")}&body=${encodeURIComponent(body)}`;
    const whatsapp = `${siteConfig.whatsapp}?text=${encodeURIComponent(body)}`;

    window.open(whatsapp, "_blank", "noopener,noreferrer");
    window.location.href = mailto;

    setSubmitted(true);
    clearCart();
  };

  const handleClose = () => {
    closeInquiryForm();
    setSubmitted(false);
    setForm({ name: "", email: "", phone: "", company: "", message: "" });
  };

  return (
    <>
      <button
        type="button"
        className="fixed inset-0 z-[80] bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
        aria-label="Close quote form"
      />

      <div className="fixed inset-0 z-[90] flex items-center justify-center p-4">
        <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white shadow-2xl">
          <div className="flex items-center justify-between border-b border-border px-6 py-4">
            <div>
              <h2 className="text-xl font-bold text-secondary">Request a Quote</h2>
              <p className="text-sm text-muted">
                {items.length} item(s) in your cart
              </p>
            </div>
            <button
              type="button"
              onClick={handleClose}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted hover:text-primary"
              aria-label="Close"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {submitted ? (
            <div className="px-6 py-10 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-rose-50 text-primary">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-bold text-secondary">Quote sent!</h3>
              <p className="mt-2 text-sm text-muted">
                WhatsApp and email opened with your cart details. We&apos;ll get back to you
                shortly.
              </p>
              <button
                type="button"
                onClick={handleClose}
                className="mt-6 rounded-full bg-primary px-8 py-3 text-sm font-bold text-white"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 px-6 py-6">
              <div className="rounded-2xl border border-border bg-stone-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Cart items
                </p>
                <ul className="mt-3 space-y-2">
                  {items.map((item) => (
                    <li key={item.id} className="text-sm text-secondary">
                      <span className="font-semibold">{item.name}</span>
                      <span className="text-muted">
                        {" "}
                        × {item.quantity}
                        {item.gsm ? ` · ${item.gsm}` : ""}
                        {item.finish ? ` · ${item.finish}` : ""}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block sm:col-span-2">
                  <span className="text-sm font-medium text-secondary">Full Name *</span>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-border px-4 py-2.5 text-sm outline-none focus:border-primary"
                    placeholder="Your name"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-secondary">Email *</span>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-border px-4 py-2.5 text-sm outline-none focus:border-primary"
                    placeholder="you@company.com"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-secondary">Phone *</span>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-border px-4 py-2.5 text-sm outline-none focus:border-primary"
                    placeholder="+971 ..."
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-sm font-medium text-secondary">Company</span>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-border px-4 py-2.5 text-sm outline-none focus:border-primary"
                    placeholder="Business name (optional)"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-sm font-medium text-secondary">Additional Notes</span>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="mt-1.5 w-full resize-none rounded-xl border border-border px-4 py-2.5 text-sm outline-none focus:border-primary"
                    placeholder="Quantities, delivery timeline, artwork details..."
                  />
                </label>
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-primary py-3.5 text-sm font-bold text-white shadow-lg shadow-rose-200 hover:bg-primary-dark"
              >
                Send Quote Request
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
