import React, { useState } from "react";

const NavBar = () => {
  const [toggle, settoggle] = useState(false);
  return (
    <nav className="nav">
      <div className="logo">
        <div className="toggle">
          <button onClick={() => settoggle(!toggle)}>
            {!toggle ? (
              <i class="fa-solid fa-bars"></i>
            ) : (
              <i class="fa-solid fa-xmark"></i>
            )}
          </button>
        </div>
        <img
          src="https://www.metapasshq.xyz/static/media/chingari.5e33844070e613a036f369587825d2e6.svg"
          alt="Chingari"
        ></img>
      </div>
      <div className={`nav-links ${!toggle && "hide-links"}`}></div>
    </nav>
  );
};

export default NavBar;
