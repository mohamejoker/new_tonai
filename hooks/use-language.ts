"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Language, getTranslation, Translation } from "@/lib/i18n";

interface LanguageStore {
  language: Language;
  translation: Translation;
  setLanguage: (language: Language) => void;
  isRTL: boolean;
}

export const useLanguage = create<LanguageStore>()(
  persist(
    (set, get) => ({
      language: "en",
      translation: getTranslation("en"),
      isRTL: false,
      setLanguage: (language: Language) => {
        set({
          language,
          translation: getTranslation(language),
          isRTL: language === "ar",
        });
      },
    }),
    {
      name: "language-storage",
    },
  ),
);
