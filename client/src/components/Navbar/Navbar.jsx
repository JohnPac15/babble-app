import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import Auth from '../../utils/auth'


function NavBar() {
  const logout = event => {
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
            {Auth.loggedIn() ? (
              <>
                <NavLink to="/profile"></NavLink>
                <a className="nav-links" href="/" onClick={logout}>Logout</a>
              </>
            ) : (
              <>
                <NavLink className="nav-links" to="/login">Login</NavLink>
              </>
            )}
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/signup"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Sign up
              </NavLink>
            </li>
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