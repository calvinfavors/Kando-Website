import type { Metadata } from "next"
import { VideoHero } from "@/components/video-hero"
import { TestimonialsSection } from "@/components/testimonials-section"
import { WoodstockStory } from "@/components/woodstock-story"
import { AboutSection } from "@/components/about-section"
import { NorthGeorgiaLiving } from "@/components/north-georgia-living"
import { RealEstateEducation } from "@/components/real-estate-education"
import { CommunityRoots } from "@/components/community-roots"
import { WoodstockWeekly } from "@/components/woodstock-weekly"
import { CtaBanner } from "@/components/cta-banner"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Kando Homes | Lifestyle Real Estate in Woodstock & North Georgia",
  description:
    "Jenn Kandt helps people find homes that fit the life they want to live in Woodstock, Cherokee County, and North Georgia. Community, lifestyle, acreage, and trusted local expertise since 2017.",
  alternates: {
    canonical: "https://kandohomes.com",
  },
  openGraph: {
    title: "Kando Homes | Real Estate in Woodstock & Metro Atlanta, GA",
    description: "Where small-town charm meets big dreams. Find your home in Woodstock, GA.",
    url: "https://kandohomes.com",
    type: "website",
  },
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <VideoHero />
      <AboutSection />
      <WoodstockStory />
      <NorthGeorgiaLiving />
      <RealEstateEducation />
      <TestimonialsSection />
      <CommunityRoots />
      <WoodstockWeekly />
      <CtaBanner />
      <ContactForm />
    </main>
  )
}
