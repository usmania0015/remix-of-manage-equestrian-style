import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface Currency {
  code: string;
  symbol: string;
  name: string;
  rate: number;
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
  hasSelected: boolean;
  confirmSelection: () => void;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

const STORAGE_KEY = "manege-locale";

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const [currency, setCurrencyState] = useState<Currency>(currencies[0]);
  const [language, setLanguageState] = useState<Language>(languages[0]);
  const [hasSelected, setHasSelected] = useState(true);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const { currencyCode, languageCode } = JSON.parse(saved);
        const c = currencies.find((x) => x.code === currencyCode);
        const l = languages.find((x) => x.code === languageCode);
        if (c) setCurrencyState(c);
        if (l) setLanguageState(l);
      } else {
        setHasSelected(false);
      }
    } catch {
      setHasSelected(false);
    }
  }, []);

  const persist = (c: Currency, l: Language) => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ currencyCode: c.code, languageCode: l.code })
    );
  };

  const setCurrency = (c: Currency) => {
    setCurrencyState(c);
    persist(c, language);
  };

  const setLanguage = (l: Language) => {
    setLanguageState(l);
    persist(currency, l);
  };

  const confirmSelection = () => {
    persist(currency, language);
    setHasSelected(true);
  };

  const formatPrice = (priceUSD: number): string => {
    const v = priceUSD * currency.rate;
    if (currency.code === "SEK") return `${Math.round(v)} ${currency.symbol}`;
    return `${currency.symbol}${v.toFixed(2)}`;
  };

  return (
    <LocaleContext.Provider
      value={{ currency, setCurrency, language, setLanguage, formatPrice, hasSelected, confirmSelection }}
    >
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = (): LocaleContextType => {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within a LocaleProvider");
  return ctx;
};
