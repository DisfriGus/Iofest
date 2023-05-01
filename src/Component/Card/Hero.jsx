import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col flex-1">
      <div className="flex flex-row items-center gap-4 w-full mb-4">
        <div className="border-2 border-[#9BA1B14D] px-4 py-2 self-start rounded-md">
          Local
        </div>
        <h5>5 MIN READ</h5>
      </div>
      <h5 className="heading5 mb-4">
        5 Recommends places to go in 2023 as a couple
      </h5>
      <p className="body1">Lorem ipsum dolor sit amet consectetur. Tempor nec imperdiet ornare augue in.</p>
    </div>
  );
};

export default Hero;
