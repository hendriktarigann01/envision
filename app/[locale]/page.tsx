import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import WhyEnvision from "@/components/WhyEnvision";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="bg-[#02030A] min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <WhyEnvision />
      <Process />
      <CTA />
      <Footer />
    </main>
  );
}
