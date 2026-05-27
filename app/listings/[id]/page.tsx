import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, MapPin, Bed, Bath, Square, TreePine } from "lucide-react"
import { listings } from "@/lib/listings-data"

export async function generateStaticParams() {
  return listings.map((listing) => ({
    id: listing.id,
  }))
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const listing = listings.find((l) => l.id === params.id)

  if (!listing) {
    return {
      title: "Listing Not Found | Kando Homes",
    }
  }

  return {
    title: `${listing.address} | ${listing.city}, ${listing.state} | Kando Homes`,
    description: `${listing.description.substring(0, 160)}...`,
    alternates: {
      canonical: `https://kandohomes.com/listings/${listing.id}`,
    },
    openGraph: {
      title: `${listing.address} | Kando Homes`,
      description: listing.description.substring(0, 160),
      url: `https://kandohomes.com/listings/${listing.id}`,
      type: "website",
    },
  }
}

export const dynamicParams = false

export default function ListingGalleryPage({ params }: { params: { id: string } }) {
  const listing = listings.find((l) => l.id === params.id)

  if (!listing) {
    notFound()
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <Link
              href="/listings"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mb-6 sm:mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:-translate-x-1" />
              <span className="text-sm sm:text-base">Back to Listings</span>
            </Link>

            <div className="bg-card rounded-2xl shadow-xl border border-border p-6 sm:p-8 md:p-12">
              <div className="mb-8 sm:mb-12">
                <h1 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl md:text-5xl font-light text-foreground mb-3 sm:mb-4 text-balance">
                  {listing.address}
                </h1>
                <div className="flex items-center gap-2 text-muted-foreground mb-4 sm:mb-6">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <p className="text-base sm:text-lg">
                    {listing.city}, {listing.state} {listing.zip}
                  </p>
                </div>
                <p className="font-[family-name:var(--font-serif)] text-2xl sm:text-3xl md:text-4xl font-semibold text-accent mb-6 sm:mb-8">
                  {formatPrice(listing.price)}
                </p>

                <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-4 sm:gap-6 pb-6 sm:pb-8 border-b border-border">
                  <div className="flex items-center gap-2">
                    <Bed className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0" />
                    <span className="text-sm sm:text-base font-medium text-foreground">
                      {listing.beds} <span className="text-muted-foreground font-normal">beds</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0" />
                    <span className="text-sm sm:text-base font-medium text-foreground">
                      {listing.baths} <span className="text-muted-foreground font-normal">baths</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Square className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0" />
                    <span className="text-sm sm:text-base font-medium text-foreground">
                      {listing.sqft.toLocaleString()} <span className="text-muted-foreground font-normal">sq.ft.</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TreePine className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0" />
                    <span className="text-sm sm:text-base font-medium text-foreground">
                      {listing.lot} <span className="text-muted-foreground font-normal">lot</span>
                    </span>
                  </div>
                </div>
              </div>

              {listing.video && (
                <div className="mb-8 sm:mb-12">
                  <h2 className="font-[family-name:var(--font-serif)] text-2xl sm:text-3xl font-light text-foreground mb-4 sm:mb-6">
                    Property Tour
                  </h2>
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-muted">
                    <video
                      src={listing.video}
                      className="w-full h-full object-cover"
                      controls
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  </div>
                </div>
              )}

              {listing.images.length > 0 ? (
                <div className="mb-8 sm:mb-12">
                  <h2 className="font-[family-name:var(--font-serif)] text-2xl sm:text-3xl font-light text-foreground mb-4 sm:mb-6">
                    Photo Gallery
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {listing.images.map((image, index) => (
                      <div
                        key={index}
                        className="relative aspect-[4/3] rounded-xl overflow-hidden bg-muted group cursor-pointer"
                      >
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${listing.address} - Image ${index + 1}`}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="mb-8 sm:mb-12">
                  <div className="bg-accent/5 border-2 border-dashed border-accent/20 rounded-xl p-12 sm:p-16 md:p-24 text-center">
                    <div className="max-w-md mx-auto space-y-4">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-accent/10 rounded-full flex items-center justify-center">
                        <svg
                          className="w-8 h-8 sm:w-10 sm:h-10 text-accent/50"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <h2 className="font-[family-name:var(--font-serif)] text-2xl sm:text-3xl font-light text-foreground">
                        Photos Coming Soon
                      </h2>
                      <p className="text-sm sm:text-base text-muted-foreground">
                        We're preparing beautiful photos for this property. Contact Jenn for a personal showing.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="mb-8 sm:mb-12">
                <h2 className="font-[family-name:var(--font-serif)] text-2xl sm:text-3xl font-light text-foreground mb-4 sm:mb-6">
                  About This Property
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                  {listing.description}
                </p>
              </div>

              {listing.features.length > 0 && (
                <div className="mb-8 sm:mb-12">
                  <h2 className="font-[family-name:var(--font-serif)] text-2xl sm:text-3xl font-light text-foreground mb-4 sm:mb-6">
                    Key Features
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {listing.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm sm:text-base">
                        <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {listing.openHouse && (
                <div className="mb-8 sm:mb-12 p-6 sm:p-8 bg-accent/5 rounded-xl border border-accent/10">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <Calendar className="w-6 h-6 sm:w-7 sm:h-7 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground mb-2 text-base sm:text-lg">Open House</p>
                      <p className="text-sm sm:text-base text-muted-foreground">{listing.openHouse}</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a
                  href="tel:619-933-8609"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-all duration-300 font-medium text-sm sm:text-base"
                >
                  Call to Schedule Showing
                </a>
                <a
                  href={`mailto:jenn@localrealtyga.com?subject=Inquiry about ${listing.address}`}
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-background text-foreground border-2 border-accent rounded-lg hover:bg-accent/5 transition-all duration-300 font-medium text-sm sm:text-base"
                >
                  Email for More Info
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
