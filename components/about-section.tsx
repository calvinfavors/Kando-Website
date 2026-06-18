import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Dumbbell, Flower2, Dog, Mountain } from "lucide-react"
import Link from "next/link"

const passions = [
  { icon: Dumbbell, label: "Fitness & wellness" },
  { icon: Flower2, label: "Gardening" },
  { icon: Dog, label: "Fostering rescue dogs" },
  { icon: Mountain, label: "Hiking the trails" },
]

export function AboutSection() {
  return (
    <section id="jenn-story" className="py-20 md:py-28 lg:py-36 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Opening quote */}
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24 opacity-0 animate-fade-in-up">
          <p className="text-olive uppercase tracking-[0.2em] text-sm font-medium mb-6">
            Your Guide
          </p>
          <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight mb-8 text-balance italic">
            &ldquo;I didn&apos;t plan to become a realtor. I planned to find a place that felt like home.&rdquo;
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          {/* Image Column */}
          <div className="relative opacity-0 animate-slide-in-left">
            <div className="relative aspect-[3/4] rounded-sm overflow-hidden shadow-2xl">
              <Image
                src="/images/jenn-kandt-profile.jpg"
                alt="Jenn Kandt - Real Estate Professional"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-beige/30 rounded-sm -z-10" />
          </div>

          {/* Content Column */}
          <div className="space-y-6 md:space-y-8 opacity-0 animate-fade-in-up stagger-2">
            <h3 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl lg:text-5xl font-light text-foreground text-balance leading-tight">
              Meet Jenn Kandt
            </h3>

            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              I grew up in California, but the moment I drove through Woodstock in 2014, something clicked. The tree-lined streets, the sense of community, the way people actually stopped to chat — it felt like the place I&apos;d been searching for without knowing it.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              When I&apos;m not helping clients, you&apos;ll find me chasing a sunrise workout, digging in my garden, lacing up for a trail hike, or making room on the couch for the next foster dog. Those are the things that make a house feel like home — and they shape how I help families find theirs.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I blend my love for this community with a relationship-first approach to real estate. I&apos;m not here to sell you a house. I&apos;m here to help you find your place in a community that will embrace you the way it embraced me.
            </p>

            {/* Passions */}
            <div className="flex flex-wrap gap-3 pt-2">
              {passions.map((passion) => (
                <span
                  key={passion.label}
                  className="inline-flex items-center gap-2 rounded-full bg-olive/10 px-4 py-2 text-sm font-medium text-olive"
                >
                  <passion.icon size={16} />
                  {passion.label}
                </span>
              ))}
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-6 pt-4">
              <a 
                href="tel:6199338609" 
                className="flex items-center gap-3 text-foreground/80 hover:text-olive transition-colors text-lg"
              >
                <Phone size={20} className="text-olive" />
                (619) 933-8609
              </a>
              <a 
                href="mailto:jenn@localrealtyga.com" 
                className="flex items-center gap-3 text-foreground/80 hover:text-olive transition-colors text-lg"
              >
                <Mail size={20} className="text-olive" />
                jenn@localrealtyga.com
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="bg-olive hover:bg-olive/90 transition-all hover:scale-105 text-base md:text-lg h-12 md:h-14"
              >
                <Link href="#contact">Let&apos;s Talk</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-olive text-olive hover:bg-olive/5 transition-all hover:scale-105 bg-transparent text-base md:text-lg h-12 md:h-14"
              >
                <Link href="/listings">View Listings</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
