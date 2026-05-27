"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      interest: formData.get("interest"),
      message: formData.get("message"),
      submittedAt: new Date().toISOString(),
    }

    try {
      const response = await fetch("https://hook.us2.make.com/khifthhqna2mibtd3gi82hespnx6lofo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Failed to submit form")
      }

      toast({
        title: "Message sent!",
        description: "Jenn will get back to you within 24 hours.",
      })
      ;(e.target as HTMLFormElement).reset()
    } catch (error) {
      console.error("Form submission error:", error)
      toast({
        title: "Error sending message",
        description: "Please try again or contact Jenn directly at jenn@localrealtyga.com",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background" id="contact">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 md:mb-16 opacity-0 animate-fade-in-up">
            <p className="text-olive uppercase tracking-[0.2em] text-sm font-medium mb-6">
              Start the Conversation
            </p>
            <h2 className="font-[family-name:var(--font-serif)] text-4xl sm:text-5xl lg:text-6xl font-light text-foreground mb-4 md:mb-6 text-balance">
              {"Let's Grab Coffee"}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Whether you&apos;re just starting to dream or ready to make a move, I&apos;d love to hear your story. No pressure, no pitch — just a real conversation about what home means to you.
            </p>
          </div>

          <div className="bg-card rounded-lg shadow-xl p-6 md:p-10 lg:p-14 border border-border opacity-0 animate-scale-in stagger-1">
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-base text-foreground">
                    First Name *
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    required
                    className="h-12 md:h-14 bg-background border-border text-base"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-base text-foreground">
                    Last Name *
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    required
                    className="h-12 md:h-14 bg-background border-border text-base"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-base text-foreground">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="h-12 md:h-14 bg-background border-border text-base"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-base text-foreground">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="h-12 md:h-14 bg-background border-border text-base"
                  placeholder="(123) 456-7890"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="interest" className="text-base text-foreground">
                  {"I'm interested in *"}
                </Label>
                <select
                  id="interest"
                  name="interest"
                  required
                  className="w-full h-12 md:h-14 px-4 rounded-md border border-border bg-background text-foreground text-base"
                >
                  <option value="">Select an option</option>
                  <option value="buying">Buying a Home</option>
                  <option value="selling">Selling a Home</option>
                  <option value="investing">Investment Properties</option>
                  <option value="consultation">General Consultation</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-base text-foreground">
                  What&apos;s on your mind? *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="bg-background border-border resize-none text-base"
                  placeholder="Tell me about your situation — are you thinking about buying, selling, or just exploring options? What does home mean to you?"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full h-14 md:h-16 bg-primary hover:bg-primary/90 text-lg md:text-xl transition-all hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>

              <p className="text-sm md:text-base text-muted-foreground text-center">
                By submitting this form, you agree to be contacted by Kando Homes regarding your inquiry.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
