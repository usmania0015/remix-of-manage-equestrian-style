import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead, { generateFAQSchema } from "@/components/SEOHead";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      category: "Orders & Shipping",
      questions: [
        {
          question: "How long does shipping take?",
          answer:
            "Standard shipping typically takes 3-5 business days within the US. Express shipping (1-2 business days) is available at checkout. International shipping varies by location, usually 7-14 business days.",
        },
        {
          question: "Do you ship internationally?",
          answer:
            "Yes! We ship to most countries worldwide. Shipping costs and delivery times vary by location. You can see the exact cost at checkout before completing your order.",
        },
        {
          question: "How can I track my order?",
          answer:
            "Once your order ships, you'll receive an email with a tracking number. You can use this to track your package on our website or directly with the carrier.",
        },
        {
          question: "Is free shipping available?",
          answer:
            "Yes! We offer free standard shipping on all US orders over $250. International orders may qualify for free shipping on orders over $300.",
        },
      ],
    },
    {
      category: "Returns & Exchanges",
      questions: [
        {
          question: "What is your return policy?",
          answer:
            "We offer a 30-day return policy for unworn items with original tags attached. Items must be in their original condition. Sale items are final sale and cannot be returned.",
        },
        {
          question: "How do I start a return?",
          answer:
            "To start a return, log into your account and select the order you'd like to return. Follow the prompts to generate a return label. If you checked out as a guest, contact our customer service team.",
        },
        {
          question: "Can I exchange an item for a different size?",
          answer:
            "Yes! We're happy to exchange items for a different size, subject to availability. The easiest way is to return your item and place a new order for the size you need.",
        },
        {
          question: "When will I receive my refund?",
          answer:
            "Refunds are processed within 5-7 business days of receiving your return. The refund will be credited to your original payment method.",
        },
      ],
    },
    {
      category: "Products & Sizing",
      questions: [
        {
          question: "How do I find my size?",
          answer:
            "We provide detailed size guides for each product category. You can find the size guide link on each product page. When in doubt, we recommend measuring yourself and comparing to our size chart.",
        },
        {
          question: "Are your products true to size?",
          answer:
            "Our products are designed to fit true to size. However, some items like breeches may fit more snugly due to the stretch fabric. Check individual product descriptions for specific fit notes.",
        },
        {
          question: "How should I care for my items?",
          answer:
            "Care instructions are included on all product tags and in the product description online. Generally, we recommend washing in cold water and laying flat to dry to maintain the quality of your items.",
        },
        {
          question: "Are your products suitable for competition?",
          answer:
            "Many of our products are designed with competition in mind and comply with major federation rules. Check individual product descriptions for competition suitability.",
        },
      ],
    },
    {
      category: "Account & Payment",
      questions: [
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay. All transactions are securely processed.",
        },
        {
          question: "Is my payment information secure?",
          answer:
            "Absolutely. We use industry-standard SSL encryption to protect your payment information. We never store your full credit card details on our servers.",
        },
        {
          question: "Do I need an account to place an order?",
          answer:
            "No, you can checkout as a guest. However, creating an account allows you to track orders, save shipping addresses, and access exclusive member benefits.",
        },
      ],
    },
  ];

  // Flatten FAQs for schema
  const allFaqs = faqs.flatMap(category => 
    category.questions.map(q => ({ question: q.question, answer: q.answer }))
  );
  const faqSchema = generateFAQSchema(allFaqs);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="FAQ | Manège Equestrian Help Center | Shipping, Returns & Sizing Guide"
        description="Find answers to frequently asked questions about Manège Equestrian. Learn about shipping times, return policy, sizing guides, payment methods, and product care instructions."
        keywords="Manège FAQ, equestrian shipping, riding wear returns, size guide, equestrian clothing care, payment methods, order tracking"
        canonicalUrl="https://manege-equestrian.com/faq"
        structuredData={faqSchema}
      />
      <Header />
      <main className="pt-40 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <header className="text-center mb-16">
              <h1 className="font-heading text-4xl lg:text-5xl mb-4">
                Frequently Asked Questions
              </h1>
              <p className="text-muted-foreground text-lg">
                Find answers to common questions about orders, shipping, returns, and more.
              </p>
            </header>

            <div className="space-y-12">
              {faqs.map((category) => (
                <section key={category.category} aria-labelledby={`category-${category.category.replace(/\s+/g, '-')}`}>
                  <h2 id={`category-${category.category.replace(/\s+/g, '-')}`} className="font-heading text-xl mb-4">{category.category}</h2>
                  <Accordion type="single" collapsible className="space-y-2">
                    {category.questions.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`${category.category}-${index}`}
                        className="bg-secondary/30 px-6 rounded-lg border-none"
                      >
                        <AccordionTrigger className="text-left hover:no-underline">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </section>
              ))}
            </div>

            <aside className="mt-16 text-center p-8 bg-secondary/30 rounded-lg">
              <h2 className="font-heading text-xl mb-2">Still have questions?</h2>
              <p className="text-muted-foreground mb-4">
                Can't find what you're looking for? Our customer service team is here to help.
              </p>
              <a href="/contact" className="btn-primary inline-block">
                Contact Us
              </a>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
