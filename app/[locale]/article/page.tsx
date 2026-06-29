"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronsDown } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import CTA from "@/components/CTA";
import Footer from "@/components/layout/Footer";
import { Link } from "@/i18n/routing";
import { ARTICLES, type Article } from "./data";

function ArticleCard({ article, delay = 0 }: { article: Article; delay?: number }) {
  return (
    <Link href={`/article/${article.slug}`}>
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, delay }}
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
            <span className="font-body text-[11px] text-white/50 tracking-wide">{article.category}</span>
            <span className="font-body text-[11px] text-white/40">{article.date}</span>
          </div>

          <h2 className="font-display font-bold text-sm md:text-base text-white leading-snug group-hover:text-white/85 transition-colors">
            {article.title}
          </h2>

          <div className="flex items-center gap-2 mt-auto pt-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex-shrink-0" />
            <span className="font-body text-xs text-white/55">{article.author}</span>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}

export default function ArticlePage() {
  return (
    <main className="bg-[#02030A] min-h-screen overflow-x-hidden">
      <Navbar />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/hero/article.webp" alt="Article hero" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[#02030A]/10 via-[#02030A]/20 to-[#02030A]" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 space-y-8">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold text-4xl md:text-6xl text-white leading-tight"
          >
            Exploring the Future of
            <br className="hidden md:block" /> Immersive Experiences
          </motion.h1>
          <div className="space-y-5">
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-body text-white/60 text-sm md:text-base"
            >
              Explore Collections
            </motion.p>
            <div className="flex justify-center animate-bounce">
              <ChevronsDown />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display font-semibold text-2xl md:text-3xl text-white mb-3"
            >
              Article
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-body text-white/45 text-sm max-w-sm mx-auto leading-relaxed"
            >
              A collection of insights, inspiration, and industry knowledge exploring how content, technology, and storytelling create meaningful experiences.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
            {ARTICLES.map((article, i) => (
              <ArticleCard key={article.id} article={article} delay={(i % 3) * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
