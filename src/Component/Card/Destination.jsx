import { IconStar } from "@tabler/icons-react";
import { IconMapPin, IconMapPinFilled } from "@tabler/icons-react";
import React from "react";
import { Link } from "react-router-dom";

const Destination = ({ title, place, src, rating, to, className }) => {
  return (
    <Link
      to={to}
      className={`flex flex-none flex-col w-[350px] group hover:cursor-pointer max-sm:items-center gap-2 ${className}`}
    >
      <img
        className="w-[350px] h-[350px] rounded-md bg-red-300 mb-4 object-cover"
        src={src}
      />
      <h3 className="heading4 group-hover:text-[#2257DF] max-sm:title3">
        {title}
      </h3>
      <div className="flex items-center gap-2">
        <IconMapPin size={24} color="#96A3CC" />
        <h5 className="subheading text-[#96A3CC]">{place}</h5>
      </div>
      <div className="flex items-center gap-2">
        <IconStar style={{ fill: "#FFD70D" }} size={24} color="#FFD70D" />
        <h5 className="subheading text-[#000]">{rating}</h5>
      </div>
    </Link>
  );
};

export default Destination;
