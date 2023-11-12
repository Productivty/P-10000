import React from "react";
import Intro from "./Intro";
import ProjectSection from "./ProjectSection";
import AboutMe from "./AboutMe";
import Contact from "./Contact";

function Home() {
  return (
    <div>
      <Intro />
      <ProjectSection />
      <AboutMe />
      <Contact />
    </div>
  );
}

export default Home;
