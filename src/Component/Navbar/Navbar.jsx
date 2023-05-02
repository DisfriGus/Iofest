import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { TbMenu } from "react-icons/tb";
import Logo from "../../Assets/_logo/_logo/_logo_1x.webp";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="flex fixed z-10 bg-white w-full items-center justify-between px-20 max-sm:px-4 py-5">
      <div className="flex max-sm:w-full max-sm:relative max-sm:items-center max-sm:justify-center">
        <Link to="/" className="">
          <img src={Logo} className="max-sm:h-8 h-10" alt="" />
        </Link>
        <button
          onClick={() => setShow(!show)}
          className="text-[24px] absolute right-0  sm:hidden "
        >
          <TbMenu />
        </button>
      </div>
      <ul className="flex gap-6 max-sm:hidden">
        <NavLink
          to="/"
          className={({ isActive }) => {
            return `subtitle1 ${
              isActive
                ? "text-[#2257DF] font-bold"
                : "text-[#4E5568] font-normal "
            }`;
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/Exploration"
          className={({ isActive }) => {
            return `subtitle1 ${
              isActive
                ? "text-[#2257DF] font-bold"
                : "text-[#4E5568] font-normal "
            }`;
          }}
        >
          Exploration
        </NavLink>
        <NavLink
          to="/Blog"
          className={({ isActive }) => {
            return `subtitle1 ${
              isActive
                ? "text-[#2257DF] font-bold"
                : "text-[#4E5568] font-normal "
            }`;
          }}
        >
          Blog
        </NavLink>
      </ul>
      <div>
        <button className="flex items-center gap-[10px] px-6 py-3 border bg-[#161C2D] text-white rounded-[27px] max-sm:hidden">
          Get Started <HiOutlineArrowUpRight />
        </button>
      </div>
      <div
        className={`w-full px-10 bg-blue-600  text-white fixed top-0 left-0 h-full z-40  ease-in-out duration-300 ${
          show ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <div className="flex py-5 flex-row w-full justify-between">
          <h1 className="heading5 text-white">MENJELAJAH</h1>
          <button onClick={() => setShow(!show)} className="text-[24px]">
            <TbMenu />
          </button>
        </div>
        <div className="flex flex-col gap-6">
          <NavLink
            to="/"
            className={({ isActive }) => {
              return `subtitle1 ${
                isActive
                  ? "text-white font-bold"
                  : "text-white font-normal "
              }`;
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/Exploration"
            className={({ isActive }) => {
              return `subtitle1 ${
                isActive
                  ? "text-white font-bold"
                  : "text-white font-normal "
              }`;
            }}
          >
            Exploration
          </NavLink>
          <NavLink
            to="/Blog"
            className={({ isActive }) => {
              return `subtitle1 ${
                isActive
                  ? "text-white font-bold"
                  : "text-white font-normal "
              }`;
            }}
          >
            Blog
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
