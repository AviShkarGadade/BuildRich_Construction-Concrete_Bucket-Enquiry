import { Card, CardContent } from "@/components/ui/card"
import { Clock, DollarSign, Shield, Users, CheckCircle, Wrench } from "lucide-react"

export default function ChallengesSection() {
  const challenges = [
    { icon: Clock, title: "Slow Pouring Delays", desc: "Eliminate time-consuming manual pouring processes" },
    { icon: DollarSign, title: "High Labor Costs", desc: "Reduce workforce requirements with efficient equipment" },
    { icon: Shield, title: "Concrete Wastage", desc: "Minimize spillage and material loss during pouring" },
    { icon: Users, title: "Safety Concerns", desc: "Improve workplace safety with controlled pouring" },
    { icon: CheckCircle, title: "Inconsistent Pouring", desc: "Achieve uniform concrete distribution every time" },
    { icon: Wrench, title: "Equipment Reliability", desc: "Durable construction for long-lasting performance" },
  ]

  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Construction Challenges We Solve</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our tower crane concrete buckets address the most common issues faced in construction projects
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((item, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <item.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
