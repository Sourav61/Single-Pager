import React, { useState } from "react";
import "./navbar.css";
import {
  FaInstagramSquare,
  // AiFillGithub
  FaGithubSquare,
  FaLinkedin
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>S</span>ourav
            <span>P</span>ahwa
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">about</NavLink>
            </li>
            <li>
              <NavLink to="/service">services</NavLink>
            </li>
            <li>
              <NavLink to="/contact">contact</NavLink>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
          <li>
              <a
                href="https://www.instagram.com/souravpahwa2861/"
                target="_thapa">
                <FaLinkedin className="facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/souravpahwa2861/"
                target="_thapa">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Sourav61"
                target="_thapa">
                <FaGithubSquare className="youtube" />
              </a>
            </li>
          </ul>

          <div className="hamburger-menu">
            <a href="/" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

    </>
  );
};

export default Navbar;
