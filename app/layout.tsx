import type { Metadata } from "next";
import { ThemeProvider } from "./components/ThemeProvider";
import StructuredData from "./components/StructuredData";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://malikarshid01430-byte.github.io"),
  title: {
    default: "Arshid Ahmad Malik | Electronics & Communication Engineer | Embedded Systems & Edge AI",
    template: "%s | Arshid Ahmad Malik"
  },
  description: "Engineering portfolio of Arshid Ahmad Malik, Electronics and Communication Engineer specializing in Embedded Systems, IoT, VLSI, FPGA, Edge AI, and Full Stack Development. Based in Bengaluru, India.",
  keywords: ["Arshid Ahmad Malik", "Electronics Engineer", "Embedded Systems", "IoT", "VLSI", "FPGA", "Edge AI", "ESP32", "STM32", "Arduino", "Full Stack Developer", "Bengaluru"],
  authors: [{ name: "Arshid Ahmad Malik" }],
  creator: "Arshid Ahmad Malik",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://arshid-portfolio.vercel.app",
    title: "Arshid Ahmad Malik | Electronics & Communication Engineer",
    description: "Engineering portfolio specializing in Embedded Systems, IoT, VLSI, FPGA, Edge AI, and Full Stack Development.",
    siteName: "Arshid Ahmad Malik Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Arshid Ahmad Malik - Electronics & Communication Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arshid Ahmad Malik | Electronics & Communication Engineer",
    description: "Engineering portfolio specializing in Embedded Systems, IoT, VLSI, FPGA, Edge AI, and Full Stack Development.",
    images: ["/og-image.png"],
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
    icon: "/favicon.ico",
  },
  // Performance optimizations
  other: {
    "theme-color": "#030712",
  },
  // JSON-LD structured data for SEO
  alternates: {
    canonical: "https://arshid-portfolio.vercel.app",
  },
  // Web App Manifest
  manifest: "/manifest.json",
};

import SkipLink from "./components/SkipLink";
import CursorGlow from "./components/effects/CursorGlow";
import ScrollProgress from "./components/effects/ScrollProgress";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-full flex flex-col bg-black text-foreground">
        <SkipLink />
        <ScrollProgress />
        <CursorGlow />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <main id="main-content" className="flex-1">
            {children}
          </main>
        </ThemeProvider>
        <StructuredData />

        {/* Google Analytics 4 */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
        />
        <Script
          id="ga4-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
                anonymize_ip: true,
                cookie_flags: 'SameSite=None;Secure',
              });
            `,
          }}
        />

        {/* Microsoft Clarity */}
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");
            `,
          }}
        />
      </body>
    </html>
  );
}