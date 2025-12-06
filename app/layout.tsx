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
  title: {
    default: "Dr. Marc Lewis",
    template: "%s | Dr. Marc Lewis"
  },
  description: "Leader in Applied Sport Science, Performance, and Human Resilience",
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: {
      default: "Dr. Marc Lewis",
      template: "%s | Dr. Marc Lewis"
    },
    description: "Leader in Applied Sport Science, Performance, and Human Resilience",
    url: "https://drmarclewis.com",
    siteName: "Dr. Marc Lewis",
    images: [
      {
        url: "/images/all-images/marc-headshot-texans-main.jpeg",
        width: 1200,
        height: 630,
        alt: "Dr. Marc Lewis",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Marc Lewis",
    description: "Leader in Applied Sport Science, Performance, and Human Resilience",
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
