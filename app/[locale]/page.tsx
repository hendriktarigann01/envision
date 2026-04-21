import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Platform from "@/components/Platform";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="bg-[#02030A] min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services /> 
      <Platform />
      <Process />
      <CTA />
      <Footer />
    </main>
  );
}
