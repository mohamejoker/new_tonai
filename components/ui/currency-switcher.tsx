"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DollarSign } from "lucide-react";
import { useCurrency } from "@/hooks/use-currency";
import { useLanguage } from "@/hooks/use-language";
import { currencies } from "@/lib/currency";

export function CurrencySwitcher() {
  const { currency, setCurrency } = useCurrency();
  const { language } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="text-white hover:bg-white/10"
        >
          <DollarSign className="w-4 h-4 mr-2" />
          {currency}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-gray-900 border-gray-700">
        <DropdownMenuItem
          onClick={() => setCurrency("USD")}
          className="text-white hover:bg-gray-800 cursor-pointer"
        >
          {language === "ar" ? currencies.USD.nameAr : currencies.USD.name}{" "}
          (USD)
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setCurrency("EGP")}
          className="text-white hover:bg-gray-800 cursor-pointer"
        >
          {language === "ar" ? currencies.EGP.nameAr : currencies.EGP.name}{" "}
          (EGP)
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
