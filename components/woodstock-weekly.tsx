"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CalendarDays, Home, Sprout, Mountain, Users, CheckCircle2 } from "lucide-react"

const perks = [
  { icon: CalendarDays, label: "Local events & happenings" },
  { icon: Home, label: "Real estate market updates" },
  { icon: Sprout, label: "Homeownership & gardening tips" },
  { icon: Mountain, label: "Trail & hiking recommendations" },
  { icon: Users, label: "Community highlights" },
]

export function WoodstockWeekly() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email) return
    // UI only for now — wire up storage later.
    setSubmitted(true)
    setEmail("")
  }

  return (
    <section className="py-20 md:py-28 lg:py-36 bg-beige/20">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto rounded-2xl overflow-hidden bg-card border border-border shadow-xl">
          {/* Image */}
          <div className="relative h-64 lg:h-full min-h-[20rem]">
            <Image
              src="/images/newsletter-lifestyle.png"
              alt="A cozy morning with coffee, a notebook, and fresh flowers by a garden window"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Content */}
          <div className="p-8 md:p-10 lg:p-12">
            <p className="text-olive uppercase tracking-[0.2em] text-sm font-medium mb-4">Woodstock Weekly</p>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl md:text-4xl lg:text-5xl font-light text-foreground leading-tight mb-5 text-balance">
              A little slice of local life, every week.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 text-pretty">
              Join your neighbors for a weekly roundup of everything that makes life here good — the kind of email
              you&apos;ll actually look forward to opening.
            </p>

            <ul className="space-y-3 mb-8">
              {perks.map((perk) => (
                <li key={perk.label} className="flex items-center gap-3 text-foreground/80">
                  <span className="w-8 h-8 rounded-full bg-olive/10 flex items-center justify-center flex-shrink-0">
                    <perk.icon className="w-4 h-4 text-olive" />
                  </span>
                  <span className="text-sm md:text-base">{perk.label}</span>
                </li>
              ))}
            </ul>

            {submitted ? (
              <div className="flex items-center gap-3 rounded-lg bg-olive/10 p-4 text-olive">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <p className="text-sm md:text-base font-medium">
                  You&apos;re on the list! Look out for your first Woodstock Weekly soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <Input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="h-12 flex-1 bg-background border-border text-base"
                />
                <Button type="submit" size="lg" className="h-12 bg-olive hover:bg-olive/90 px-8 whitespace-nowrap">
                  Subscribe
                </Button>
              </form>
            )}
            <p className="text-xs text-muted-foreground mt-4">
              No spam, ever. Unsubscribe anytime with one click.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
