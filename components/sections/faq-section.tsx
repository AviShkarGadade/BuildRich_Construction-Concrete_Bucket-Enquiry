import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQSection() {
  const faqs = [
    {
      question: "How does this pouring mechanism save costs?",
      answer:
        "Our concrete buckets reduce material wastage by up to 50%, lower labor requirements, and speed up construction timelines, resulting in significant cost savings.",
    },
    {
      question: "Where can I buy a concrete pouring bucket?",
      answer:
        "You can purchase our concrete buckets directly from BuildRich. Contact us via WhatsApp at +91-9923073303 for immediate assistance and quotes.",
    },
    {
      question: "What sizes are available?",
      answer:
        "We offer multiple capacity options to suit different project requirements. Contact our team to discuss the best size for your specific needs.",
    },
    {
      question: "Is installation support provided?",
      answer:
        "Yes, we provide comprehensive installation support and training to ensure optimal performance of your concrete bucket equipment.",
    },
  ]

  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-lg">Get answers to common questions about our concrete buckets</p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
