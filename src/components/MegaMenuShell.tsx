"use client";

import type { ReactNode } from "react";

export default function MegaMenuShell({
  children,
  onNavigate,
}: {
  children: ReactNode;
  onNavigate?: () => void;
}) {
  return (
    <div
      onClick={(event) => {
        if ((event.target as HTMLElement).closest("a")) {
          onNavigate?.();
        }
      }}
    >
      {children}
    </div>
  );
}
