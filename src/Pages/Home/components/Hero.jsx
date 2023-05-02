import React from "react";
import Glamping from "../../../Assets/_background/glamping.svg";
import Card from "../../../Component/Card";
const Hero = () => {
  return (
    <div className="flex pt-28 px-20 w-full gap-10 items-center max-sm:px-[21px]">
      <div className="flex flex-col w-full">
        <h5 className="heading5 mb-2 max-sm:text-center">Welcome to Menjelajah 👋</h5>
        <h1 className="display mb-10 text-[#2257DF] max-sm:text-2xl max-sm:text-center">
          Title Text Goes Here And Kwak Kwak Gwak
        </h1>
        <p className="subheading mb-10 max-sm:text-center">
          Lorem ipsum dolor sit amet consectetur. Tempor nec imperdiet ornare
          augue in malesuada vitae ante erat. Donec gravida malesuada mus
          condimentum risus fusce.
        </p>
        <div className="flex max-w-[600px] mb-10">
            <input placeholder="Discover your next escape..." className="w-full bg-[#F7F8FB] rounded-tl-md rounded-bl-md p-5 outline-none" />
            <button className="px-5 py-4 subtitle w-[300px] bg-black text-white rounded-tr-md rounded-br-md">Find Destination</button>
        </div>
        <div className="flex w-full gap-10 max-sm:flex-col">
            <Card type="hero"/>
            <Card type="hero"/>
        </div>
      </div>
      <img src={Glamping} className=" h-[712px] max-sm:hidden" />
    </div>
  );
};

export default Hero;
