"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin, Home, DollarSign } from "lucide-react"

export function PropertySearch() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = () => {
    // Redirect to Zillow search
    const query = encodeURIComponent(searchQuery || "Marietta, GA")
    window.open(`https://www.zillow.com/homes/${query}_rb/`, "_blank")
  }

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 md:mb-16 opacity-0 animate-fade-in-up">
            <h2 className="font-[family-name:var(--font-serif)] text-4xl sm:text-5xl lg:text-6xl font-light text-foreground mb-4 md:mb-6 text-balance">
              Start Your Home Search
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Search thousands of properties in the Marietta and Woodstock area
            </p>
          </div>

          <div className="bg-card rounded-lg shadow-xl p-6 md:p-8 lg:p-12 border border-border opacity-0 animate-scale-in stagger-1">
            <div className="flex flex-col gap-4 md:gap-5">
              <div className="flex-1 relative">
                <MapPin
                  className="absolute left-4 md:left-5 top-1/2 -translate-y-1/2 text-muted-foreground"
                  size={22}
                />
                <Input
                  type="text"
                  placeholder="City, neighborhood, or ZIP"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  className="pl-12 md:pl-14 h-14 md:h-16 text-base md:text-lg bg-background border-border"
                />
              </div>
              <Button
                size="lg"
                onClick={handleSearch}
                className="h-14 md:h-16 px-8 md:px-10 bg-primary hover:bg-primary/90 transition-all hover:scale-105 w-full text-base md:text-lg"
              >
                <Search className="mr-2" size={22} />
                Search Properties
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-12 pt-8 md:pt-10 border-t border-border">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 text-primary mb-3 md:mb-4">
                  <Home size={24} className="md:w-7 md:h-7" />
                </div>
                <div className="font-[family-name:var(--font-serif)] text-3xl md:text-4xl font-semibold text-foreground mb-2">
                  500+
                </div>
                <div className="text-sm md:text-base text-muted-foreground">Active Listings</div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-accent/10 text-accent mb-3 md:mb-4">
                  <DollarSign size={24} className="md:w-7 md:h-7" />
                </div>
                <div className="font-[family-name:var(--font-serif)] text-3xl md:text-4xl font-semibold text-foreground mb-2">
                  $450K
                </div>
                <div className="text-sm md:text-base text-muted-foreground">Avg. Price</div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-secondary/20 text-foreground mb-3 md:mb-4">
                  <MapPin size={24} className="md:w-7 md:h-7" />
                </div>
                <div className="font-[family-name:var(--font-serif)] text-3xl md:text-4xl font-semibold text-foreground mb-2">
                  15+
                </div>
                <div className="text-sm md:text-base text-muted-foreground">Areas</div>
              </div>
            </div>
          </div>

          <p className="text-center text-sm md:text-base text-muted-foreground mt-6 md:mt-8">
            Powered by Zillow • Updated Daily
          </p>
        </div>
      </div>
    </section>
  )
}
