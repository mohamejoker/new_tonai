"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Currency, currencies, formatPrice } from "@/lib/currency";

interface CurrencyStore {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  formatPrice: (price: number) => string;
  getCurrencyInfo: () => (typeof currencies)[Currency];
}

export const useCurrency = create<CurrencyStore>()(
  persist(
    (set, get) => ({
      currency: "USD",
      setCurrency: (currency: Currency) => set({ currency }),
      formatPrice: (price: number) => formatPrice(price, get().currency),
      getCurrencyInfo: () => currencies[get().currency],
    }),
    {
      name: "currency-storage",
    },
  ),
);
