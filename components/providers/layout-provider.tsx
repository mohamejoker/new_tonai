"use client";

import { useLanguage } from "@/hooks/use-language";
import { useEffect } from "react";

export function LayoutProvider({ children }: { children: React.ReactNode }) {
  const { language, isRTL } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
  }, [language, isRTL]);

  return (
    <html lang={language} dir={isRTL ? "rtl" : "ltr"}>
      {children}
    </html>
  );
}
