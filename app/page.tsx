import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Shield, Wrench, Star, DollarSign, Clock, MessageCircle, Facebook, Instagram } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Import all section components
import HeroSection from "@/components/sections/hero-section"
import ChallengesSection from "@/components/sections/challenges-section"
import ProductGallery from "@/components/sections/product-gallery"
import TestimonialsSection from "@/components/sections/testimonials-section"
import FAQSection from "@/components/sections/faq-section"
import ContactForm from "@/components/sections/contact-form"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src="/assets/Buildrich_Logo.png"
              alt="BuildRich Logo"
              width={180}
              height={60}
              className="h-12 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#home" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="#product" className="text-foreground hover:text-primary transition-colors">
              Product
            </Link>
            <Link href="#why-choose-us" className="text-foreground hover:text-primary transition-colors">
              Why Choose Us
            </Link>
            <Link href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link href="tel:+919923073303">
              <MessageCircle className="w-4 h-4 mr-2" />
              Call Now
            </Link>
          </Button>
        </div>
      </header>

      {/* All sections using components */}
      <HeroSection />
      <ChallengesSection />
      <ProductGallery />

      {/* Product Showcase */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Smooth & Controlled Pouring Mechanism</h2>
              <div className="space-y-4">
                {[
                  {
                    icon: CheckCircle,
                    title: "Precision Engineering",
                    desc: "Advanced design for accurate concrete placement",
                  },
                  {
                    icon: Shield,
                    title: "50% Less Spillage",
                    desc: "Innovative mechanism reduces material waste significantly",
                  },
                  {
                    icon: Wrench,
                    title: "Durable Construction",
                    desc: "Built to withstand harsh construction environments",
                  },
                  { icon: Star, title: "Increased Accuracy", desc: "Consistent performance for professional results" },
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <feature.icon className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <Link href="https://wa.me/919923073303">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Now
                </Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/assets/c3.jpg"
                alt="Concrete Bucket Details"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-choose-us" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Why Choose BuildRich?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Empowering construction excellence with reliable, efficient, and cost-effective solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Durability",
                desc: "Built to last with premium materials and robust construction",
              },
              { icon: Wrench, title: "Easy to Use", desc: "Simple operation with minimal training required" },
              { icon: DollarSign, title: "Cost-Saving", desc: "Reduce material waste and labor costs significantly" },
              {
                icon: Clock,
                title: "Faster Efficiency",
                desc: "Speed up your construction timeline with precision pouring",
              },
            ].map((benefit, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <benefit.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Product Details */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Tower Crane Concrete Bucket – The Best Concrete Pouring Solution
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                Looking for <strong>affordable concrete pouring equipment</strong> that delivers exceptional results?
                Our tower crane concrete buckets are designed to <strong>reduce concrete wastage</strong> while
                improving efficiency on construction sites across India.
              </p>
              <p className="mb-4">
                When you <strong>buy concrete pouring bucket India</strong> from BuildRich, you are investing in
                precision-engineered equipment that saves time, reduces costs, and enhances safety. Our buckets feature
                advanced pouring mechanisms that ensure controlled, accurate concrete placement every time.
              </p>
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Key Specifications</h3>
                  <ul className="space-y-2">
                    <li>• Capacity: Multiple sizes available</li>
                    <li>• Material: High-grade steel construction</li>
                    <li>• Finish: Durable powder coating</li>
                    <li>• Compatibility: Standard tower cranes</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Benefits</h3>
                  <ul className="space-y-2">
                    <li>• 50% reduction in concrete spillage</li>
                    <li>• Faster pouring process</li>
                    <li>• Lower labor requirements</li>
                    <li>• Enhanced workplace safety</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <FAQSection />
      <ContactForm />

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <Image
                src="/assets/Buildrich_Logo.png"
                alt="BuildRich Logo"
                width={180}
                height={60}
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-background/80 mb-4">
                Empowering Construction Excellence with innovative concrete pouring solutions.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#home" className="text-background/80 hover:text-background transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#product" className="text-background/80 hover:text-background transition-colors">
                    Product
                  </Link>
                </li>
                <li>
                  <Link href="#why-choose-us" className="text-background/80 hover:text-background transition-colors">
                    Why Choose Us
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-background/80 hover:text-background transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-background/80">
                <p>+91-9923073303</p>
                <p>info@buildrich.in</p>
                <p>Sr. No. 31/5/1, Besides Akemi Business School, Marunji Rd, (Marunji), Wakad Pune - 411057</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Link href="https://www.facebook.com/buildrich.in">
                    <Facebook className="w-5 h-5 mr-2" />
                    Facebook
                  </Link>
                <Link href="https://www.instagram.com/buildrich.in/">
                    <Instagram className="w-5 h-5 mr-2" />
                    Instagram
                  </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center">
            <p className="text-background/60">
              © 2025 BuildRich. All rights reserved. | Empowering Construction Excellence
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
