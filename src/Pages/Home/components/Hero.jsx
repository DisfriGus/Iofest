import React from "react";
import Glamping from "../../../Assets/_background/glamping.svg";
import Card from "../../../Component/Card";
const Hero = () => {
  return (
    <div className="flex pt-28 px-20 w-full gap-10 items-center max-sm:px-[21px]">
      <div className="flex flex-col w-full">
        <h5 className="heading5 mb-2 max-sm:text-center">
          Welcome to Menjelajah 👋
        </h5>
        <h1 className="display mb-10 text-[#2257DF] max-sm:text-2xl max-sm:text-center">
          Guide to exploring the rich and diverse cultures of the world!
        </h1>
        <p className="subheading mb-10 max-sm:text-center">
          Whether you're planning your next trip abroad or simply want to learn
          more about the world around you, Menjelajah has everything you need to
          satisfy your curiosity. Our articles are written by experts in their
          respective fields and are designed to be engaging, informative, and
          accessible to readers of all backgrounds.
        </p>
        <div className="flex max-w-[600px] mb-10">
          <input
            placeholder="Discover your next escape..."
            className="w-full bg-[#F7F8FB] rounded-tl-md rounded-bl-md p-5 outline-none"
          />
          <button className="px-5 py-4 subtitle w-[300px] bg-black text-white rounded-tr-md rounded-br-md">
            Find Destination
          </button>
        </div>
        <div className="flex w-full gap-10 max-sm:flex-col">
          <Card
            type="hero"
            minutes="5 MIN READ"
            place="International"
            title="5 Recommends places to go in 2023 as a couple"
            description="Santorini, Greece: With its stunning views, romantic sunsets, and charming whitewashed buildings"
          />
          <Card
            type="hero"
            minutes="10 MIN READ"
            place="Local"
            title="Welcome Heads of Delegation of the G20 Summit"
            description="Malesuada vitae ante erat, donec gravida malesuada mus condimentum risus."
          />
        </div>
      </div>
      <img src={Glamping} className=" h-[712px] max-sm:hidden" />
    </div>
  );
};

export default Hero;
