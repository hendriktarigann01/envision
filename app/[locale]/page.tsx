import Navbar from "@/components/layout/Navbar";
import HeroVideoBackground from "@/components/HeroVideoBackground";
import Hero1 from "@/components/Hero1";
import Hero2 from "@/components/Hero2";
import Hero3 from "@/components/Hero3";
import Hero4 from "@/components/Hero4";
import Hero5 from "@/components/Hero5";
import About from "@/components/About";
import Hero6 from "@/components/Hero6";
import Services from "@/components/Services";
import Platform from "@/components/Platform";
// import Process from "@/components/Process";
import OurContent from "@/components/OurContent";
import Article from "@/components/Article";
import CTA from "@/components/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  const videoSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "VideoObject",
        "name": "Envision Hero Parallax Experience",
        "description": "Hyper-reality immersive display experience parallax background video by Envision.",
        "thumbnailUrl": "https://envsn.asia/images/hero/hero.webp",
        "uploadDate": "2026-03-01T00:00:00+00:00",
        "contentUrl": "https://envsn.asia/images/hero/hero-parallax.webm",
        "embedUrl": "https://envsn.asia/images/hero/hero-parallax.webm",
        "duration": "PT9S",
      },
      {
        "@type": "VideoObject",
        "name": "Nature Immersive Experience Loop",
        "description": "Curated nature artwork showing tropical forest canopy and light reflections.",
        "thumbnailUrl": "https://envsn.asia/images/our-content/thumbnail/nature.webp",
        "uploadDate": "2026-03-01T00:00:00+00:00",
        "contentUrl": "https://envsn.asia/images/our-content/nature.webm",
        "embedUrl": "https://envsn.asia/images/our-content/nature.webm",
      },
      {
        "@type": "VideoObject",
        "name": "Abstract Chromatic Flow Loop",
        "description": "Modern abstract fluid design illustrating light refraction and spectrums.",
        "thumbnailUrl": "https://envsn.asia/images/our-content/thumbnail/abstract.webp",
        "uploadDate": "2026-03-01T00:00:00+00:00",
        "contentUrl": "https://envsn.asia/images/our-content/abstract.webm",
        "embedUrl": "https://envsn.asia/images/our-content/abstract.webm",
      },
      {
        "@type": "VideoObject",
        "name": "Ocean Deep Current Loop",
        "description": "Under-ocean bioluminescent current loop designed for gallery exhibitions.",
        "thumbnailUrl": "https://envsn.asia/images/our-content/thumbnail/ocean.webp",
        "uploadDate": "2026-03-01T00:00:00+00:00",
        "contentUrl": "https://envsn.asia/images/our-content/ocean.webm",
        "embedUrl": "https://envsn.asia/images/our-content/ocean.webm",
      },
    ],
  };

  return (
    <main className="bg-[#02030A] min-h-screen overflow-hidden relative">
      {/* Video SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />

      <Navbar />
      <HeroVideoBackground />
      <Hero1 />
      <Hero2 />
      <Hero3 />
      <Hero4 />
      <Hero5 />
      <About />
      <Hero6 />
      <Services />
      <Platform />
      {/* <Process /> */}
      <OurContent />
      <Article />
      <CTA />
      <Footer />
    </main>
  );
}
