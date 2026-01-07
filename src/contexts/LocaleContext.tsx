import { createContext, useContext, useState, ReactNode } from "react";

interface Currency {
  code: string;
  symbol: string;
  name: string;
  rate: number; // Conversion rate from USD
}

interface Language {
  code: string;
  name: string;
}

export const currencies: Currency[] = [
  { code: "USD", symbol: "$", name: "US Dollar", rate: 1 },
  { code: "EUR", symbol: "€", name: "Euro", rate: 0.92 },
  { code: "GBP", symbol: "£", name: "British Pound", rate: 0.79 },
  { code: "SEK", symbol: "kr", name: "Swedish Krona", rate: 10.45 },
  { code: "AUD", symbol: "A$", name: "Australian Dollar", rate: 1.53 },
];

export const languages: Language[] = [
  { code: "en", name: "English" },
  { code: "sv", name: "Svenska" },
  { code: "de", name: "Deutsch" },
  { code: "fr", name: "Français" },
];

interface LocaleContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  language: Language;
  setLanguage: (language: Language) => void;
  formatPrice: (priceUSD: number) => string;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const [currency, setCurrency] = useState<Currency>(currencies[0]);
  const [language, setLanguage] = useState<Language>(languages[0]);

  const formatPrice = (priceUSD: number): string => {
    const convertedPrice = priceUSD * currency.rate;
    
    // Format based on currency
    if (currency.code === "SEK") {
      return `${Math.round(convertedPrice)} ${currency.symbol}`;
    }
    
    return `${currency.symbol}${convertedPrice.toFixed(2)}`;
  };

  return (
    <LocaleContext.Provider
      value={{
        currency,
        setCurrency,
        language,
        setLanguage,
        formatPrice,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = (): LocaleContextType => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
};
