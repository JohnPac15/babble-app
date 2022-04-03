import React, { useState } from "react";
import { BsChatDots, BsCalendar2Week, BsPerson, BsArrowBarDown } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import { Link } from "react-router-dom";



function SideBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li>
          <Link className="icon-button icon" to="/">
            <AiOutlineHome />
          </Link>
        </li>
        <li>
          <Link className="icon-button icon" to="/profile">
            <BsPerson />
          </Link>
        </li>
        <li>
          <Link className="icon-button icon" to="/messages">
            <BsChatDots />
          </Link>
        </li>
        <li>
          <Link className="icon-button icon">
            <BsCalendar2Week />
          </Link>
        </li>
        <li>
          <Link className="icon-button icon" to="/login">
            <BiLogIn />
          </Link>
        </li>
        <li>
          <Link className="icon-button icon" to="/signup">
            <BiLogIn />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default SideBar;
