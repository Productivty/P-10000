import React from "react";

const AboutImage = (props) => {
  return (
    <div>
      {" "}
      <div className=" min-w-full mb-4">
        <img className="" src={props.place.imageUrl} alt="" />
      </div>
    </div>
  );
};

export default AboutImage;
