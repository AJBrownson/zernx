import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Hero } from '@/components/sections/Hero';
import { Problem } from '@/components/sections/Problem';
import { Features } from '@/components/sections/Features';
import { DEX } from '@/components/sections/DEX';
import { Token } from '@/components/sections/Token';
import { Roadmap } from '@/components/sections/Roadmap';
import { Definition } from '@/components/sections/Definition';
import { FAQs } from '@/components/sections/FAQs';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-dark-bg pt-20">
        <section id="hero">
          <Hero />
        </section>
        <section id="problem" className="max-w-7xl mx-auto">
          <Problem />
        </section>
        <section id="features" className="max-w-7xl mx-auto">
          <Features />
        </section>
        <section id="dex" className="max-w-7xl mx-auto">
          <DEX />
        </section>
        <section id="token" className="max-w-7xl mx-auto">
          <Token />
        </section>
        <section id="roadmap" className="max-w-7xl mx-auto">
          <Roadmap />
        </section>
        <section id="definition" className="max-w-7xl mx-auto">
          <Definition />
        </section>
        <section id="faq" className="max-w-7xl mx-auto">
          <FAQs />
        </section>
      </main>
      <Footer />
    </>
  );
}