import { MapPin, Bed, Bath, Clock } from "lucide-react"
import type { Listing } from "@/lib/listings-data"

interface SoldListingCardProps {
  listing: Listing
  index: number
}

export function SoldListingCard({ listing, index }: SoldListingCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <article
      className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-md transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Sold Banner */}
      <div className="bg-[#1a1a2e] px-4 py-2 flex items-center justify-between">
        <span className="text-white text-xs font-semibold tracking-wider uppercase">Sold</span>
        {listing.mlsNumber && (
          <span className="text-white/60 text-xs">MLS# {listing.mlsNumber}</span>
        )}
      </div>

      <div className="p-4 sm:p-5">
        {/* Price */}
        <div className="flex items-center justify-between mb-3">
          <p className="font-[family-name:var(--font-serif)] text-xl sm:text-2xl font-semibold text-foreground">
            {listing.soldPrice ? formatPrice(listing.soldPrice) : "Price N/A"}
          </p>
          {listing.daysOnMarket && (
            <div className="flex items-center gap-1 text-muted-foreground">
              <Clock className="w-3.5 h-3.5" />
              <span className="text-xs">{listing.daysOnMarket} days</span>
            </div>
          )}
        </div>

        {/* Beds/Baths */}
        <div className="flex items-center gap-3 mb-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Bed className="w-3.5 h-3.5 text-accent" />
            <span>{listing.beds} Bd.</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="w-3.5 h-3.5 text-accent" />
            <span>
              {listing.fullBaths} Fb.{listing.halfBaths ? ` ${listing.halfBaths} Hb.` : ""}
            </span>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-start gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-foreground leading-tight">{listing.address}</p>
            <p className="text-xs text-muted-foreground">
              {listing.city}, {listing.state} {listing.zip}
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}
