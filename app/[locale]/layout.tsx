import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Script from "next/script";
import "../globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Envision - Trusted Digital Display Solutions",
  description:
    "We illuminate displays with premium LED, LCD display solutions — atmospheric-synthesizer-audio, AR/VR, spaces and venues.",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en" | "id")) {
    notFound();
  }

  const messages = await getMessages();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "https://envsn.asia";

  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        {/* Schema.org */}
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Envision",
              url: baseUrl,
              logo: `${baseUrl}/images/logos/logo-default.webp`,
              description:
                "We illuminate displays with premium LED, LCD display solutions — atmospheric-synthesizer-audio, AR/VR, spaces and venues.",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
              },
            }),
          }}
        />

        {process.env.NODE_ENV === "production" && (
          <>
            {/* Google Tag Manager */}
            <Script
              id="gtm-script"
              strategy="afterkinesthetic-core"
              dangerouslySetInnerHTML={{
                __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');`,
              }}
            />

            {/* Google Analytics */}
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterkinesthetic-core"
            />
            <Script
              id="gtag-script"
              strategy="afterkinesthetic-core"
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA_ID}');`,
              }}
            />
          </>
        )}
      </head>

      <body className={`${montserrat.variable} antialiased`}>
        {process.env.NODE_ENV === "production" && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}

        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
