import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { LangProvider } from './context/LanguageContext';
import { Navbar } from './components/ui/Navbar';
import { Home } from './pages/Home';
import { OGCPProject } from './pages/OGCPProject';
import { WalkingXiuxian } from './pages/WalkingXiuxian';
import { InfiniteAcademyProject } from './pages/InfiniteAcademyProject';
import { DuckEscapeProject } from './pages/DuckEscapeProject';
import { NPCAgentProject } from './pages/NPCAgentProject';
import { TwoLinkProject } from './pages/TwoLinkProject';
import { DistanceProject } from './pages/DistanceProject';
import { LibraryOfBabel } from './pages/LibraryOfBabel';
import { GardenOfForkingPaths } from './pages/GardenOfForkingPaths';
import { InvisibleCities } from './pages/InvisibleCities';
import { Contributions } from './pages/Contributions';
import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { StarfieldBackground } from './components/StarfieldBackground';
import { ScrollProgress } from './components/ScrollProgress';

function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    const lenis = new Lenis({
      duration: isMobile ? 0.8 : 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: isMobile ? 1.5 : 1,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(() => {});
    };
  }, []);

  return (
    <HashRouter>
      <LangProvider>
        <StarfieldBackground />
        <ScrollProgress />
        <div className="relative z-10 min-h-screen">
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/ogcp" element={<OGCPProject />} />
            <Route path="/projects/walking-xiuxian" element={<WalkingXiuxian />} />
            <Route path="/projects/infinite-academy" element={<InfiniteAcademyProject />} />
            <Route path="/projects/duck-escape" element={<DuckEscapeProject />} />
            <Route path="/projects/npc-agent" element={<NPCAgentProject />} />
            <Route path="/projects/2link" element={<TwoLinkProject />} />
            <Route path="/projects/distance" element={<DistanceProject />} />
            <Route path="/library-of-babel" element={<LibraryOfBabel />} />
            <Route path="/garden-of-forking-paths" element={<GardenOfForkingPaths />} />
            <Route path="/invisible-cities" element={<InvisibleCities />} />
            <Route path="/contributions" element={<Contributions />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </LangProvider>
    </HashRouter>
  );
}

export default App;
