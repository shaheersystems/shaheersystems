import React from "react";
import logo from "../assets/shaheer.svg";
import { Link } from "react-router-dom";
import GradientBar from "./GradientBar";
function Navbar() {
  return (
    <div className="fixed top-0 w-full">
      <GradientBar />
      <div className="bg-[#191919]/5 backdrop-blur-xl border-b border-neutral-800 text-white w-full h-16 px-5 flex items-center justify-between">
        <div className="pb-3">
          <Link to="/">
            {" "}
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="flex gap-3">
          <Link
            className="px-3 text-sm font-code py-2 font-semibold hover:bg-[#2e2e2e] bg-[#2e2e2e] rounded transition-all"
            to="/"
          >
            Home
          </Link>
          <Link
            className="px-3 text-sm font-code py-2 rounded hover:bg-[#2e2e2e] transition-all"
            to="/"
          >
            About
          </Link>
          <Link
            className="px-3 text-sm font-code py-2 rounded hover:bg-[#2e2e2e] transition-all"
            to="/"
          >
            Projects
          </Link>
          <Link
            className="px-3 text-sm font-code py-2  rounded hover:bg-[#2e2e2e] transition-all"
            to="/"
          >
            Skills
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
