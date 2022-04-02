import React, { useState } from "react";
import SideBarOptions from "../SideBarOptions";
import { RiHome7Line, RiHome7Fill, RiLoginBoxLine, RiLoginBoxFill} from "react-icons/ri";
import {
  BsPerson,
  BsPersonFill,
  BsChatDotsFill,
  BsChatDots,
} from "react-icons/bs";
import { Link } from "react-router-dom";

function SideBar({ initialSelectedIcon }) {
  const [selected, setSelected] = useState("Home");

  return (
    <div className=" bg-slate-800 text-white drop-shadow-lg">
      <div className=" container mx-auto flex justify-between">
        <div>
          <h1 className="inline-flex items-center py-6 px-3 mr-4 text-4xl bold cursive tracking-wide">
            Babble
          </h1>
          <Link
            to="/"
            className="inline-flex items-center py-3 px-3  rounded text-lg"
          >
            <SideBarOptions
              Icon={selected === "Home" ? RiHome7Fill : RiHome7Line}
              text="Home"
              isActive={Boolean(selected === "Home")}
              setSelected={setSelected}
            />
          </Link>

          <Link
            to="/profile"
            className="inline-flex items-center py-3 px-3  rounded text-lg"
          >
            <SideBarOptions
              Icon={selected === "Profile" ? BsPersonFill : BsPerson}
              text="Profile"
              isActive={Boolean(selected === "Profile")}
              setSelected={setSelected}
            />
          </Link>

          <Link
            to="/chat"
            className="inline-flex items-center py-3 px-3  rounded text-lg"
          >
            <SideBarOptions
              Icon={selected === "Chat" ? BsChatDotsFill : BsChatDots}
              text="Chat"
              isActive={Boolean(selected === "Chat")}
              setSelected={setSelected}
            />
          </Link>
        </div>

        <div className="">
          <Link
            to="/login"
            className="inline-flex items-center py-3 px-3 rounded text-lg"
          >
            <SideBarOptions
              Icon={selected === "Login" ? RiLoginBoxFill : RiLoginBoxLine}
              text="Login"
              isActive={Boolean(selected === "Login")}
              setSelected={setSelected}
            />
          </Link>

        </div>
      </div>
    </div>
  );
}

export default SideBar;
