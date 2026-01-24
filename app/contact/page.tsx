import { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Dr. Marc Lewis, Director of Applied Sport Science for the Houston Texans, for consulting services, speaking engagements, workshops, or collaboration opportunities in sport science and human performance optimization.",
  keywords: [
    "contact Dr. Marc Lewis",
    "sport science consulting contact",
    "performance consulting inquiry",
    "speaking engagement request",
    "sport science workshop booking",
    "NFL sport science consulting",
    "athlete monitoring consulting",
    "performance optimization services",
    "collaboration opportunities",
    "sport science expert contact"
  ],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: "Contact Dr. Marc Lewis | Sport Science Consulting & Speaking",
    description: "Get in touch with Dr. Marc Lewis for consulting services, speaking engagements, workshops, or collaboration opportunities in sport science.",
    url: "https://drmarclewis.com/contact",
    images: [
      {
        url: "/images/all-images/marc-headshot-texans-main.jpeg",
        width: 1200,
        height: 630,
        alt: "Contact Dr. Marc Lewis",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Dr. Marc Lewis",
    description: "Get in touch for consulting, speaking engagements, or collaboration opportunities in sport science.",
  },
};

export default function Contact() {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Get In Touch
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Interested in consulting, speaking engagements, or collaboration opportunities? 
            Fill out the form below and I'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="w-full pb-16 md:pb-24">
        <div className="container px-4 mx-auto">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}