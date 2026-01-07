import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Features } from "@/components/sections/Features";
import { DEX } from "@/components/sections/DEX";
import { Token } from "@/components/sections/Token";
import { Roadmap } from "@/components/sections/Roadmap";
import { Definition } from "@/components/sections/Definition";
import { FAQs } from "@/components/sections/FAQs";
// import Test from "@/components/sections/test";

export default function Home() {
  return (
    <>
      <main className="min-h-screen max-w-7xl mx-auto">
        <section id="hero">
          <Hero />
        </section>
         <section id="problem">
          <Problem />
        </section>
        <section id="features">
          <Features />
        </section>
        <section id="dex">
          <DEX />
        </section>
        <section id="token">
          <Token />
        </section>
        <section id="roadmap">
          <Roadmap />
        </section>
        <section id="definition">
          <Definition />
        </section>
        <section id="faq">
          <FAQs />
        </section>
      </main>
    </>
  );
}
