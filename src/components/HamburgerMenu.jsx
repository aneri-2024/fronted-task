import React from "react";

function HamburgerMenu({ onClick }) {
  return (
    <button className="hamburger-menu" onClick={onClick}>
      &#9776;
    </button>
  );
}

export default HamburgerMenu;
