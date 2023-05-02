import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import Section from "../../Component/Section";
import Card from "../../Component/Card";
import Footer from '../../Component/Footer/Footer';
import destionations from "../../Data/Destination.json";

const Exploration = () => {
  return (
    <div className="">
      <Navbar />
      <div className="flex flex-col">
        <Section>
          <div className="flex items-center flex-col w-full sm:pt-[72px] bg-bgExploration bg-no-repeat text-white pb-[8%] rounded-3xl  max-sm:bg-none">
            <h1 className="heading1 text-white sm:mb-4  max-sm:hidden">
              Lets Explore
            </h1>
            <p className="subheading mb-[88px] text-white max-sm:hidden">
              Search any destination you prefer.
            </p>
            <div className="flex items-center gap-12 max-sm:max-w-none max-sm:gap-0 max-sm:items-center">
              <input
                type="text"
                placeholder="Lets Explore"
                className="w-[760px] bg-transparent border-b-2 border-white outline-none max-sm:w-[200px] max-sm:bg-[#F7F8FB]w max-sm:text-black"
              />
              <button className="py-4 px-[52px] bg-[#2257DF] rounded-lg max-sm:px-[18px]">
                Search
              </button>
            </div>
          </div>
        </Section>
        <Section title="Popular Destination" useArrows>
          {destinations.destination.map((val) => (
            <Card
              type="destination"
              to={`/place/${val.id}`}
              src={val.image.url}
              title={val.title}
              place={val.place}
              rating={val.rating}
            />
          ))}
        </Section>
        <div className="flex flex-col max-sm:block hidden gap-[10px] mt-4 pl-10 mb-[] ">
          <p className="border-b-2">Florence, Italy</p>
          <p className="border-b-2">Istanbul, Turkey</p>
          <p className="border-b-2">Komodo Island, Indoenesia</p>
        </div>
      </div>
      <div className="max-sm:mt-40">
        <Footer />
      </div>
    </div>
  );
};

export default Exploration;
