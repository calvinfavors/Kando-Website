import type React from "react"
import type { Metadata, Viewport } from "next"
import { Cormorant_Garamond, Inter } from "next/font/google"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PoweredByBadge } from "@/components/powered-by-badge"
import "./globals.css"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://kandohomes.com"),
  title: {
    default: "Kando Homes | Buy, Sell, Invest - Jenn Kandt Real Estate",
    template: "%s | Kando Homes",
  },
  description:
    "Premium real estate services in Marietta, GA. Jenn Kandt helps clients navigate buying, selling, and investing with expert guidance and a relationship-first approach since 2017.",
  keywords: [
    "real estate",
    "Marietta GA",
    "Woodstock GA",
    "homes for sale",
    "buy home Georgia",
    "sell home Marietta",
    "investment properties",
    "Jenn Kandt",
    "REALTOR",
    "Cherokee County",
    "real estate agent",
    "property listings",
    "home buying",
    "home selling",
  ],
  authors: [{ name: "Jenn Kandt", url: "https://kandohomes.com" }],
  creator: "Kando Homes",
  publisher: "Kando Homes",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kandohomes.com",
    siteName: "Kando Homes",
    title: "Kando Homes | Buy, Sell, Invest - Jenn Kandt Real Estate",
    description:
      "Premium real estate services in Marietta, GA. Expert guidance for buying, selling, and investing in real estate.",
    images: [
      {
        url: "/images/image.png",
        width: 1200,
        height: 630,
        alt: "Kando Homes - Premium Real Estate Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kando Homes | Buy, Sell, Invest - Jenn Kandt Real Estate",
    description: "Premium real estate services in Marietta, GA. Expert guidance for buying, selling, and investing.",
    images: ["/images/image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f1ed" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a1a" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <head />
      <body className={`font-sans antialiased`}>
        <Navigation />
        {children}
        <Footer />
        <PoweredByBadge />
        <Analytics />
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              name: "Kando Homes",
              image: "https://kandohomes.com/images/jenn-kandt-profile.jpg",
              "@id": "https://kandohomes.com",
              url: "https://kandohomes.com",
              telephone: "+16199338609",
              email: "jenn@localrealtyga.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "3625 Dallas Hwy Ste 710",
                addressLocality: "Marietta",
                addressRegion: "GA",
                postalCode: "30064",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 33.9526,
                longitude: -84.5499,
              },
              areaServed: [
                { "@type": "City", name: "Marietta", "@id": "https://en.wikipedia.org/wiki/Marietta,_Georgia" },
                { "@type": "City", name: "Woodstock", "@id": "https://en.wikipedia.org/wiki/Woodstock,_Georgia" },
              ],
              priceRange: "$$",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                opens: "08:00",
                closes: "20:00",
              },
              sameAs: [],
              founder: {
                "@type": "Person",
                name: "Jenn Kandt",
                jobTitle: "Owner & REALTOR\u00AE",
                telephone: "+16199338609",
                email: "jenn@localrealtyga.com",
              },
            }),
          }}
        />
      </body>
    </html>
  )
}
