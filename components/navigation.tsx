"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail } from "lucide-react"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Current Listings", href: "/listings" },
  { name: "Meet The Team", href: "/team" },
  { name: "Blog", href: "/blog" },
  { name: "FAQ", href: "/faq" }, // Added FAQ link to navigation
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-all duration-300 ${
        isScrolled ? "backdrop-blur-xl" : ""
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <Link href="/" className="flex-shrink-0 transition-transform hover:scale-105">
            <Image
              src="/images/logos-20-20trasparent-20background.png"
              alt="Kando Homes"
              width={280}
              height={100}
              className="h-12 w-auto lg:h-16 object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm lg:text-base font-semibold text-foreground hover:text-primary transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

            <div className="flex items-center gap-3">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white bg-transparent font-semibold transition-all hover:scale-105 shadow-sm"
              >
                <a href="tel:6199338609" className="flex items-center gap-2">
                  <Phone size={18} />
                  <span className="hidden lg:inline">Call Jenn</span>
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-semibold transition-all hover:scale-105 shadow-md hover:shadow-lg"
              >
                <a href="mailto:jenn@localrealtyga.com" className="flex items-center gap-2">
                  <Mail size={18} />
                  Email Jenn
                </a>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-border animate-fade-in-up shadow-2xl">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-lg font-semibold text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-border">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold bg-transparent"
              >
                <a href="tel:6199338609" className="flex items-center justify-center gap-2">
                  <Phone size={18} />
                  Call Jenn
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold shadow-md"
              >
                <a href="mailto:jenn@localrealtyga.com" className="flex items-center justify-center gap-2">
                  <Mail size={18} />
                  Email Jenn
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
