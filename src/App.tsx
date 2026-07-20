import { useState } from "react";
import { MotionConfig } from "framer-motion";
import { Beliefs } from "./components/sections/Beliefs";
import { BuildLog } from "./components/sections/BuildLog";
import { CaseStudy } from "./components/sections/CaseStudy";
import { ChapterRail } from "./components/sections/ChapterRail";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";
import { Hero } from "./components/sections/Hero";
import { Journey } from "./components/sections/Journey";
import { ProductThinking } from "./components/sections/ProductThinking";
import { ProjectsCinema } from "./components/sections/ProjectsCinema";
import { Resume } from "./components/sections/Resume";
import { TopBar } from "./components/sections/TopBar";
import { Cursor } from "./components/fx/Cursor";
import { LightField } from "./components/fx/LightField";
import { Preloader } from "./components/fx/Preloader";
import { ScrollProgress } from "./components/fx/ScrollProgress";
import { Ticker } from "./components/ui/Ticker";

const marqueeItems = [
  "PRODUCT MANAGER",
  "BUILDS ON WEEKENDS",
  "IIT INDORE",
  "IIM CALCUTTA",
  "OLA ELECTRIC",
  "SHIPS QUIETLY",
];

function App() {
  const [started, setStarted] = useState(false);

  return (
    <MotionConfig reducedMotion="user">
      <Preloader onReveal={() => setStarted(true)} />
      <Cursor />
      <ScrollProgress />
      <LightField />

      <div className="grain vignette relative">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-paper"
        >
          Skip to content
        </a>

        <TopBar />
        <ChapterRail />

        <main id="main-content">
          <Hero started={started} />
          <Ticker items={marqueeItems} />
          <Journey />
          <ProjectsCinema />
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
