import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground/95 text-background py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-16 mb-12 md:mb-16">
          {/* Brand Column */}
          <div className="space-y-5">
            <Image
              src="/images/chatgpt-20image-20dec-209-2c-202025-20at-2010-49-12-20am.png"
              alt="Kando Homes"
              width={180}
              height={65}
              className="h-12 md:h-14 w-auto brightness-0 invert"
            />
            <p className="text-background/70 text-sm md:text-base leading-relaxed">
              Your trusted partner in real estate. Making smart moves for buyers, sellers, and investors since 2017.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-background mb-4 md:mb-5 text-base md:text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-background/70 hover:text-background transition-colors text-sm md:text-base"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/listings"
                  className="text-background/70 hover:text-background transition-colors text-sm md:text-base"
                >
                  Current Listings
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-background/70 hover:text-background transition-colors text-sm md:text-base"
                >
                  Meet The Team
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-background/70 hover:text-background transition-colors text-sm md:text-base"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-background mb-4 md:mb-5 text-base md:text-lg">Services</h3>
            <ul className="space-y-3">
              <li className="text-background/70 text-sm md:text-base">Buying a Home</li>
              <li className="text-background/70 text-sm md:text-base">Selling a Home</li>
              <li className="text-background/70 text-sm md:text-base">Investment Properties</li>
              <li className="text-background/70 text-sm md:text-base">Market Analysis</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-background mb-4 md:mb-5 text-base md:text-lg">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-background/70 text-sm md:text-base">
                <Phone size={18} className="mt-0.5 flex-shrink-0" />
                <a href="tel:6199338609" className="hover:text-background transition-colors">
                  (619) 933-8609
                </a>
              </li>
              <li className="flex items-start gap-3 text-background/70 text-sm md:text-base">
                <Mail size={18} className="mt-0.5 flex-shrink-0" />
                <a href="mailto:jenn@localrealtyga.com" className="hover:text-background transition-colors break-all">
                  jenn@localrealtyga.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-background/70 text-sm md:text-base">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>
                  3625 Dallas Hwy Ste 710
                  <br />
                  Marietta, GA 30064
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 md:pt-10 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
            <p className="text-background/60 text-sm md:text-base text-center md:text-left">
              © {new Date().getFullYear()} Kando Homes. All rights reserved. | License #388593
            </p>
            <div className="flex gap-6 md:gap-8 text-sm md:text-base">
              <Link href="/privacy" className="text-background/60 hover:text-background transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-background/60 hover:text-background transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Built By Top Dawg Solutions */}
          <div className="mt-6 pt-6 border-t border-background/10 flex items-center justify-center gap-2.5">
            <span className="text-background/40 text-xs">Built by</span>
            <a
              href="https://www.topdawg.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-background/50 hover:text-background/80 transition-colors"
            >
              <Image
                src="/images/top-dawg-solutions-logo.png"
                alt="Top Dawg Solutions"
                width={20}
                height={20}
                className="w-5 h-5 object-contain"
              />
              <span className="text-xs font-medium">Top Dawg Solutions</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
