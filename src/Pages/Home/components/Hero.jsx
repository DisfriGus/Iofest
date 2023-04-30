import React from "react";
import Glamping from "../../../Assets/_background/glamping.svg";
const Hero = () => {
  return (
    <div className="flex pt-28 px-20 w-full gap-10 items-center">
      <div className="flex flex-col w-full">
        <h5 className="heading5 mb-2">Welcome to Menjelajah 👋</h5>
        <h1 className="display mb-10 text-[#2257DF]">
          Title Text Goes Here And Kwak Kwak Gwak
        </h1>
        <p className="subheading mb-10">
          Lorem ipsum dolor sit amet consectetur. Tempor nec imperdiet ornare
          augue in malesuada vitae ante erat. Donec gravida malesuada mus
          condimentum risus fusce.
        </p>
        <div className="flex max-w-[600px]">
            <input placeholder="Discover your next escape..." className="w-full bg-[#F7F8FB] rounded-tl-md rounded-bl-md p-5" />
            <button className="px-5 py-4 subtitle w-[300px] bg-black text-white rounded-tr-md rounded-br-md">Find Destination</button>
        </div>  
      </div>
      <img src={Glamping} className=" h-[712px]" />
    </div>
  );
};

export default Hero;
