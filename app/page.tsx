import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Roadmap from "@/components/Roadmap";
import Projects from "@/components/Projects";
import Toolkit from "@/components/Toolkit";
import About from "@/components/About";
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
        <Contact />
      </main>
    </div>
  );
}
