import { Background } from "./components/Background";
import { GridMesh } from "./components/GridMesh";
import { Navbar } from "./components/Navbar";
import { ScrollProgress } from "./components/ScrollProgress";
import { Hero } from "./components/Hero";
import { HighlightsBento } from "./components/HighlightsBento";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { BeyondCode } from "./components/BeyondCode";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <>
      <ScrollProgress />
      <div className="noise" aria-hidden />
      <GridMesh />
      <Background />
      <div className="page">
        <Navbar />
        <main>
          <Hero />
          <HighlightsBento />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <BeyondCode />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
