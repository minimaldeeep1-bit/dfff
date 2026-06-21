import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "NestorFix Handyman Service Inc. | Engineer-Led Maintenance",
  description: "Professional, Engineer-Led Handyman Services in Calgary, Airdrie, Okotoks, and Cochrane.",
  keywords: ["Same Day Handyman Calgary", "TV Mounting Calgary", "Furniture Assembly Calgary", "Engineer-Led Handyman", "Calgary Property Maintenance"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "NestorFix Handyman Service Inc.",
        "telephone": "+1 (403) 461-4332",
        "email": "nestorshomehelp@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Calgary",
          "addressRegion": "AB",
          "addressCountry": "CA"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 51.0447,
          "longitude": -114.0719
        },
        "areaServed": ["Calgary", "Airdrie", "Okotoks", "Cochrane"],
        "priceRange": "$$"
      },
      {
        "@type": "WebPage",
        "name": "NestorFix Handyman Service Inc.",
        "description": "Professional, Engineer-Led Handyman Services in Calgary & Area"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What areas do you serve?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We serve Calgary, Airdrie, Okotoks, and Cochrane."
            }
          },
          {
            "@type": "Question",
            "name": "What is your hourly rate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our base pricing is C$60/hour with an upfront minimum call-out charge structure ($85–$120 baseline)."
            }
          }
        ]
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-55TCNTEBM8"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-55TCNTEBM8');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-slateGray bg-background`}
      >
        {children}
      </body>
    </html>
  );
}
