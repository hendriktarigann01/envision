import type { Metadata } from "next";
import { ARTICLES } from "./data";
import ArticleListClient from "./ArticleListClient";

interface PageProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const canonicalUrl = `https://envsn.asia/${locale}/article`;

  const title =
    locale === "id"
      ? "Artikel & Wawasan Imersif | Envision"
      : "Articles & Immersive Insights | Envision";

  const description =
    locale === "id"
      ? "Temukan artikel, wawasan, inspirasi, dan tren teknologi tampilan imersif terbaru dari tim Envision."
      : "Discover the latest articles, insights, inspiration, and immersive display technology trends from the Envision team.";

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: "https://envsn.asia/en/article",
        id: "https://envsn.asia/id/article",
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Envision",
      images: [
        {
          url: "https://envsn.asia/images/hero/article.webp",
          width: 1200,
          height: 630,
          alt: "Envision Articles",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://envsn.asia/images/hero/article.webp"],
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { locale } = await params;
  const canonicalUrl = `https://envsn.asia/${locale}/article`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Envision Articles Library",
    description:
      "A collection of insights, inspiration, and industry knowledge exploring how content, technology, and storytelling create meaningful experiences.",
    url: canonicalUrl,
    publisher: {
      "@type": "Organization",
      name: "Envision",
      logo: {
        "@type": "ImageObject",
        url: "https://envsn.asia/images/logos/logo.webp",
      },
    },
    hasPart: ARTICLES.map((article) => ({
      "@type": "BlogPosting",
      headline: article.title,
      url: `https://envsn.asia/${locale}/article/${article.slug}`,
      image: `https://envsn.asia${article.image}`,
      author: {
        "@type": "Person",
        name: article.author,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ArticleListClient articles={ARTICLES} />
    </>
  );
}
