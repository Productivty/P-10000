import React from "react";
// import "../src/VanillaJS.css";

function VanillaJS(props) {
  return (
    <div className="w-full py-10">
      <a href={props.place.projectUrl} target="_blank" className="">
        <img className="w-full h-2" src={props.place.imageUrl} alt="" />
        <h1 className="">{props.place.projectTitle}</h1>
        <p className="">{props.place.projectDesc}</p>
        <p className="">{props.place.moreDetails}</p>
      </a>
    </div>
  );
}

export default VanillaJS;
