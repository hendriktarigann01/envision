import { notFound } from "next/navigation";
import Image from "next/image";
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

export default async function ArticleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const initials = article.author
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    image: [`https://envsn.asia${article.image}`],
    datePublished:
      article.date === "30 March 2026"
        ? "2026-03-30T00:00:00+00:00"
        : "2026-03-05T00:00:00+00:00",
    author: [
      {
        "@type": "Person",
        name: article.author,
        url: "https://envsn.asia",
      },
    ],
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
          <span className="inline-flex items-center px-5 py-1.5 rounded-full border border-white font-body text-xs text-white/80">
            {article.category}
          </span>
        </div>

        {/* Author row */}
        <div className="flex items-center justify-between py-5 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center font-display font-semibold text-sm text-[#02030A]">
              {initials}
            </div>
            <span className="font-body text-sm text-white font-medium">
              {article.author}
            </span>
          </div>
          <span className="font-body text-xs md:text-sm text-white">
            {article.date}
          </span>
        </div>

        {/* Content body */}
        <div className="font-body text-white text-sm md:text-base leading-relaxed space-y-6">
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
              <p key={index} className="text-justify md:text-left">
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
