import ServicesTabs from "@/components/services/services-tabs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore Dr. Marc Lewis's consulting, coaching, and workshop services in applied sport science, athlete monitoring, performance optimization, and NFL sport science. Expert guidance for teams, organizations, and athletes seeking evidence-based performance solutions.",
  keywords: [
    "sport science consulting",
    "performance consulting",
    "athlete monitoring consulting",
    "sport science workshops",
    "performance optimization services",
    "NFL sport science consulting",
    "strength and conditioning consulting",
    "sport science coaching",
    "human performance consulting",
    "athlete monitoring systems",
    "performance analytics consulting",
    "sport science training",
    "team performance consulting",
    "evidence-based performance"
  ],
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: "Services | Sport Science Consulting & Performance Optimization",
    description: "Expert consulting, coaching, and workshop services in applied sport science, athlete monitoring, and performance optimization from Dr. Marc Lewis.",
    url: "https://drmarclewis.com/services",
    images: [
      {
        url: "/images/all-images/marc-headshot-texans-main.jpeg",
        width: 1200,
        height: 630,
        alt: "Dr. Marc Lewis - Sport Science Consulting Services",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Sport Science Consulting",
    description: "Expert consulting, coaching, and workshop services in applied sport science and performance optimization.",
  },
};

export default function Services() {
  return <ServicesTabs />;
}
