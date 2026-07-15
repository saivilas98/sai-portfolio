import { MotionConfig } from "framer-motion";
import { Cover } from "./components/chapters/Cover";
import { WhoAmI } from "./components/chapters/WhoAmI";
import { Journey } from "./components/chapters/Journey";
import { CurrentlyBuilding } from "./components/chapters/CurrentlyBuilding";
import { Projects } from "./components/chapters/Projects";
import { CaseStudy } from "./components/chapters/CaseStudy";
import { Notebook } from "./components/chapters/Notebook";
import { Contact } from "./components/chapters/Contact";
import { ChapterNav, type Chapter } from "./components/ui/ChapterNav";
import { MobileIndex } from "./components/ui/MobileIndex";
import { PenCursor } from "./components/ui/PenCursor";
import { IntroReveal } from "./components/ui/IntroReveal";
import { ScrollRibbon } from "./components/ui/ScrollRibbon";

const chapters: Chapter[] = [
  { id: "cover", label: "Cover", no: "01" },
  { id: "who", label: "Who Am I", no: "02" },
  { id: "journey", label: "Journey", no: "03" },
  { id: "building", label: "Building", no: "04" },
  { id: "projects", label: "Projects", no: "05" },
  { id: "case-study", label: "Case Study", no: "06" },
  { id: "notebook", label: "Notebook", no: "07" },
  { id: "contact", label: "Contact", no: "08" },
];

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative grain">
        <IntroReveal />
        <PenCursor />
        <ScrollRibbon />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-paper"
        >
          Skip to content
        </a>
        <ChapterNav chapters={chapters} />
        <MobileIndex chapters={chapters} />
        <main id="main-content">
          <Cover />
          <WhoAmI />
          <Journey />
          <CurrentlyBuilding />
          <Projects />
          <CaseStudy />
          <Notebook />
          <Contact />
        </main>
      </div>
    </MotionConfig>
  );
}

export default App;
