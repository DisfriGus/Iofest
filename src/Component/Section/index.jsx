import React from "react";
import img1 from "../../Assets/_background/element.svg";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
const Section = (props) => {
  const { useElement, className, useArrows, description, title, children } =
    props;
  return (
    <div
      className={`flex flex-col relative p-20 max-sm:px-10 ${className}`}
    >
      <div className={`flex items-center ${useArrows && "justify-between max-sm:flex-col"}`}>
        <div className="flex flex-col">
          <h1 className={`heading3 max-sm:title2 mb-5 max-sm:text-center ${!description && 'mb-10'}`}>
            {title}
          </h1>
          {useElement && (
            <img
              src={img1}
              className="h-24 absolute -z-10 top-12 left-56 max-sm:h-16 max-sm:top-5 opacity-50"
            />
          )}
          {description && (
            <p className="subheading mb-10 max-sm:mb-2 max-w-[500px] max-sm:text-center">
              {description}
            </p>
          )}
        </div>
        {useArrows && (
          <div className="flex max-sm:mb-10 items-center gap-4">
            <button className="w-10 h-10 rounded-full">
              <IconArrowLeft size={20} color="#161C2D" />
            </button>
            <button className="w-10 h-10 rounded-full">
              <IconArrowRight size={20} color="#161C2D" />
            </button>
          </div>
        )}
      </div>
      <div className={`flex ${!useArrows && 'max-sm:flex-col'} w-full items-center gap-6 ${useArrows && 'overflow-x-auto'}`}>
        {children}
      </div>
    </div>
  );
};

export default Section;
