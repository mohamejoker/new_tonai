export type Currency = "USD" | "EGP";

export interface CurrencyInfo {
  symbol: string;
  code: string;
  name: string;
  nameAr: string;
}

export const currencies: Record<Currency, CurrencyInfo> = {
  USD: {
    symbol: "$",
    code: "USD",
    name: "US Dollar",
    nameAr: "الدولار الأمريكي",
  },
  EGP: {
    symbol: "ج.م",
    code: "EGP",
    name: "Egyptian Pound",
    nameAr: "الجنيه المصري",
  },
};

// Exchange rate (1 USD = 30.9 EGP approximately)
export const exchangeRates: Record<Currency, number> = {
  USD: 1,
  EGP: 30.9,
};

export function convertPrice(
  price: number,
  fromCurrency: Currency,
  toCurrency: Currency,
): number {
  if (fromCurrency === toCurrency) return price;

  // Convert to USD first, then to target currency
  const usdPrice =
    fromCurrency === "USD" ? price : price / exchangeRates[fromCurrency];
  return toCurrency === "USD" ? usdPrice : usdPrice * exchangeRates[toCurrency];
}

export function formatPrice(price: number, currency: Currency): string {
  const converted = Math.round(price * exchangeRates[currency]);
  const symbol = currencies[currency].symbol;

  if (currency === "EGP") {
    return `${converted.toLocaleString()} ${symbol}`;
  }

  return `${symbol}${converted.toLocaleString()}`;
}
