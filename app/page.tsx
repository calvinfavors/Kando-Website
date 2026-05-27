import type { Metadata } from "next"
import { VideoHero } from "@/components/video-hero"
import { WoodstockStory } from "@/components/woodstock-story"
import { AboutSection } from "@/components/about-section"
import { CommunityRoots } from "@/components/community-roots"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Kando Homes | Real Estate in Woodstock & Metro Atlanta, GA",
  description:
    "Discover Woodstock, Georgia with Jenn Kandt — a community-focused REALTOR® who knows these streets because she walks them. Buying, selling, and finding your place in Metro Atlanta since 2017.",
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
      <WoodstockStory />
      <AboutSection />
      <CommunityRoots />
      <ContactForm />
    </main>
  )
}
