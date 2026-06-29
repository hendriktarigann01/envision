"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ARTICLES, type Article as ArticleType } from "@/app/[locale]/article/data";

function ArticleCard({
  article,
  delay = 0,
}: {
  article: ArticleType;
  delay?: number;
}) {
  return (
    <Link href={`/article/${article.slug}`}>
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay }}
        className="group flex flex-col h-full bg-[#0a0b14] border border-[#424242] rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer"
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="p-5 flex flex-col gap-3 flex-1">
          <div className="flex items-center justify-between">
            <span className="font-body text-[11px] text-white/50 tracking-wide">
              {article.category}
            </span>
            <span className="font-body text-[11px] text-white/40">
              {article.date}
            </span>
          </div>

          <h3 className="font-display font-bold text-sm md:text-base text-white leading-snug group-hover:text-white/90 transition-colors">
            {article.title}
          </h3>

          <div className="flex items-center gap-2 mt-auto pt-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex-shrink-0" />
            <span className="font-body text-xs text-white/55">
              {article.author}
            </span>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}

export default function Article() {
  const t = useTranslations("article");
  const homeArticles = ARTICLES.slice(0, 2);

  return (
    <section
      id="article"
      className="relative py-20 lg:py-28 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-medium text-3xl md:text-5xl text-white tracking-tight"
          >
            Exploring the Future of Immersive Experiences
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-body text-white/60 text-sm md:text-base max-w-xl md:text-right leading-relaxed"
          >
            A collection of insights, inspiration, and industry knowledge
            exploring how content, technology, and storytelling create
            meaningful experiences.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
          {homeArticles.map((article, i) => (
            <ArticleCard key={article.id} article={article} delay={i * 0.12} />
          ))}

          <Link href="/article" className="h-full block">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.24 }}
              className="group flex flex-col items-center justify-center gap-5 bg-[#0a0b14] border border-[#424242] rounded-2xl p-8 h-full min-h-[260px] transition-all duration-300 cursor-pointer text-center"
            >
              <p className="font-display font-semibold text-lg md:text-xl text-white leading-snug">
                View All Articles
              </p>
              <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-200 font-body text-sm text-white/80 group-hover:text-white group-hover:border-white/40">
                Discover More
                <ArrowRight size={14} />
              </span>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
}
