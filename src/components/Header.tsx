"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import InquiryCartButton from "@/components/InquiryCartButton";
import MegaMenuShell from "@/components/MegaMenuShell";
import ProductsMegaMenu from "@/components/ProductsMegaMenu";
import { navLinks } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setProductsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  const openProductsMenu = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setProductsOpen(true);
  };

  const closeProductsMenu = () => {
    closeTimerRef.current = setTimeout(() => setProductsOpen(false), 180);
  };

  const closeMenus = () => {
    setOpen(false);
    setProductsOpen(false);
    setMobileProductsOpen(false);
  };

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-border bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" prefetch>
          <Image
            src={siteConfig.logo}
            alt="Dupak logo"
            width={120}
            height={40}
            className="h-9 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) =>
            link.label === "Products" ? (
              <div
                key={link.href}
                ref={menuRef}
                className="relative"
                onMouseEnter={openProductsMenu}
                onMouseLeave={closeProductsMenu}
              >
                <button
                  type="button"
                  onClick={() => setProductsOpen((prev) => !prev)}
                  className="inline-flex items-center gap-1 text-sm font-medium text-muted transition-colors hover:text-primary"
                  aria-expanded={productsOpen}
                  aria-haspopup="true"
                >
                  Products
                  <svg
                    className={`h-4 w-4 transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {productsOpen && (
                  <div
                    className="menu-fade-in absolute top-full left-1/2 z-50 w-[min(920px,calc(100vw-2rem))] -translate-x-1/2 pt-3"
                    onMouseEnter={openProductsMenu}
                    onMouseLeave={closeProductsMenu}
                  >
                    <div className="rounded-3xl border border-border bg-white p-6 shadow-2xl shadow-rose-100/50">
                      <MegaMenuShell onNavigate={() => setProductsOpen(false)}>
                        <ProductsMegaMenu />
                      </MegaMenuShell>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <InquiryCartButton />

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm font-medium text-muted transition-colors hover:text-primary"
            >
              {siteConfig.email}
            </a>
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              WhatsApp Us
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border md:hidden"
            aria-label="Toggle menu"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="animate-fade-in border-t border-border bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) =>
              link.label === "Products" ? (
                <div key={link.href}>
                  <button
                    type="button"
                    onClick={() => setMobileProductsOpen((prev) => !prev)}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-rose-50"
                  >
                    Products
                    <svg
                      className={`h-4 w-4 transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {mobileProductsOpen && (
                    <div className="mt-2 rounded-2xl border border-border bg-stone-50 p-4">
                      <MegaMenuShell onNavigate={closeMenus}>
                        <ProductsMegaMenu />
                      </MegaMenuShell>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenus}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-rose-50"
                >
                  {link.label}
                </Link>
              ),
            )}
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-primary px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              WhatsApp Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
