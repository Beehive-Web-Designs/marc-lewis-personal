import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://drmarclewis.com'),
  title: {
    default: "Dr. Marc Lewis | Director of Applied Sport Science | Houston Texans",
    template: "%s | Dr. Marc Lewis"
  },
  description: "Dr. Marc Lewis is Director of Applied Sport Science for the Houston Texans, specializing in human performance optimization, athlete monitoring, and NFL sport science. Expert in applied sport science, strength and conditioning, and performance analytics with a PhD in exercise physiology.",
  keywords: [
    "sport science",
    "applied sport science",
    "human performance",
    "athlete monitoring",
    "NFL performance",
    "Houston Texans",
    "strength and conditioning",
    "performance optimization",
    "exercise physiology",
    "sports performance",
    "athlete monitoring systems",
    "NFL sport science",
    "performance analytics",
    "sport science consulting",
    "high performance training",
    "athlete recovery",
    "training load monitoring",
    "GPS metrics",
    "sport science expert",
    "performance director"
  ],
  authors: [{ name: "Dr. Marc Lewis" }],
  creator: "Dr. Marc Lewis",
  publisher: "Dr. Marc Lewis",
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: {
      default: "Dr. Marc Lewis | Director of Applied Sport Science | Houston Texans",
      template: "%s | Dr. Marc Lewis"
    },
    description: "Dr. Marc Lewis is Director of Applied Sport Science for the Houston Texans, specializing in human performance optimization, athlete monitoring, and NFL sport science.",
    url: "https://drmarclewis.com",
    siteName: "Dr. Marc Lewis",
    images: [
      {
        url: "/images/all-images/marc-headshot-texans-main.jpeg",
        width: 1200,
        height: 630,
        alt: "Dr. Marc Lewis - Director of Applied Sport Science for the Houston Texans",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Marc Lewis | Director of Applied Sport Science | Houston Texans",
    description: "Director of Applied Sport Science for the Houston Texans. Expert in human performance optimization, athlete monitoring, and NFL sport science.",
    images: ["/images/all-images/marc-headshot-texans-main.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen w-full max-w-7xl mx-auto px-4 md:px-0">
            <NavBar />
            <main className="flex-1">
              {children}
            </main>
            <Toaster />
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
