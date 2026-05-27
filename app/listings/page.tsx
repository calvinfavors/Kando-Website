import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Current Listings | Jenn Kandt | Kando Homes",
  description:
    "Browse active and recently sold listings by Jenn Kandt at LOCAL Realty. Serving Cartersville, Woodstock, Canton, Kennesaw, and all of Metro Atlanta, GA.",
  alternates: {
    canonical: "https://kandohomes.com/listings",
  },
  openGraph: {
    title: "Current Listings | Jenn Kandt | Kando Homes",
    description: "Browse active and recently sold listings in Metro Atlanta, GA.",
    url: "https://kandohomes.com/listings",
    type: "website",
  },
}

export default function ListingsPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="pt-20 sm:pt-24">
        <iframe
          src="https://www.georgiamls.com/real-estate-agents/KANDTJENN"
          title="Jenn Kandt - Georgia MLS Listings"
          className="w-full border-0"
          style={{ height: "calc(100vh - 5rem)" }}
          allow="fullscreen"
        />
      </div>
    </main>
  )
}
