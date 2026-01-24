import Hero from "@/components/hero";
import Credentials from "@/components/credentials";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Services from "@/components/services";
import Media from "@/components/media";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Dr. Marc Lewis is Director of Applied Sport Science for the Houston Texans, specializing in human performance optimization, athlete monitoring systems, and NFL sport science. Expert consultant in applied sport science, strength and conditioning, and performance analytics.",
  keywords: [
    "sport science",
    "applied sport science",
    "human performance",
    "NFL performance",
    "Houston Texans",
    "athlete monitoring",
    "performance optimization",
    "sport science consulting",
    "strength and conditioning",
    "exercise physiology"
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Dr. Marc Lewis | Director of Applied Sport Science | Houston Texans",
    description: "Director of Applied Sport Science for the Houston Texans. Expert in human performance optimization, athlete monitoring, and NFL sport science.",
    url: "https://drmarclewis.com",
    images: [
      {
        url: "/images/all-images/marc-headshot-texans-main.jpeg",
        width: 1200,
        height: 630,
        alt: "Dr. Marc Lewis - Director of Applied Sport Science",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Marc Lewis | Director of Applied Sport Science",
    description: "Director of Applied Sport Science for the Houston Texans. Expert in human performance optimization and NFL sport science.",
  },
};

export default function Home() {
  return (
    <>
      <div className="flex flex-col ">
        <div className="flex flex-col items-center justify-center">
          <Hero />
          <Credentials />
          <Services />
          <Media />

          {/* CTA Section */}
          <section className="py-16">
            <div className="container px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Optimize Your Performance?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Schedule a consultation to discuss how Dr. Lewis can help you achieve your athletic goals
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="text-lg px-8">
                    <Link href="/contact">
                      Book Consultation
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>

                  <Button variant="outline" size="lg" className="text-lg px-8">
                    <Link href="/services">
                      Learn More
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
