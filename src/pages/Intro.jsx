import React from "react";
import { IntroLOGO } from "../Asset/constant";
import { Link } from "react-router-dom";

function Intro() {
  return (
    <section id="intro" className="h-screen md:h-screen">
      <div className=" md:flex border border-radius px-24 my-10">
        <img
          src={IntroLOGO}
          alt=""
          className=" w-96 md:mx-auto md:py-8 lg:280 lg:rounded-full lg:w-50"
        />
        <div className="my-16 mx-auto md:text-center md:my-28">
          <h2 className="text-center text-xl">
            Hello <span className="mr-2">Folks</span>🍻
          </h2>
          <p className="my-8 font-mono text-xl">
            Nice to see you in here! Passionate Frontend Developer
          </p>

          <span className="">
            <ul className="  text-center font-serif	md:flex justify-around align-middle  text-slate-700 gap-2 md:px-4 py-2">
              <li>
                <Link className="text-xl">React</Link>
              </li>

              <li>
                <Link className="text-xl">VanillaJS</Link>
              </li>

              <li>
                <Link className=" text-xl">CSS3</Link>
              </li>

              <li>
                <Link className=" text-xl">HTML5</Link>
              </li>

              <li>
                <Link className=" text-xl">TailwindCSS</Link>
              </li>
            </ul>
          </span>
        </div>
      </div>
    </section>
  );
}

export default Intro;
