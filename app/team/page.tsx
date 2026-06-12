import type { Metadata } from "next"
import { Phone, Mail, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Meet The Team | Expert Real Estate Professionals",
  description:
    "Meet Jenn Kandt and her trusted network of real estate professionals including Daniel Taylor (mortgage professional), Jessie & Erin (transaction coordinators), and Thomas & Brown (closing attorneys).",
  alternates: {
    canonical: "https://kandohomes.com/team",
  },
  openGraph: {
    title: "Meet The Team | Kando Homes",
    description: "Meet our expert team of real estate professionals dedicated to your success.",
    url: "https://kandohomes.com/team",
    type: "website",
  },
}

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Jenn Kandt",
      title: "Owner & REALTOR®",
      credentials: ["Licensed since 2017", "State Director - CAOR", "2024 Chair of YPN"],
      image: "/images/jenn-kandt-profile.jpg",
      phone: "(619) 933-8609",
      email: "jenn@localrealtyga.com",
      license: "388593",
      bio: "Since 2017, Jenn has been navigating the real estate world with a passion for helping clients make smart moves—whether buying, selling, or investing. A California native who has called Woodstock, GA home since 2014, she blends her industry expertise with a relationship-first approach, making the process both seamless and fun. As a State Director with the Cherokee Association of REALTORS®(CAOR) and 2024 Chair of YPN, Jenn is deeply involved in shaping the future of real estate while staying connected to the community. When she's not guiding clients toward their financial future, you'll find her fostering dogs, hiking, or engaging with local businesses and events.",
    },
    {
      name: "Daniel Taylor",
      title: "Licensed Mortgage Professional",
      credentials: ["Combat Veteran", "Active USAF Reserve", "NMLS #2129152"],
      image: "/images/img-8336.jpeg",
      phone: "(678) 799-1335",
      email: "dtaylor@homeownersfg.com",
      company: "Homeowners Financial",
      applyUrl: "https://homeownersfg.com/danieltaylor/",
      bio: "When we think of a lender who truly shows up for our clients, we think of Daniel Taylor. A military veteran and exceptional communicator, Daniel is known for his relentless work ethic, creative loan strategies, and commitment to saving clients money. With a national reach, he supports buyers wherever life takes them—offering clarity, confidence, and outside-the-box solutions from start to finish. Around here, we choose partners who care as much as we do, and Daniel absolutely does.",
    },
    {
      name: "Jessie & Erin",
      title: "Transaction Coordinators",
      credentials: ["Right Hand Real Estate"],
      image: "/images/right-hand-logo.jpeg",
      website: "https://www.righthandreservices.com",
      bio: "Jessie and Erin are the contract-to-close guardian angels watching over every detail of our transactions. They oversee timelines, guide clients through each step, and jump ahead of potential issues before they ever surface. Working side by side with your Realtor, attorney, and lender, they bring exceptional organization and warm, clear communication to every file—making the entire process feel supported, seamless, and stress-free.",
      isCompany: true,
    },
    {
      name: "Thomas & Brown",
      title: "Closing Attorney",
      credentials: ["Attorneys at Law"],
      image: "/images/thomas-brown-logo.jpeg",
      website: "https://thomasandbrownlaw.com/",
      bio: "Thomas & Brown is our trusted partner for smooth, confident closings. Their team brings exceptional communication, professionalism, and a client-first approach to every transaction. Whether it's a simple signing or a curveball at the eleventh hour, they step in with clarity and solutions—helping our clients feel supported from contract to keys.",
      isCompany: true,
    },
  ]

  return (
    <main className="min-h-screen">
      <div className="pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 md:mb-20">
              <h1 className="font-[family-name:var(--font-serif)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-foreground mb-6 md:mb-8 text-balance">
                Meet The Team
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance">
                {"Expert professionals dedicated to making your real estate journey seamless and successful"}
              </p>
            </div>

            <div className="space-y-16 md:space-y-20 lg:space-y-24">
              {teamMembers.map((member, index) => (
                <div
                  key={member.name}
                  className={`grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-start ${
                    index % 2 === 1 ? "md:grid-flow-dense" : ""
                  }`}
                >
                  {/* Image */}
                  <div className={`${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                    <div
                      className={`relative ${member.isCompany ? "aspect-square bg-background/50 flex items-center justify-center rounded-lg overflow-hidden" : "aspect-[3/4] rounded-lg overflow-hidden shadow-xl"}`}
                    >
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className={member.isCompany ? "object-contain p-8 md:p-12" : "object-cover"}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center space-y-6 md:space-y-8">
                    <div>
                      <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-3">
                        {member.name}
                      </h2>
                      <p className="text-xl md:text-2xl text-primary font-medium mb-4">{member.title}</p>
                      <div className="flex flex-wrap gap-2">
                        {member.credentials.map((credential) => (
                          <span
                            key={credential}
                            className="inline-block px-4 py-2 bg-secondary/50 text-secondary-foreground text-sm md:text-base rounded-full"
                          >
                            {credential}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{member.bio}</p>

                    <div className="flex flex-wrap gap-4">
                      {member.phone && (
                        <Button asChild className="bg-primary hover:bg-primary/90 text-base h-12 md:h-14">
                          <a href={`tel:${member.phone}`}>
                            <Phone className="mr-2 h-5 w-5" />
                            {member.phone}
                          </a>
                        </Button>
                      )}
                      {member.email && (
                        <Button
                          asChild
                          variant="outline"
                          className="border-border hover:bg-secondary/50 bg-transparent text-base h-12 md:h-14"
                        >
                          <a href={`mailto:${member.email}`}>
                            <Mail className="mr-2 h-5 w-5" />
                            Email
                          </a>
                        </Button>
                      )}
                      {member.applyUrl && (
                        <Button
                          asChild
                          variant="outline"
                          className="border-border hover:bg-secondary/50 bg-transparent text-base h-12 md:h-14"
                        >
                          <a href={member.applyUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-5 w-5" />
                            Apply Now
                          </a>
                        </Button>
                      )}
                      {member.website && (
                        <Button asChild className="bg-primary hover:bg-primary/90 text-base h-12 md:h-14">
                          <a href={member.website} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-5 w-5" />
                            Visit Website
                          </a>
                        </Button>
                      )}
                    </div>

                    {member.license && (
                      <p className="text-xs md:text-sm text-muted-foreground">License #{member.license}</p>
                    )}
                    {member.company && <p className="text-xs md:text-sm text-muted-foreground">{member.company}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
