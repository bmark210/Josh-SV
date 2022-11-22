import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  const [menu, setMenu] = React.useState(false);

  return (
    <>
      <div className={`${menu ? "navbar_justify" : "navbar"}`}>
        <div onClick={() => setMenu(!menu)} className="justify_lines">
          <div className="menu_line"></div>
          <div className="menu_line"></div>
          <div className="menu_line"></div>
        </div>

        <NavLink
          className={`${menu ? "navLink_fullscreen" : "navLink_phone"}`}
          to="/">
          Home
        </NavLink>
        {/* <NavLink
                  style={{ display: `${menu ? "flex" : "none"}` }}
                  className={`${menu ? "navLink" : "navLink_none"}`}
                  to="/">
                  Home
                </NavLink> */}
        <NavLink
          className={`${menu ? "navLink_fullscreen" : "navLink_phone"}`}
          to="/blog">
          Blog
        </NavLink>
        <NavLink
          className={`${menu ? "navLink_fullscreen" : "navLink_phone"}`}
          to="/works">
          Works
        </NavLink>
        <NavLink
          className={`${menu ? "navLink_fullscreen" : "navLink_phone"}`}
          to="/about">
          About
        </NavLink>
      </div>
    </>
  );
}

export default Navbar;
