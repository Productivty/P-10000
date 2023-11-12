import React from "react";
// import "./ProjectSection.css";
import data from "../Asset/data";
import VanillaJS from "../VanillaJS";

function ProjectSection() {
  const wallCards = data.map((place) => {
    return <VanillaJS key={place.id} place={place} />;
  });

  return (
    <section className="" id="projects">
      <div className="">
        <h3 className="text-center md:text-center my-5 text-2xl py-3 underline text-stone-800	">
          Project
        </h3>
        <div className="grid gap-x-20 px-15 mx-12 text-xl">{wallCards}</div>
      </div>
    </section>
  );
}

export default ProjectSection;
