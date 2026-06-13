"use client";

import Image from "next/image";
import { useInquiryCart } from "@/context/InquiryCartContext";

export default function InquiryCartDrawer() {
  const {
    items,
    isCartOpen,
    closeCart,
    removeItem,
    updateQuantity,
    openInquiryForm,
  } = useInquiryCart();

  if (!isCartOpen) return null;

  return (
    <>
      <button
        type="button"
        className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
        onClick={closeCart}
        aria-label="Close cart"
      />

      <aside className="fixed top-0 right-0 z-[70] flex h-full w-full max-w-md flex-col bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <div>
            <h2 className="text-lg font-bold text-secondary">Your Cart</h2>
            <p className="text-sm text-muted">{items.length} item(s)</p>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted hover:text-primary"
            aria-label="Close"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <p className="text-muted">Your cart is empty.</p>
              <p className="mt-2 text-sm text-muted">
                Browse products and click &quot;Add to Cart&quot; to get started.
              </p>
              <button
                type="button"
                onClick={closeCart}
                className="mt-6 text-sm font-semibold text-primary"
              >
                Continue browsing
              </button>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex gap-4 rounded-xl border border-border bg-stone-50 p-3"
                >
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-white">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain p-1"
                      sizes="64px"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-secondary">{item.name}</p>
                    {item.gsm && (
                      <p className="mt-0.5 text-xs text-muted">GSM: {item.gsm}</p>
                    )}
                    {item.finish && (
                      <p className="text-xs text-muted">Finish: {item.finish}</p>
                    )}
                    {item.size && (
                      <p className="text-xs text-muted">Size: {item.size}</p>
                    )}
                    <div className="mt-2 flex items-center gap-2">
                      <label htmlFor={`qty-${item.id}`} className="text-xs text-muted">
                        Qty
                      </label>
                      <input
                        id={`qty-${item.id}`}
                        type="number"
                        min={1}
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.id, Number(e.target.value))
                        }
                        className="w-20 rounded-lg border border-border bg-white px-2 py-1 text-sm"
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    className="shrink-0 text-muted hover:text-primary"
                    aria-label={`Remove ${item.name}`}
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-border px-6 py-4">
            <button
              type="button"
              onClick={openInquiryForm}
              className="w-full rounded-full bg-primary py-3.5 text-sm font-bold text-white shadow-lg shadow-rose-200 transition-transform hover:scale-[1.02] hover:bg-primary-dark"
            >
              Request a Quote
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="mt-3 w-full py-2 text-sm font-medium text-muted hover:text-primary"
            >
              Continue browsing
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
