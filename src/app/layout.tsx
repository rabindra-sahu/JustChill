import type { Metadata } from "next";
import { Fraunces, Geist_Mono, Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ToastContextProvider } from "@/components/ui/toast";
import { WebGLProvider } from "@/components/providers/webgl-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/motion/scroll-progress";
import { BackToTop, WhatsAppFAB } from "@/components/motion/back-to-top";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans-custom",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "JustChill — India's Most Refreshing Drink Experience",
    template: "%s | JustChill",
  },
  description:
    "Traditional Goli Soda meets modern wellness. Discover India's most refreshing drink — real chia seeds, bold flavors, zero artificial preservatives.",
  keywords: [
    "Goli Soda",
    "Chia Seed Drink",
    "Indian Beverages",
    "JustChill",
    "Refreshing Drinks",
    "Natural Drinks",
    "Fizzy Drinks India",
    "Healthy Beverages",
    "Premium Drinks",
    "Soft Drinks India",
  ],
  authors: [{ name: "JustChill" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://justchill.in",
    siteName: "JustChill",
    title: "JustChill — India's Most Refreshing Drink Experience",
    description:
      "Traditional Goli Soda meets modern wellness. Real chia seeds, bold flavors, zero artificial preservatives.",
    images: [
      {
        url: "https://justchill.in/og.jpg",
        width: 1200,
        height: 630,
        alt: "JustChill",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JustChill — India's Most Refreshing Drink Experience",
    description:
      "Traditional Goli Soda meets modern wellness. Real chia seeds, bold flavors, zero artificial preservatives.",
    images: ["https://justchill.in/og.jpg"],
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
  alternates: {
    canonical: "https://justchill.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${fraunces.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen bg-background text-foreground antialiased"
        style={{ fontFamily: "var(--font-sans-custom), sans-serif" }}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <WebGLProvider>
            <ToastContextProvider>
              <ScrollProgress />
              <Navbar />
              <main className="relative">
                {children}
              </main>
              <Footer />
              <BackToTop />
              <WhatsAppFAB />
            </ToastContextProvider>
          </WebGLProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
