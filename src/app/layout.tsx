"use client";
import "../styles/index.scss";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { ReactNode } from "react";
import Script from "next/script";

interface RootLayoutProps {
  children: ReactNode;
}

// Metadata base URL
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.familiada-online.pl';

export default function RootLayout({ children }: RootLayoutProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Familiada Online",
    "description": "Zagraj w Familiadę online! Klasyczna teleturniejna gra rodzinna z trybem multiplayer. Zgaduj najpopularniejsze odpowiedzi i rywalizuj z przyjaciółmi!",
    "applicationCategory": "Game",
    "operatingSystem": "Any",
    "browserRequirements": "Requires JavaScript. Requires HTML5.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "PLN"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "150"
    },
    "inLanguage": "pl-PL",
    "author": {
      "@type": "Organization",
      "name": "Familiada Game"
    }
  };

  return (
    <html lang="pl">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />

        {/* Google Search Console Verification */}
        <meta
          name="google-site-verification"
          content="qk8MpQhMPpi254mdtWLVMTafMkFGD5og-K4n4mO2IVA"
        />

        {/* Podstawowe SEO */}
        <title>Familiada - Gra Familijna Online | Rozgrywka Multiplayer</title>
        <meta
          name="description"
          content="Zagraj w Familiadę online! Klasyczna teleturniejna gra rodzinna z trybem multiplayer. Zgaduj najpopularniejsze odpowiedzi i rywalizuj z przyjaciółmi!"
        />
        <meta
          name="keywords"
          content="familiada, gra online, multiplayer, gra rodzinna, teleturniej, quiz, gra grupowa, familiada online, gra w familiadę, teleturniej online"
        />
        <meta name="author" content="Familiada Game" />
        <link rel="canonical" href={siteUrl} />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content="Familiada - Gra Familijna Online | Rozgrywka Multiplayer" />
        <meta
          property="og:description"
          content="Zagraj w Familiadę online! Klasyczna teleturniejna gra rodzinna z trybem multiplayer. Zgaduj najpopularniejsze odpowiedzi i rywalizuj z przyjaciółmi!"
        />
        <meta property="og:image" content={`${siteUrl}/og-image.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Familiada" />
        <meta property="og:locale" content="pl_PL" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Familiada - Gra Familijna Online | Rozgrywka Multiplayer" />
        <meta
          name="twitter:description"
          content="Zagraj w Familiadę online! Klasyczna teleturniejna gra rodzinna z trybem multiplayer. Zgaduj najpopularniejsze odpowiedzi i rywalizuj z przyjaciółmi!"
        />
        <meta name="twitter:image" content={`${siteUrl}/og-image.png`} />

        {/* Dodatkowo */}
        <meta name="theme-color" content="#264653" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="language" content="Polish" />
        <meta name="revisit-after" content="7 days" />
      </head>
      <body>
        {/* Structured Data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
