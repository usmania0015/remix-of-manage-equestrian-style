import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: "website" | "product" | "article";
  structuredData?: object;
}

const SEOHead = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = "/og-image.jpg",
  ogType = "website",
  structuredData,
}: SEOHeadProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper to update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Standard meta tags
    updateMetaTag("description", description);
    if (keywords) updateMetaTag("keywords", keywords);
    updateMetaTag("robots", "index, follow");

    // Open Graph tags
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:type", ogType, true);
    updateMetaTag("og:image", ogImage, true);
    if (canonicalUrl) updateMetaTag("og:url", canonicalUrl, true);

    // Twitter Card tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", ogImage);

    // Canonical URL
    if (canonicalUrl) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonicalUrl);
    }

    // Structured Data (JSON-LD)
    if (structuredData) {
      let script = document.querySelector('script[data-seo="structured-data"]');
      if (!script) {
        script = document.createElement("script");
        script.setAttribute("type", "application/ld+json");
        script.setAttribute("data-seo", "structured-data");
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }

    return () => {
      // Cleanup structured data on unmount
      const script = document.querySelector('script[data-seo="structured-data"]');
      if (script) script.remove();
    };
  }, [title, description, keywords, canonicalUrl, ogImage, ogType, structuredData]);

  return null;
};

export default SEOHead;

// Reusable structured data generators
export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Manège Equestrian",
  url: "https://manege-equestrian.com",
  logo: "https://manege-equestrian.com/logo.png",
  description: "Premium equestrian apparel and accessories for discerning riders and horses. Luxury riding wear crafted with precision.",
  foundingDate: "1999",
  sameAs: [
    "https://instagram.com/manegeequestrian",
    "https://facebook.com/manegeequestrian",
    "https://youtube.com/manegeequestrian"
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-800-MANEGE",
    contactType: "customer service",
    availableLanguage: ["English"]
  }
});

export const generateProductSchema = (product: {
  name: string;
  description: string;
  price: number;
  image: string;
  sku?: string;
  inStock?: boolean;
}) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: product.name,
  description: product.description,
  image: product.image,
  sku: product.sku || product.name.toLowerCase().replace(/\s+/g, "-"),
  brand: {
    "@type": "Brand",
    name: "Manège Equestrian"
  },
  offers: {
    "@type": "Offer",
    price: product.price,
    priceCurrency: "USD",
    availability: product.inStock !== false 
      ? "https://schema.org/InStock" 
      : "https://schema.org/OutOfStock",
    seller: {
      "@type": "Organization",
      name: "Manège Equestrian"
    }
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127"
  }
});

export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url
  }))
});

export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
});
