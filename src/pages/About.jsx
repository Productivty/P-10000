import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Self from "../Asset/Self.jpg";
import AboutMeSection from "./AboutMeSection";

function AboutMe() {
  return (
    <div id="about-me" className=" my-12 md:flex md:mx-32">
      <div className=" h-full">
        <div className="md:flex lg:flex">
          <img
            src={Self}
            alt=""
            className="mx-auto w-60 opacity-70 md:z-20 md:rounded md:opacity-70"
          />
          <div className="mx-4 px-4 text-xl lg:mx-auto my-3 md:my-40  md:font-serif	text-center">
            <h3 className="py-2 font-serif text-xl md:text-3xl">
              Pradeep Thapa, Manipur
            </h3>
            <h3 className="font-serif text-center text-xl md:text-xl">
              pradeepthapa236@gmail.com
            </h3>
            <h3 className="py-2 text-xl md:text-3xl font-mono align-baseline">
              Contact No: +91 9383240605
            </h3>
            <h3 className="font-serif">India</h3>
          </div>
        </div>

        <a
          href="https://github.com/Productivty/Resume/files/12850852/Pradeep.Thapa.Resume.pdf"
          download={"Pradeep Thapa Resume.pdf"}
          className=""
        >
          <button className="bg-slate-200 item-center text-base uppercase md:text-3xl w-full px-16 py-4 my-4">
            Resume
            <span className="">
              <FontAwesomeIcon icon={faDownload} className="w-full" />
            </span>
          </button>
        </a>

        <div className=" px-6 md:my-10 border-y-8">
          <h1 className="text-2xl md:mx-32 mt-16 mb-8 md:text-3xl font-thin  align-baseline text-center">
            Hey Dear Once Again
          </h1>
          <p className="text-xl  md:text-3xl mx-4 my-4  font-thin  align-baseline mb-9">
            I am a self taught programmer. I've worked as a Lecturer sharing my
            passion for programming and 've dedicated a significant part of my
            life with lovely people educating and learning.
          </p>
          <p className="text-xl md:text-3xl mx-4 my-4  font-thin  align-baseline mb-10">
            My programming journey has been an exciting self-guided adventure,
            allowing me to explore a wide array of technologies and programming
            languages.
          </p>
        </div>

        <div className="">
          <AboutMeSection />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
