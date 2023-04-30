import React, { useState } from "react";
import { useEffect } from "react";

const Community = ({ icon, description, max }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value === max) return;
    const interval = setInterval(() => {
      setValue((value) => value + 1);
    }, 20);
    return () => clearInterval(interval);
  }, [value]);

  return (
    <div className="flex flex-col flex-1 p-10 border-2 h-[200px] max-sm:w-full border-[#F7F8FB] max-w-[384px] rounded-md">
      {icon}
      <h5 className="heading3 transition-all mb-2">{value}k</h5>
      <p className="subtitle1">{description}</p>
    </div>
  );
};

export default Community;
