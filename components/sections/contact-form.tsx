"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, MessageCircle, Instagram, Facebook } from "lucide-react"
import Link from "next/link"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const whatsappMessage = `Hello BuildRich! 

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Message: ${formData.message}

I'm interested in your Tower Crane Concrete Buckets. Please provide more information.`

    const whatsappUrl = `https://wa.me/919923073303?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Get a Free Quote</h2>
          <p className="text-muted-foreground text-lg">
            Ready to improve your construction efficiency? Contact us today!
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="p-8">
            <CardContent className="p-0">
              <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your email address"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                    className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Tell us about your project requirements"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                  Send to WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-medium">Phone / WhatsApp</p>
                    <p className="text-muted-foreground">+91-9923073303</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">info@buildrich.in</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-muted-foreground">Sr. No. 31/5/1, Besides Akemi Business School, Marunji Rd, (Marunji), Wakad Pune - 411057</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect with us</h4>
              <div className="flex space-x-4">
                <Button size="lg" asChild className="bg-green-600 hover:bg-green-700">
                  <Link href="https://wa.me/919923073303">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="https://www.facebook.com/buildrich.in">
                    <Facebook className="w-5 h-5 mr-2" />
                    Facebook
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="https://www.instagram.com/buildrich.in/">
                    <Instagram className="w-5 h-5 mr-2" />
                    Instagram
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
