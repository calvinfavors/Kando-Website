import Link from "next/link"
import { Home, Tag, KeyRound, Truck, Tractor, ArrowRight } from "lucide-react"

const guides = [
  {
    icon: Home,
    title: "The Buyer's Guide",
    description: "From pre-approval to closing day — what to expect and how to make confident offers in today's market.",
    audience: "For Buyers",
  },
  {
    icon: Tag,
    title: "Selling With Confidence",
    description: "Pricing, prep, and timing your sale to get the most from your home without the stress.",
    audience: "For Sellers",
  },
  {
    icon: KeyRound,
    title: "First-Time Homeowner Basics",
    description: "Budgets, loan types, and the questions every first-time buyer should ask before signing.",
    audience: "First-Time Buyers",
  },
  {
    icon: Truck,
    title: "Relocating to North Georgia",
    description: "Neighborhoods, schools, commute times, and lifestyle tips for families moving to the area.",
    audience: "Relocating Families",
  },
  {
    icon: Tractor,
    title: "Buying Land & Acreage",
    description: "Wells, septic, zoning, and what to inspect when you're buying property with room to grow.",
    audience: "Acreage Buyers",
  },
]

export function RealEstateEducation() {
  return (
    <section id="resources" className="py-20 md:py-28 lg:py-36 bg-muted/30">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <p className="text-olive uppercase tracking-[0.2em] text-sm font-medium mb-6">Real Estate Education</p>
          <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight mb-8 text-balance">
            Know Before You Go
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto text-pretty">
            Real estate shouldn&apos;t feel like a mystery. These free guides break down the process step by step — so
            you can make decisions that feel right for your family and your future.
          </p>
        </div>

        {/* Guides grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {guides.map((guide) => (
            <Link
              key={guide.title}
              href="#contact"
              className="group flex flex-col bg-card border border-border rounded-lg p-7 hover:border-olive/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-olive/10 flex items-center justify-center mb-5 group-hover:bg-olive/20 transition-colors">
                <guide.icon className="w-6 h-6 text-olive" />
              </div>
              <span className="text-xs font-medium uppercase tracking-wider text-terracotta mb-2">
                {guide.audience}
              </span>
              <h3 className="font-[family-name:var(--font-serif)] text-xl md:text-2xl font-light text-foreground mb-3 leading-snug">
                {guide.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">{guide.description}</p>
              <span className="inline-flex items-center gap-2 text-olive font-medium text-sm group-hover:gap-3 transition-all">
                Request this guide
                <ArrowRight size={16} />
              </span>
            </Link>
          ))}

          {/* CTA card */}
          <div className="flex flex-col justify-center bg-olive text-primary-foreground rounded-lg p-7">
            <h3 className="font-[family-name:var(--font-serif)] text-2xl font-light mb-3 leading-snug">
              Have a question I haven&apos;t answered?
            </h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-5">
              Ask me anything — no obligation. I&apos;m happy to point you in the right direction.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 font-medium text-sm hover:gap-3 transition-all"
            >
              Ask Jenn
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
