import { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Dr. Marc Lewis, Director of Applied Sport Science for the Houston Texans. PhD in exercise physiology from Virginia Tech, expert in athlete monitoring, human performance optimization, and NFL sport science. Former Associate Director at Penn State, certified CPSS, CSCS, and TSAC-F.",
  keywords: [
    "Dr. Marc Lewis",
    "sport science director",
    "Houston Texans",
    "exercise physiology PhD",
    "Virginia Tech",
    "Penn State",
    "athlete monitoring",
    "NFL sport science",
    "applied sport science",
    "human performance expert",
    "strength and conditioning",
    "CPSS certified",
    "CSCS certified",
    "sport science background",
    "performance science director"
  ],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: "About Dr. Marc Lewis | Sport Science Expert & NFL Performance Director",
    description: "Learn about Dr. Marc Lewis, Director of Applied Sport Science for the Houston Texans. PhD in exercise physiology, expert in athlete monitoring and human performance optimization.",
    url: "https://drmarclewis.com/about",
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
    title: "About Dr. Marc Lewis | Sport Science Expert",
    description: "Director of Applied Sport Science for the Houston Texans. PhD in exercise physiology, expert in athlete monitoring and performance optimization.",
  },
};

export default function About() {
  return (
    <Content />
  );
}