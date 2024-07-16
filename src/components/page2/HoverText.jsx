import React from "react";

const HoverText = (props) => {
    const mouseEntered=()=>{
        props.setimageScroll(props.translate)
    }
  return (
    <div onMouseEnter={mouseEntered} className="hoveredtext hover:px-40 relative hover:text-gray-600  border-t-2 flex items-center justify-between px-[2vw] py-[2vw]">
      <div className="overlay h-full w-full absolute z-50 top-0 left-0"></div>
      <h1 className="text-8xl uppercase z-10">{props.h1}</h1>
      <h5 className="text-xl opacity-85 z-10">Ineteraction & Development</h5>
    </div>
  );
};

export default HoverText;
