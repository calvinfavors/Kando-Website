"use client"

import type React from "react"
import { useState, useRef, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, Bed, Bath, Square, TreePine, ChevronLeft, ChevronRight, X, Camera } from "lucide-react"
import { ContactModal } from "./contact-modal"

interface Listing {
  id: string
  address: string
  city: string
  state: string
  zip: string
  price?: number // Made optional
  beds: number
  baths: number
  sqft: number
  lot: string
  description: string
  openHouse?: string
  features: string[]
  images: string[]
  video?: string
  hoa?: number
  yearBuilt?: number
  status: "active" | "sold" | "pending" | "inactive"
  mlsNumber?: string
  soldPrice?: number
  daysOnMarket?: number
  fullBaths?: number
  halfBaths?: number
}

interface ListingCardProps {
  listing: Listing
  index: number
}

export function ListingCard({ listing, index }: ListingCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalAction, setModalAction] = useState<"showing" | "info">("showing")
  const videoRef = useRef<HTMLVideoElement>(null)

  const isActive = listing.status === "active"

  useEffect(() => {
    if (videoRef.current && listing.video) {
      videoRef.current.play().catch(() => {})
    }
  }, [listing.video])

  useEffect(() => {
    if (!isLightboxOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsLightboxOpen(false)
      if (e.key === "ArrowRight") setCurrentImageIndex((prev) => (prev + 1) % listing.images.length)
      if (e.key === "ArrowLeft")
        setCurrentImageIndex((prev) => (prev - 1 + listing.images.length) % listing.images.length)
    }

    document.addEventListener("keydown", handleKeyDown)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [isLightboxOpen, listing.images.length])

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price)
  }

  const nextImage = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      e.stopPropagation()
      setCurrentImageIndex((prev) => (prev + 1) % listing.images.length)
    },
    [listing.images.length],
  )

  const prevImage = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      e.stopPropagation()
      setCurrentImageIndex((prev) => (prev - 1 + listing.images.length) % listing.images.length)
    },
    [listing.images.length],
  )

  const openLightbox = useCallback((e: React.MouseEvent, imageIndex?: number) => {
    e.preventDefault()
    e.stopPropagation()
    if (imageIndex !== undefined) setCurrentImageIndex(imageIndex)
    setIsLightboxOpen(true)
  }, [])

  const handleScheduleShowing = () => {
    setModalAction("showing")
    setIsModalOpen(true)
  }

  const handleRequestInfo = () => {
    setModalAction("info")
    setIsModalOpen(true)
  }

  return (
    <>
      <article
        className={`group bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-500 animate-in fade-in slide-in-from-bottom-4 flex flex-col h-full ${
          !isActive ? "opacity-60 grayscale" : ""
        }`}
        style={{ animationDelay: `${index * 100}ms` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="relative h-56 sm:h-64 md:h-72 lg:h-80 bg-muted overflow-hidden cursor-pointer"
          onClick={(e) => (listing.images.length > 0 ? openLightbox(e) : undefined)}
        >
          {/* ... existing code for video/images ... */}
          {listing.video ? (
            <video
              ref={videoRef}
              src={listing.video}
              className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${isHovered ? "scale-105" : "scale-100"}`}
              autoPlay
              muted
              loop
              playsInline
            />
          ) : listing.images.length > 0 ? (
            <>
              <Image
                src={listing.images[currentImageIndex] || "/placeholder.svg"}
                alt={`${listing.address} - Image ${currentImageIndex + 1}`}
                fill
                className={`object-cover transition-transform duration-700 ${isHovered ? "scale-105" : "scale-100"}`}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={index < 2}
              />

              {listing.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 bg-white/90 hover:bg-white shadow-lg rounded-full flex items-center justify-center text-foreground transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 bg-white/90 hover:bg-white shadow-lg rounded-full flex items-center justify-center text-foreground transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                    {listing.images.map((_, i) => (
                      <button
                        key={i}
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          setCurrentImageIndex(i)
                        }}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          i === currentImageIndex ? "bg-white w-6" : "bg-white/60 hover:bg-white/80"
                        }`}
                        aria-label={`View image ${i + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}

              <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white px-2.5 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 z-10">
                <Camera className="w-3.5 h-3.5" />
                {listing.images.length}
              </div>
            </>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-muted flex items-center justify-center">
              <div className="text-center space-y-2 px-4">
                <div className="w-14 h-14 mx-auto bg-accent/10 rounded-full flex items-center justify-center">
                  <Camera className="w-7 h-7 text-accent/50" />
                </div>
                <p className="text-sm text-muted-foreground">Photos Coming Soon</p>
              </div>
            </div>
          )}

          {isActive && listing.price ? (
            <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
              <p className="font-[family-name:var(--font-serif)] text-lg sm:text-xl font-semibold text-accent">
                {formatPrice(listing.price)}
              </p>
            </div>
          ) : (
            <div className="absolute top-3 left-3 bg-gray-500/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
              <p className="font-[family-name:var(--font-serif)] text-lg sm:text-xl font-semibold text-white">
                Inactive
              </p>
            </div>
          )}

          {isActive && listing.openHouse && (
            <div className="absolute top-3 right-3 bg-accent text-accent-foreground px-2.5 py-1 rounded-full shadow-lg text-xs font-medium flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              Open House
            </div>
          )}
        </div>

        <div className="p-5 sm:p-6 flex-1 flex flex-col">
          <Link href={`/listings/${listing.id}`} className="block mb-3 group/link">
            <h2 className="font-[family-name:var(--font-serif)] text-xl sm:text-2xl font-light text-foreground mb-1 group-hover/link:text-accent transition-colors duration-300 leading-tight">
              {listing.address}
            </h2>
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <p className="text-sm">
                {listing.city}, {listing.state} {listing.zip}
              </p>
            </div>
          </Link>

          <div className="flex flex-wrap gap-x-4 gap-y-2 mb-4 pb-4 border-b border-border">
            <div className="flex items-center gap-1.5">
              <Bed className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">{listing.beds} beds</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Bath className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">{listing.baths} baths</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Square className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">{listing.sqft.toLocaleString()} sqft</span>
            </div>
            <div className="flex items-center gap-1.5">
              <TreePine className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">{listing.lot}</span>
            </div>
          </div>

          {isActive && listing.openHouse && (
            <div className="mb-4 p-3 bg-accent/5 rounded-lg border border-accent/10">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-accent flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm text-foreground">Open House</p>
                  <p className="text-xs text-muted-foreground">{listing.openHouse}</p>
                </div>
              </div>
            </div>
          )}

          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4 flex-1">
            {listing.description}
          </p>

          {listing.features.length > 0 && (
            <div className="mb-4">
              <div className="flex flex-wrap gap-1.5">
                {listing.features.slice(0, 4).map((feature, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded-full border border-border"
                  >
                    {feature}
                  </span>
                ))}
                {listing.features.length > 4 && (
                  <span className="px-2 py-0.5 bg-accent/10 text-accent text-xs rounded-full">
                    +{listing.features.length - 4} more
                  </span>
                )}
              </div>
            </div>
          )}

          {isActive ? (
            <div className="flex gap-2 mt-auto">
              <button
                onClick={handleScheduleShowing}
                className="flex-1 px-4 py-2.5 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-all duration-300 font-medium text-sm"
              >
                Schedule Showing
              </button>
              <button
                onClick={handleRequestInfo}
                className="flex-1 px-4 py-2.5 bg-background text-foreground border-2 border-accent rounded-lg hover:bg-accent/5 transition-all duration-300 font-medium text-sm"
              >
                Request Info
              </button>
            </div>
          ) : (
            <div className="mt-auto">
              <div className="px-4 py-2.5 bg-gray-200 text-gray-500 rounded-lg text-center font-medium text-sm">
                This listing is no longer active
              </div>
            </div>
          )}
        </div>
      </article>

      {/* ... existing code for lightbox and modal ... */}
      {isLightboxOpen && listing.images.length > 0 && (
        <div
          className="fixed inset-0 z-50 bg-black flex items-center justify-center animate-in fade-in duration-200"
          onClick={() => setIsLightboxOpen(false)}
        >
          <button
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-20"
            onClick={() => setIsLightboxOpen(false)}
            aria-label="Close gallery"
          >
            <X className="w-6 h-6" />
          </button>

          {listing.images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setCurrentImageIndex((prev) => (prev - 1 + listing.images.length) % listing.images.length)
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-20"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-7 h-7" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setCurrentImageIndex((prev) => (prev + 1) % listing.images.length)
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-20"
                aria-label="Next image"
              >
                <ChevronRight className="w-7 h-7" />
              </button>
            </>
          )}

          <div
            className="relative w-full h-full flex items-center justify-center p-4 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={listing.images[currentImageIndex] || "/placeholder.svg"}
              alt={`${listing.address} - Image ${currentImageIndex + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20">
            <div className="bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
              {currentImageIndex + 1} of {listing.images.length} — {listing.address}
            </div>

            <div className="flex gap-2 max-w-[90vw] overflow-x-auto pb-2 px-2">
              {listing.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImageIndex(i)}
                  className={`relative w-16 h-12 rounded-lg overflow-hidden flex-shrink-0 transition-all duration-200 ${
                    i === currentImageIndex ? "ring-2 ring-white scale-105" : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img || "/placeholder.svg"}
                    alt={`Thumbnail ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        listingAddress={listing.address}
        actionType={modalAction}
      />
    </>
  )
}
