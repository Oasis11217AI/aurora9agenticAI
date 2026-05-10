import "./globals.css";
import { Metadata } from "next";
import Script from "next/script";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";

export const metadata: Metadata = {
  // ✅ FIX 1: Point to the real domain
  metadataBase: new URL('https://www.aurora9.ai'),
  title: {
    default: "AURORA9 | Interconnected AI Workforce for 1P & 3P Global Commerce",
    template: "%s | AURORA9"
  },
  description: "The foundational nervous system for 1P and 3P commerce. AURORA9 deploys a governed AI workforce to master Marketing, Inventory, and CX from A to Z while mitigating Amazon SP-API fees.",
  keywords: [
    "AI workforce",
    "e-commerce automation",
    "agentic AI",
    "interconnected AI",
    "governed autonomy",
    "marketplace management",
    "Amazon Seller AI",
    "Vendor Central AI",
    "1P Amazon Management",
    "API fee mitigation",
    "Amazon SP-API cost optimization"
  ],
  authors: [{ name: "AURORA9 Team" }],
  creator: "AURORA9",
  publisher: "AURORA9",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    // ✅ FIX 2: Point to the real domain
    url: "https://www.aurora9.ai",
    title: "AURORA9 | Interconnected AI Workforce for 1P & 3P Global Commerce",
    description: "The foundational nervous system for 1P and 3P commerce. Interconnected agents orchestrating Marketing, Inventory, and CX while mitigating Amazon SP-API fees.",
    siteName: "AURORA9",
    images: [
      {
        url: "/AURORA9.png",
        width: 1200,
        height: 630,
        alt: "AURORA9 - Interconnected AI Workforce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AURORA9 | Interconnected AI Workforce for 1P & 3P Global Commerce",
    description: "Transform your enterprise with AURORA9’s interconnected, governed Agentic AI workforce for Seller and Vendor Central.",
    images: ["/AURORA9.png"],
    creator: "@aurora9ai",
  },
  alternates: {
    // ✅ FIX 3: Canonical URL points to real domain
    canonical: "https://www.aurora9.ai",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/AURORA9.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#4f46e5" />
      </head>
      
      {/* ✅ FIX 4: Added suppressHydrationWarning to kill the red console error */}
      <body 
        className="bg-gray-50 dark:bg-black text-gray-900 dark:text-white antialiased"
        suppressHydrationWarning={true}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-MDTZFQ3C"
            height="0" 
            width="0" 
            style={{display: 'none', visibility: 'hidden'}}
          />
        </noscript>
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HEPNETZJQP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HEPNETZJQP');
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MDTZFQ3C');
          `}
        </Script>
        
        <div id="root">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}