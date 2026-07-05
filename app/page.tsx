import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Roadmap from "@/components/Roadmap";
import Projects from "@/components/Projects";
import Toolkit from "@/components/Toolkit";
import About from "@/components/About";
import Values from "@/components/Values";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div>
      <Nav />
      <main>
        <Hero />
        <Roadmap />
        <Projects />
        <Toolkit />
        <About />
        <Values />
        <Contact />
      </main>
    </div>
  );
}
