import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Kumar Construction Ltd.",
      rating: 5,
      text: "BuildRich concrete buckets have transformed our pouring process. 50% less wastage and much faster completion times.",
    },
    {
      name: "Priya Sharma",
      company: "Sharma Builders",
      rating: 5,
      text: "Excellent quality and durability. The precision pouring mechanism is exactly what we needed for our high-rise projects.",
    },
    {
      name: "Amit Patel",
      company: "Patel Infrastructure",
      rating: 5,
      text: "Outstanding customer service and reliable equipment. BuildRich has become our go-to supplier for construction equipment.",
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground text-lg">Trusted by construction professionals across India</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">{testimonial.text}</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
