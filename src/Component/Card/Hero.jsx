import React from "react";

const Hero = ({place, minutes, title, description}) => {
  return (
    <div className="flex flex-col flex-1">
      <div className="flex flex-row items-center gap-4 w-full mb-4">
        <div className="border-2 border-[#9BA1B14D] px-4 py-2 self-start rounded-md">{place}</div>
        <h5>{minutes}</h5>
      </div>
      <h5 className="heading5 mb-4">{title}</h5>
      <p className="body1">{description}</p>
    </div>
  );
};

export default Hero;
