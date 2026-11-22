import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Statement from "@/components/Statement";
import Impact from "@/components/Impact";
import Experience from "@/components/Experience";
import Process from "@/components/Process";
import Capabilities from "@/components/Capabilities";
import Work from "@/components/Work";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Statement />
        <Impact />
        <Experience />
        <Process />
        <Capabilities />
        <Work />
        <Faq />
        <Contact />
      </main>
    </>
  );
}
