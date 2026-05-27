import type { Metadata } from "next"
import Link from "next/link"
import { ChevronDown, Phone, Mail, Home } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Metro Atlanta Real Estate | Kando Homes",
  description:
    "Expert answers to your Metro Atlanta real estate questions. Learn about buying, selling, home loans, market trends, and working with Jenn Kandt at Kando Homes.",
  keywords:
    "Metro Atlanta real estate FAQ, buying home Georgia, selling house Atlanta, first-time homebuyer, real estate agent questions, Woodstock GA homes, Marietta real estate, home buying process",
  openGraph: {
    title: "Real Estate FAQ - Metro Atlanta Home Buying & Selling Guide",
    description:
      "Get expert answers to your real estate questions from Jenn Kandt. Learn about the Metro Atlanta housing market, home buying process, and more.",
    url: "https://kandohomes.com/faq",
    type: "website",
  },
}

interface FAQItem {
  question: string
  answer: string
  category: string
}

const faqs: FAQItem[] = [
  {
    category: "Buying a Home",
    question: "What's the first step when buying a home in Metro Atlanta?",
    answer:
      "The first step is getting pre-approved for a mortgage with a trusted lender like Daniel Taylor at Homeowners Financial Group. Pre-approval gives you a clear budget, shows sellers you're serious, and helps you move quickly in Metro Atlanta's competitive market. Once pre-approved, we'll discuss your must-haves, preferred neighborhoods (Woodstock, Marietta, Cartersville), and start touring homes that match your lifestyle and financial goals.",
  },
  {
    category: "Buying a Home",
    question: "How much should I save for a down payment in Georgia?",
    answer:
      "While many buyers aim for 20% to avoid PMI (private mortgage insurance), there are flexible options available. FHA loans require as little as 3.5% down, and VA loans offer zero down for eligible veterans. In Metro Atlanta, where median home prices range from $300K-$500K depending on location, your down payment could be anywhere from $10K to $100K. We'll connect you with our preferred lender to explore programs that fit your financial situation, including first-time homebuyer grants available in Georgia.",
  },
  {
    category: "Buying a Home",
    question: "What neighborhoods in Metro Atlanta are best for families?",
    answer:
      "Metro Atlanta offers incredible family-friendly communities. Woodstock is known for excellent schools, a vibrant downtown, and strong community feel. Marietta blends historic charm with modern amenities and top-rated schools. Cartersville offers more space and affordability while maintaining proximity to Atlanta. East Cobb and Roswell are also popular for families seeking walkable neighborhoods, parks, and award-winning schools. Each area has unique character—we'll help you find the perfect fit for your family's lifestyle and commute needs.",
  },
  {
    category: "Selling a Home",
    question: "How do I prepare my Metro Atlanta home to sell quickly?",
    answer:
      "First impressions matter. Start with curb appeal—fresh landscaping, a clean entrance, and neutral exterior colors attract buyers. Inside, declutter and depersonalize so buyers can envision themselves in the space. Minor updates like fresh paint (warm neutrals work best in Metro Atlanta), updated fixtures, and professional cleaning make a huge difference. We'll provide a personalized pre-listing consultation with staging recommendations. Professional photography and strategic marketing through MLS, social media, and our network ensure your home gets maximum exposure to qualified buyers.",
  },
  {
    category: "Selling a Home",
    question: "What's my Metro Atlanta home worth in today's market?",
    answer:
      "Home values in Metro Atlanta vary by neighborhood, condition, and market trends. As of 2025, we're seeing strong demand in established communities like Woodstock and Marietta, with homes typically selling within 30-45 days. Factors affecting your home's value include square footage, recent renovations, school district, lot size, and comparable sales in your area. I'll provide a comprehensive market analysis that reviews recent sales, active listings, and current buyer demand specific to your neighborhood—giving you a realistic price range to maximize your return while attracting serious buyers.",
  },
  {
    category: "Market & Timing",
    question: "Is now a good time to buy or sell in Metro Atlanta?",
    answer:
      "Metro Atlanta's real estate market in 2025 remains strong with steady demand driven by job growth, corporate relocations, and quality of life. Interest rates have stabilized, making it an opportune time for buyers who were waiting on the sidelines. For sellers, inventory remains relatively low in desirable neighborhoods, meaning well-priced homes sell quickly. The 'best time' depends on your personal situation—job change, growing family, downsizing, or investment goals. We'll analyze current market data specific to your needs and create a strategy that works for your timeline and financial objectives.",
  },
  {
    category: "Market & Timing",
    question: "How is the return-to-office trend affecting Metro Atlanta real estate?",
    answer:
      "The return-to-office movement is reshaping buyer priorities in Metro Atlanta. We're seeing increased demand for homes closer to major employment hubs like Midtown, Buckhead, and corporate corridors along I-75 and I-285. Buyers want shorter commutes but still value space and lifestyle amenities. This shift has created opportunities in areas like Marietta, Smyrna, and Vinings—offering the perfect balance of accessibility and suburban living. Conversely, homes with dedicated office spaces, strong internet infrastructure, and flexible layouts remain highly desirable for hybrid workers. Understanding these trends helps position your home strategically or find the right property for your work-life balance.",
  },
  {
    category: "Working with an Agent",
    question: "Why should I work with Jenn Kandt and Kando Homes?",
    answer:
      "Since 2017, I've helped Metro Atlanta clients make smart real estate decisions through deep market knowledge, honest guidance, and a relationship-first approach. I'm not just here for the transaction—I'm invested in your long-term financial future and lifestyle goals. As a State Director with Cherokee Association of REALTORS and 2024 YPN Chair, I stay ahead of market trends and have a trusted network of lenders, attorneys, and transaction coordinators who make your experience seamless. Whether you're a first-time buyer, seasoned investor, or ready to sell, I bring expertise, communication, and genuine care to every step of your real estate journey.",
  },
  {
    category: "Working with an Agent",
    question: "How does the home buying process work with Kando Homes?",
    answer:
      "We make buying a home stress-free and enjoyable. First, we'll discuss your goals, budget, and must-haves in a consultation. Next, I'll connect you with our trusted lender Daniel Taylor for pre-approval. Then, we start touring homes that match your criteria—I'll provide insights on neighborhoods, resale value, and potential issues. When you find 'the one,' I'll craft a competitive offer, negotiate terms, and guide you through inspections and appraisals. Our transaction coordinators Jessie and Erin handle all the details from contract to close, while Thomas & Brown Law ensures a smooth closing. You'll have support every step of the way, with clear communication and expert advice that puts your interests first.",
  },
  {
    category: "Financing & Legal",
    question: "Do I need a real estate attorney in Georgia?",
    answer:
      "Yes, Georgia is an attorney-closing state, which means you'll need a real estate attorney to handle the closing process, title work, and legal documentation. This protects both buyers and sellers by ensuring contracts are legally sound, title is clear, and funds are properly disbursed. We work exclusively with Thomas & Brown Law—they bring professionalism, clear communication, and problem-solving expertise to every transaction. They'll review your contract, explain closing documents, and handle any last-minute issues with confidence. Having a trusted attorney is essential, and we've already built that relationship for you.",
  },
  {
    category: "Financing & Legal",
    question: "What credit score do I need to buy a home in Georgia?",
    answer:
      "Credit score requirements vary by loan type. Conventional loans typically require a minimum score of 620, though 680+ gets you better rates. FHA loans are more flexible, accepting scores as low as 580 (or even 500 with a larger down payment). VA loans for veterans often approve scores around 580-620. If your credit needs improvement, our lender Daniel Taylor can provide guidance on boosting your score quickly—paying down credit cards, correcting errors, and avoiding new debt. Even if you're not ready today, we'll create a roadmap to get you mortgage-ready in 3-6 months.",
  },
  {
    category: "Investment & Growth",
    question: "Is Metro Atlanta a good market for real estate investment?",
    answer:
      "Absolutely. Metro Atlanta offers strong appreciation potential, rental demand, and economic growth driven by corporate headquarters, film production, and logistics hubs. Areas like Woodstock, Marietta, and Cartersville provide excellent rental income opportunities with growing populations and job markets. Investors are drawn to Georgia's landlord-friendly laws, reasonable property taxes, and diverse property types—single-family homes, townhomes, and multi-family units. Whether you're looking for long-term appreciation, short-term rentals, or buy-and-hold strategies, Metro Atlanta's fundamentals support smart investment decisions. I'll help you analyze cash flow, appreciation trends, and neighborhood growth to maximize your returns.",
  },
]

const categories = Array.from(new Set(faqs.map((faq) => faq.category)))

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Your Metro Atlanta Real Estate Questions, <span className="text-primary">Answered</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty max-w-3xl mx-auto">
              Expert guidance from Jenn Kandt on buying, selling, and investing in Metro Atlanta's dynamic real estate
              market. From first-time homebuyers to seasoned investors—we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-5xl">
          {categories.map((category, categoryIndex) => (
            <div key={category} className={categoryIndex > 0 ? "mt-16 md:mt-20" : ""}>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 md:mb-12 flex items-center gap-3">
                <span className="w-12 h-1 bg-primary rounded-full" />
                {category}
              </h2>

              <div className="space-y-6">
                {faqs
                  .filter((faq) => faq.category === category)
                  .map((faq, index) => (
                    <details
                      key={index}
                      className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-border/50"
                    >
                      <summary className="cursor-pointer list-none p-6 md:p-8 flex items-start justify-between gap-4 hover:bg-primary/5 transition-colors">
                        <h3 className="font-semibold text-lg md:text-xl text-foreground text-balance flex-1 pr-4">
                          {faq.question}
                        </h3>
                        <ChevronDown
                          size={24}
                          className="flex-shrink-0 text-primary transition-transform duration-300 group-open:rotate-180 mt-1"
                        />
                      </summary>
                      <div className="px-6 md:px-8 pb-6 md:pb-8 pt-2">
                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
                          {faq.answer}
                        </p>
                      </div>
                    </details>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <Home size={48} className="mx-auto mb-6 text-primary" />
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Still Have Questions?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-10 text-pretty max-w-2xl mx-auto leading-relaxed">
              Every real estate journey is unique. Let's discuss your specific situation, goals, and how we can help you
              make your next move with confidence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-semibold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <a href="tel:6199338609" className="flex items-center gap-2">
                  <Phone size={20} />
                  Call Jenn: (619) 933-8609
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold text-lg px-8 py-6 transition-all hover:scale-105 bg-transparent"
              >
                <a href="mailto:jenn@localrealtyga.com" className="flex items-center gap-2">
                  <Mail size={20} />
                  Email Jenn
                </a>
              </Button>
            </div>

            <div className="mt-10 pt-10 border-t border-border/50">
              <p className="text-sm text-muted-foreground mb-4">Explore More</p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/listings"
                  className="text-primary hover:text-primary/80 font-medium transition-colors underline underline-offset-4"
                >
                  View Current Listings
                </Link>
                <span className="text-border">•</span>
                <Link
                  href="/team"
                  className="text-primary hover:text-primary/80 font-medium transition-colors underline underline-offset-4"
                >
                  Meet Our Team
                </Link>
                <span className="text-border">•</span>
                <Link
                  href="/blog"
                  className="text-primary hover:text-primary/80 font-medium transition-colors underline underline-offset-4"
                >
                  Read Our Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
