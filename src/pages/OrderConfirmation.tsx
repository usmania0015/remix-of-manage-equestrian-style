import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const OrderConfirmation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-md mx-auto text-center">
            <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-accent" />
            </div>
            
            <h1 className="font-heading text-3xl lg:text-4xl mb-4">
              Thank You for Your Order!
            </h1>
            
            <p className="text-muted-foreground mb-8">
              We've received your order and will send you a confirmation email shortly. 
              Your order will be shipped within 2-3 business days.
            </p>

            <div className="bg-secondary/30 p-6 rounded-lg mb-8">
              <p className="text-sm text-muted-foreground mb-2">Order Number</p>
              <p className="font-heading text-xl">
                #{Math.random().toString(36).substring(2, 10).toUpperCase()}
              </p>
            </div>

            <div className="space-y-4">
              <Link to="/">
                <Button className="w-full btn-primary">Continue Shopping</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderConfirmation;
