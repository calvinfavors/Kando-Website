"use client"

import type React from "react"
import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
  listingAddress?: string
  actionType?: "showing" | "info"
}

export function ContactModal({ isOpen, onClose, listingAddress, actionType }: ContactModalProps) {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      interest: actionType === "showing" ? "Schedule a Showing" : "Request Information",
      message: formData.get("message"),
      listingAddress: listingAddress || "General Inquiry",
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
      onClose()
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

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300"
      onClick={handleBackdropClick}
    >
      <div className="bg-card rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-300 border border-border">
        <div className="sticky top-0 bg-card border-b border-border p-4 sm:p-6 flex items-center justify-between z-10">
          <div>
            <h2 className="font-[family-name:var(--font-serif)] text-2xl sm:text-3xl font-light text-foreground">
              {actionType === "showing" ? "Schedule a Showing" : "Request Information"}
            </h2>
            {listingAddress && <p className="text-sm text-muted-foreground mt-1">{listingAddress}</p>}
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-2">
                <Label htmlFor="modal-firstName" className="text-sm sm:text-base text-foreground">
                  First Name *
                </Label>
                <Input
                  id="modal-firstName"
                  name="firstName"
                  required
                  className="h-11 sm:h-12 bg-background border-border"
                  placeholder="John"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="modal-lastName" className="text-sm sm:text-base text-foreground">
                  Last Name *
                </Label>
                <Input
                  id="modal-lastName"
                  name="lastName"
                  required
                  className="h-11 sm:h-12 bg-background border-border"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="modal-email" className="text-sm sm:text-base text-foreground">
                Email Address *
              </Label>
              <Input
                id="modal-email"
                name="email"
                type="email"
                required
                className="h-11 sm:h-12 bg-background border-border"
                placeholder="john@example.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="modal-phone" className="text-sm sm:text-base text-foreground">
                Phone Number *
              </Label>
              <Input
                id="modal-phone"
                name="phone"
                type="tel"
                required
                className="h-11 sm:h-12 bg-background border-border"
                placeholder="(123) 456-7890"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="modal-message" className="text-sm sm:text-base text-foreground">
                Message *
              </Label>
              <Textarea
                id="modal-message"
                name="message"
                required
                rows={5}
                className="bg-background border-border resize-none"
                placeholder={
                  actionType === "showing"
                    ? "Let me know your preferred dates and times for a showing..."
                    : "Tell me what you'd like to know about this property..."
                }
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1 h-11 sm:h-12 text-sm sm:text-base bg-transparent"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 h-11 sm:h-12 bg-accent hover:bg-accent/90 text-sm sm:text-base"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
