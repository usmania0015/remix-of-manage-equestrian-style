import { Globe, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLocale, currencies, languages } from "@/contexts/LocaleContext";

interface CurrencyLanguageSelectorProps {
  className?: string;
}

const CurrencyLanguageSelector = ({ className = "" }: CurrencyLanguageSelectorProps) => {
  const { currency, setCurrency, language, setLanguage } = useLocale();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger 
        className={`flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors focus:outline-none ${className}`}
      >
        <Globe className="w-3.5 h-3.5" />
        <span>{language.code.toUpperCase()}</span>
        <span className="text-muted-foreground/50">|</span>
        <span>{currency.code}</span>
        <ChevronDown className="w-3 h-3 opacity-60" />
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="bg-background border border-border shadow-lg min-w-[160px] z-50"
      >
        <div className="px-3 py-2">
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Language</p>
        </div>
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang)}
            className={`cursor-pointer text-sm ${language.code === lang.code ? "font-medium" : ""}`}
          >
            {lang.name}
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <div className="px-3 py-2">
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Currency</p>
        </div>
        {currencies.map((curr) => (
          <DropdownMenuItem
            key={curr.code}
            onClick={() => setCurrency(curr)}
            className={`cursor-pointer text-sm ${currency.code === curr.code ? "font-medium" : ""}`}
          >
            <span className="w-8">{curr.symbol}</span>
            <span>{curr.code}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CurrencyLanguageSelector;
