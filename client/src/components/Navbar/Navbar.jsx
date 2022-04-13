import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./navbar.css";
import Auth from "../../utils/auth";

function NavBar() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            Babble
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {Auth.loggedIn() ? (
              <>
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/profile"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    Profile
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/chat"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    Chat
                  </NavLink>
                </li>         
                <li className="nav-item">
                  <Link exact className="nav-links" to="/" onClick={logout}>
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    className="nav-links"
                    activeClassName="active"
                    to="/login"
                  >
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/signup"
                    className="nav-links"
                    activeClassName="active"
                    onClick={handleClick}
                  >
                    Sign up
                  </NavLink>
                </li>
              </>
            )}
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
