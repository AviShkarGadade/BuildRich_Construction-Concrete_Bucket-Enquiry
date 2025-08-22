import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-primary/10 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge className="bg-primary/10 text-primary border-primary/20">Construction Excellence</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              Tower Crane Concrete Bucket
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Reduce spillage, save costs, and pour with precision. Our advanced concrete buckets deliver unmatched
              efficiency for your construction projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <Link href="https://wa.me/919923073303">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Now
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="tel:+919923073303">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/assets/Bucket.jpg"
              alt="Tower Crane Concrete Bucket"
              width={600}
              height={600}
              className="rounded-lg shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
