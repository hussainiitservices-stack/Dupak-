"use client";

import { useEffect, useMemo, useSyncExternalStore, type ReactNode } from "react";

export type InquiryCartItem = {
  id: string;
  productSlug: string;
  name: string;
  image: string;
  quantity: number;
  size?: string;
  gsm?: string;
  finish?: string;
  notes?: string;
};

type AddItemInput = Omit<InquiryCartItem, "id" | "quantity"> & {
  quantity?: number;
};

type CartStoreState = {
  items: InquiryCartItem[];
  isCartOpen: boolean;
  isFormOpen: boolean;
  hydrated: boolean;
};

const STORAGE_KEY = "dupak-inquiry-cart";

const listeners = new Set<() => void>();

let store: CartStoreState = {
  items: [],
  isCartOpen: false,
  isFormOpen: false,
  hydrated: false,
};

function emit() {
  listeners.forEach((listener) => listener());
}

function setStore(partial: Partial<CartStoreState>) {
  store = { ...store, ...partial };
  emit();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return store;
}

const SERVER_SNAPSHOT: CartStoreState = {
  items: [],
  isCartOpen: false,
  isFormOpen: false,
  hydrated: false,
};

function getServerSnapshot() {
  return SERVER_SNAPSHOT;
}

function loadStoredItems(): InquiryCartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as InquiryCartItem[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function persistItems(items: InquiryCartItem[]) {
  if (typeof window === "undefined" || !store.hydrated) return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

function addItem(item: AddItemInput) {
  const newItem: InquiryCartItem = {
    ...item,
    id: crypto.randomUUID(),
    quantity: item.quantity ?? 1,
  };
  const items = [...store.items, newItem];
  persistItems(items);
  setStore({ items, isCartOpen: true });
}

function removeItem(id: string) {
  const items = store.items.filter((item) => item.id !== id);
  persistItems(items);
  setStore({ items });
}

function updateQuantity(id: string, quantity: number) {
  const items = store.items.map((item) =>
    item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item,
  );
  persistItems(items);
  setStore({ items });
}

function clearCart() {
  persistItems([]);
  setStore({ items: [] });
}

const cartActions = {
  addItem,
  removeItem,
  updateQuantity,
  clearCart,
  openCart: () => setStore({ isCartOpen: true }),
  closeCart: () => setStore({ isCartOpen: false }),
  openInquiryForm: () => setStore({ isCartOpen: false, isFormOpen: true }),
  closeInquiryForm: () => setStore({ isFormOpen: false }),
};

export function InquiryCartProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    setStore({ items: loadStoredItems(), hydrated: true });
  }, []);

  return children;
}

export function useInquiryCart() {
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return useMemo(
    () => ({
      items: snapshot.items,
      itemCount: snapshot.items.reduce((sum, item) => sum + item.quantity, 0),
      hydrated: snapshot.hydrated,
      isCartOpen: snapshot.isCartOpen,
      isFormOpen: snapshot.isFormOpen,
      ...cartActions,
    }),
    [snapshot],
  );
}
