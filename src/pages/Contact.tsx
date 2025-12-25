import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="font-heading text-4xl lg:text-5xl mb-4">Get in Touch</h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Have a question about our products or need assistance with an order? 
                We're here to help.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <Button type="submit" className="w-full btn-primary" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>

              {/* Contact Info */}
              <div className="lg:pl-8">
                <div className="space-y-8">
                  <div>
                    <h3 className="font-heading text-xl mb-4">Contact Information</h3>
                    <p className="text-muted-foreground mb-6">
                      Reach out to us through any of the following channels. 
                      We typically respond within 24 hours.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary/50 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium mb-1">Email</p>
                        <a
                          href="mailto:hello@manege-equestrian.com"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          hello@manege-equestrian.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary/50 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium mb-1">Phone</p>
                        <a
                          href="tel:+1-555-123-4567"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          +1 (555) 123-4567
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">
                          Mon-Fri, 9am-5pm EST
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary/50 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium mb-1">Address</p>
                        <p className="text-muted-foreground">
                          123 Equestrian Way<br />
                          New York, NY 10001<br />
                          United States
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-secondary/30 p-6 rounded-lg mt-8">
                    <h4 className="font-medium mb-2">Customer Service Hours</h4>
                    <p className="text-sm text-muted-foreground">
                      Monday - Friday: 9:00 AM - 5:00 PM EST<br />
                      Saturday: 10:00 AM - 2:00 PM EST<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
