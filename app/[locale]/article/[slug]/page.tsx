import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ARTICLES } from "../data";

interface PageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const locales = ["en", "id"];
  return ARTICLES.flatMap((article) =>
    locales.map((locale) => ({
      locale,
      slug: article.slug,
    })),
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) {
    return {};
  }

  const firstParagraph = article.content?.[0] || "";
  const description = firstParagraph.replace(/^[0-9]+\s+[A-Za-z]+\s+[0-9]+\s+-\s+/, "").substring(0, 160) + "...";
  const canonicalUrl = `https://envsn.asia/${locale}/article/${slug}`;

  return {
    title: `${article.title} | Envision`,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `https://envsn.asia/en/article/${slug}`,
        id: `https://envsn.asia/id/article/${slug}`,
      },
    },
    openGraph: {
      title: article.title,
      description,
      url: canonicalUrl,
      siteName: "Envision",
      images: [
        {
          url: `https://envsn.asia${article.image}`,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      type: "article",
      publishedTime: article.date === "14 July 2026" ? "2026-07-14T00:00:00Z" : "2026-03-30T00:00:00Z",
      authors: [article.author],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description,
      images: [`https://envsn.asia${article.image}`],
    },
  };
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const initials = article.author
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  const firstParagraph = article.content?.[0] || "";
  const articleDesc = firstParagraph.replace(/^[0-9]+\s+[A-Za-z]+\s+[0-9]+\s+-\s+/, "");
  const canonicalUrl = `https://envsn.asia/${locale}/article/${slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    image: [`https://envsn.asia${article.image}`],
    datePublished: article.date === "14 July 2026" ? "2026-07-14T00:00:00+00:00" : "2026-03-30T00:00:00+00:00",
    dateModified: article.date === "14 July 2026" ? "2026-07-14T00:00:00+00:00" : "2026-03-30T00:00:00+00:00",
    author: [
      {
        "@type": "Person",
        name: article.author,
        url: "https://envsn.asia",
      },
    ],
    publisher: {
      "@type": "Organization",
      name: "Envision",
      logo: {
        "@type": "ImageObject",
        url: "https://envsn.asia/images/logos/logo.webp",
      },
    },
    description: articleDesc.substring(0, 200) + "...",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
  };

  return (
    <main className="bg-[#02030A] min-h-screen overflow-x-hidden">
      {/* Schema.org BlogPosting metadata */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <article className="py-28 md:py-36 px-6 max-w-4xl mx-auto">
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-10">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Title */}
        <h1 className="font-display font-bold text-3xl md:text-5xl text-white leading-tight tracking-tight mb-6">
          {article.title}
        </h1>

        {/* Category badge */}
        <div className="mb-8">
          <span className="inline-flex items-center px-5 py-1.5 rounded-full border border-white/20 font-body text-xs text-white/80">
            {article.category}
          </span>
        </div>

        {/* Author row */}
        <div className="flex items-center justify-between border-y border-white/10 py-5 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center font-display font-semibold text-sm text-[#02030A]">
              {initials}
            </div>
            <span className="font-body text-sm text-white font-medium">
              {article.author}
            </span>
          </div>
          <span className="font-body text-xs md:text-sm text-white/55">
            {article.date}
          </span>
        </div>

        {/* Content body */}
        <div className="font-body text-white/80 text-sm md:text-base leading-relaxed space-y-6">
          {article.content?.map((paragraph, index) => {
            if (paragraph.startsWith("## ")) {
              return (
                <h2
                  key={index}
                  className="font-display font-bold text-xl md:text-2xl text-white pt-4 pb-2"
                >
                  {paragraph.replace("## ", "")}
                </h2>
              );
            }
            return (
              <p key={index} className="text-justify">
                {paragraph}
              </p>
            );
          })}
        </div>
      </article>

      <Footer />
    </main>
  );
}
