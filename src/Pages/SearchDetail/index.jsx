import React, { useEffect, useState } from "react";
import Navbar from "../../Component/Navbar/Navbar";
import { IconArrowLeft } from "@tabler/icons-react";
import Section from "../../Component/Section";
import Footer from "../../Component/Footer/Footer";
import { useParams } from "react-router-dom";
import destinations from "../../Data/Destination.json";

const SearchDetail = () => {
  const [place, setPlace] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setPlace(destinations.destination.find((val) => val.id == id));
  }, []);
  return (
    <div>
      <Navbar />
      <div className="py-28 px-56">
        <div className="flex flex-row items-center gap-2 mb-4">
          <button className="bg-[#F7F8FB] w-[50px] h-[50px] flex items-center justify-center rounded-full">
            <IconArrowLeft size={24} color={"#000"} />
          </button>
          <h5 className="subHeading">Back To Homepage</h5>
        </div>
        <div className="flex flex-col mb-10">
          <h5 className="subheading mb-2">Search Result</h5>
          <h3 className="heading2">{place.place}</h3>
        </div>
        <div className="flex flex-row gap-6">
          <div className="flex w-full flex-col">
            <div className="flex">
              <iframe
                src={place.streetView}
                width="100%"
                className="mb-10"
                height="450"
                style={{ border: 0, borderRadius: 20 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="flex flex-col mb-10">
              <h5 className="heading4 mb-2">About</h5>
              <p className="subtitle1">
                Florence was a central of medieval European trade and finance
                and one of the wealthiest cities of that era. It is considered
                by many academics to have been the birthplace of the
                Renaissance, becoming a major artistic, cultural, commercial,
                political, economic and financial center.
              </p>
            </div>
            <div className="flex flex-col">
              <h5 className="heading4 mb-2">Etymology</h5>
              <p className="subtitle1">
                There are a number of theories as to the origin of the Latin
                name Florentia from which the name of Florence and Firenze
                derived:
                <br />- Legend attributes the origin of the name Florentia to
                Florio (a soldier killed on the spot)
                <br />- It may be related to the Latin word for flowers found in
                the area
                <br />- It may be related to Flora, since it was founded during
                the Floralia festival
              </p>
            </div>
          </div>
          <div className="flex w-1/3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.0605313878887!2d11.260490717443849!3d43.77160229999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a5406089c9b41%3A0xd665440515d04583!2sVia%20Pietrapiana%2C%20112%2C%2050122%20Firenze%20FI%2C%20Italia!5e0!3m2!1sid!2sid!4v1683034087303!5m2!1sid!2sid"
              width="600"
              height="450"
              style={{ border: 0, borderRadius: 20 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SearchDetail;
