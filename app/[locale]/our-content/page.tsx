"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ChevronsDown, X } from "lucide-react";
import { useTranslations } from "next-intl";
import Navbar from "@/components/layout/Navbar";
import CTA from "@/components/CTA";
import Footer from "@/components/layout/Footer";
import {
  ARTWORKS,
  CATEGORIES,
  THUMBNAIL_IMAGES,
  type Artwork,
  type Category,
} from "./data";

function ArtworkModal({
  artwork,
  category,
  onClose,
}: {
  artwork: Artwork;
  category: Category;
  onClose: () => void;
}) {
  const catLabel = CATEGORIES.find((c) => c.key === category)?.label ?? "";

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 16 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 16 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl bg-[#0d0d0d] rounded-2xl border border-[#424242] overflow-hidden shadow-2xl"
        >
          <div className="flex flex-col md:flex-row h-full">
            <div className="flex flex-col justify-between p-8 md:p-10 md:w-[42%] gap-8">
              <div className="space-y-6">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-white font-body text-xs text-white/80">
                  {catLabel}
                </span>

                <h2 className="font-display font-bold text-2xl md:text-3xl text-white uppercase leading-tight tracking-tight">
                  {artwork.title}
                </h2>

                <p className="font-body text-white/60 text-sm leading-relaxed">
                  {artwork.description}
                </p>

                <div className="space-y-2">
                  <p className="font-body text-sm">
                    <span className="text-white font-semibold">
                      Display Type:{" "}
                    </span>
                    <span className="text-white/60">{artwork.displayType}</span>
                  </p>
                  <p className="font-body text-sm">
                    <span className="text-white font-semibold">Runtime: </span>
                    <span className="text-white/60">{artwork.runtime}</span>
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={onClose}
                  className="flex-1 py-3 rounded-full border border-white font-body text-sm text-white/80 hover:bg-white/10 transition-all duration-200"
                >
                  Back
                </button>
                <a
                  href="#contact"
                  onClick={onClose}
                  className="flex-1 py-3 rounded-full border border-white font-body text-sm text-white/80 hover:bg-white/10 transition-all duration-200 text-center"
                >
                  Inquiry
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-3 p-4 md:p-5 md:w-[58%]">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                <Image
                  src={artwork.src}
                  alt={artwork.title}
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                <Image
                  src={artwork.mockup}
                  alt={`${artwork.title}mockup`}
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function OurContentPage() {
  const t = useTranslations("ourContent");
  const [active, setActive] = useState<Category>("nature");
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  const artworks = ARTWORKS[active];

  const keys = CATEGORIES.map((c) => c.key);
  const idx = keys.indexOf(active);
  const prevKey = keys[(idx - 1 + keys.length) % keys.length];
  const nextKey = keys[(idx + 1) % keys.length];
  const carouselSlots: {
    key: Category;
    position: "prev" | "active" | "next";
  }[] = [
    { key: prevKey, position: "prev" },
    { key: active, position: "active" },
    { key: nextKey, position: "next" },
  ];

  return (
    <main className="bg-[#02030A] min-h-screen overflow-x-hidden">
      <Navbar />

      {selectedArtwork && (
        <ArtworkModal
          artwork={selectedArtwork}
          category={active}
          onClose={() => setSelectedArtwork(null)}
        />
      )}

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/content.webp"
            alt="Content hero"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#02030A]/20 via-[#02030A]/30 to-[#02030A]" />
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto space-y-10">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold text-4xl md:text-6xl text-white leading-tight"
          >
            Explore Our Immersive
            <br className="hidden md:block" /> Content Collections
          </motion.h1>
          <div className="space-y-5">
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
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

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display font-semibold text-2xl md:text-3xl text-white mb-3">
              Artworks
            </h2>
            <p className="font-body text-white/50 text-sm max-w-md md:max-w-lg mx-auto leading-relaxed">
              Browse a curated library of immersive experiences designed for
              galleries, museums, experience centers, brand activations, and
              public spaces.
            </p>
          </div>

          <div className="flex gap-3 mb-10 h-[180px] md:h-[220px]">
            {carouselSlots.map(({ key, position }) => {
              const cat = CATEGORIES.find((c) => c.key === key)!;
              const isActive = position === "active";
              return (
                <button
                  key={`${key}-${position}`}
                  onClick={() => setActive(key)}
                  className={`relative flex-1 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                    isActive
                      ? "border-white"
                      : "border-transparent"
                  }`}
                >
                  <Image
                    src={THUMBNAIL_IMAGES[key]}
                    alt={cat.label}
                    fill
                    className="object-cover object-center"
                  />
                  <div
                    className={`absolute inset-0 transition-all duration-300 ${isActive ? "bg-black/10" : "bg-black/45"}`}
                  />
                  {position === "prev" && (
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white">
                      <ChevronLeft size={20} />
                    </span>
                  )}
                  {position === "next" && (
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white">
                      <ChevronRight size={20} />
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <p className="font-body text-white/40 text-xs mb-4 uppercase tracking-widest">
            {artworks.length} items
          </p>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
            >
              {artworks.map((art, i) => (
                <motion.div
                  key={art.src}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  onClick={() => setSelectedArtwork(art)}
                  className="group relative rounded-xl overflow-hidden aspect-square cursor-pointer"
                >
                  <Image
                    src={art.src}
                    alt={art.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <p className="absolute bottom-0 left-0 right-0 px-3 py-3 font-body text-[11px] font-semibold text-white uppercase tracking-widest translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {art.title}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
