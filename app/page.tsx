import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Journey from "@/components/Journey";
import Lab from "@/components/Lab";
import Capabilities from "@/components/Capabilities";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <div className="h-16 sm:h-24" />
        <Marquee />
        <Journey />
        <Lab />
        <Capabilities />
        <About />
        <Contact />
      </main>
    </>
  );
}
