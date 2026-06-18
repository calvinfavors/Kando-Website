"use client"

import { Star } from "lucide-react"
import { useState } from "react"

const testimonials = [
  {
    name: "Kirstin G.",
    timeframe: "3 months ago",
    stars: 5,
    text: "Jenn was awesome to work with! She was so helpful, patient, and supportive through every step of our home-buying journey. She made a stressful process feel easy and enjoyable. We are so thankful for her guidance and would 100% recommend her to anyone looking for a trustworthy and hardworking real estate agent.",
  },
  {
    name: "Doug H.",
    timeframe: "3 months ago",
    stars: 5,
    text: "Jenn is fantastic! She did a great job of shepherding my elderly father through the listing and sale process. Her local knowledge was indispensable in helping us prepare the home for sale, listing it and getting it sold.",
  },
  {
    name: "Samantha R.",
    timeframe: "5 months ago",
    stars: 5,
    text: "Jenn is above and beyond, from start to finish of the home buying process. She is a fantastic advocate for her clients and is sure to make any concerns a priority.",
  },
  {
    name: "Jean",
    timeframe: "1 year ago",
    stars: 5,
    text: "Working with Jenn remotely, we have purchased three homes in GA as investments. Jenn was easy to work with, quickly responded to our questions, and managed everything seamlessly across multiple transactions.",
  },
  {
    name: "Kristen S.",
    timeframe: "10 months ago",
    stars: 5,
    text: "Jen made purchasing my home the easiest process. She took the time to understand what I was looking for and kept me apprised of every step of the process.",
  },
  {
    name: "Emily K.",
    timeframe: "1 year ago",
    stars: 5,
    text: "Jenn was a real estate super hero in helping us purchase our new home! Held our hand and patiently explained every step of the process as first time buyers. Very personable and professional in all aspects—agent turned friend for sure!",
  },
  {
    name: "Steve B.",
    timeframe: "1 year ago",
    stars: 5,
    text: "Jenn is more than a regular realtor—she is amazing! Jenn understood what I needed from our first coffee, found the perfect home I was looking for in Cartersville GA, and negotiated an advantageous purchase price.",
  },
  {
    name: "Daniel T.",
    timeframe: "10 months ago",
    stars: 5,
    text: "Jenn is the best realtor around! If you want an easy experience and expert insight to find the right home, definitely call Jenn.",
  },
]

export function TestimonialsSection() {
  const [visibleCount, setVisibleCount] = useState(3)

  const displayedTestimonials = testimonials.slice(0, visibleCount)

  return (
    <section className="py-20 md:py-28 lg:py-36 bg-beige/10 border-y border-olive/10">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <p className="text-olive uppercase tracking-[0.2em] text-sm font-medium mb-4">
            What Clients Say
          </p>
          <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl md:text-5xl font-light text-foreground mb-6 text-balance leading-tight">
            Real Stories from Real Families
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            From first-time homebuyers to seasoned investors, here&apos;s what it&apos;s like to work with Jenn.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {displayedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-8 flex flex-col hover:shadow-lg transition-shadow duration-300 animate-in fade-in-up"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.stars }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-foreground mb-6 flex-1 leading-relaxed text-sm md:text-base">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div>
                <p className="font-medium text-foreground">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.timeframe}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < testimonials.length && (
          <div className="flex justify-center">
            <button
              onClick={() => setVisibleCount(visibleCount + 3)}
              className="px-8 py-3 bg-olive text-white rounded-lg font-medium hover:bg-olive/90 transition-colors"
            >
              Read More Reviews
            </button>
          </div>
        )}

        {/* Stats Bar */}
        <div className="mt-16 pt-12 border-t border-olive/10 grid grid-cols-3 gap-6 max-w-2xl mx-auto text-center">
          <div>
            <p className="font-[family-name:var(--font-serif)] text-3xl md:text-4xl font-light text-olive mb-2">
              {testimonials.length}+
            </p>
            <p className="text-sm md:text-base text-muted-foreground">5-Star Reviews</p>
          </div>
          <div>
            <p className="font-[family-name:var(--font-serif)] text-3xl md:text-4xl font-light text-olive mb-2">
              100%
            </p>
            <p className="text-sm md:text-base text-muted-foreground">Recommended</p>
          </div>
          <div>
            <p className="font-[family-name:var(--font-serif)] text-3xl md:text-4xl font-light text-olive mb-2">
              7+
            </p>
            <p className="text-sm md:text-base text-muted-foreground">Years Local</p>
          </div>
        </div>
      </div>
    </section>
  )
}
