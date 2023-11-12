import React from "react";
import image from "../Asset/image";
import AboutImage from "./AboutImage";

const AboutMeSection = () => {
  const imageCards = image.map((place) => {
    return <AboutImage key={place.id} place={place} />;
  });

  return (
    <div>
      <div className="" id="">
        <div className="">
          <h3 className="text-2xl md:text-3xl text-center my-16 font-thin  align-baseline">
            M surrouded by Beautiful ...
          </h3>
          <div className=" px-10 md:grid grid-cols-3 gap-4 grid-flow-row md:px-20 mb-2">
            {imageCards}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
