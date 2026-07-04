import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Impact from "@/components/Impact";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="bg-aurora">
      <Nav />
      <main>
        <Hero />
        <Journey />
        <Impact />
        <Skills />
        <About />
        <Contact />
      </main>
    </div>
  );
}
