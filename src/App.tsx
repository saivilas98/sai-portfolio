import { MotionConfig } from "framer-motion";
import { Beliefs } from "./components/sections/Beliefs";
import { BuildLog } from "./components/sections/BuildLog";
import { CaseStudy } from "./components/sections/CaseStudy";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";
import { Hero } from "./components/sections/Hero";
import { Journey } from "./components/sections/Journey";
import { Nav } from "./components/sections/Nav";
import { ProductThinking } from "./components/sections/ProductThinking";
import { Projects } from "./components/sections/Projects";
import { Resume } from "./components/sections/Resume";
import { Marquee } from "./components/ui/Marquee";

const marqueeItems = [
  "PRODUCT MANAGER",
  "BUILDS ON WEEKENDS",
  "IIT INDORE",
  "IIM CALCUTTA",
  "OLA ELECTRIC",
  "SHIPS QUIETLY",
];

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative grain">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-paper"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main-content">
          <Hero />
          <Marquee items={marqueeItems} />
          <Journey />
          <Projects />
          <CaseStudy />
          <ProductThinking />
          <BuildLog />
          <Beliefs />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
