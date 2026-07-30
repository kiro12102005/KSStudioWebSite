import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { NowBuilding } from "@/components/NowBuilding";
import { News } from "@/components/News";
import { Links } from "@/components/Links";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <About />
        <Projects />
        <NowBuilding />
        <News />
        <Links />
      </main>
      <Footer />
    </div>
  );
}
