import React, {useState} from "react";
import "./Navbar.css";

function Navbar() {
  const [isShown, setIsShown] = useState(false);

  const handleMouseEnter = () => {
    setIsShown(true);
  };

  const handleMouseLeave = () => {
    setIsShown(false);
  };

  return (
    <nav
      className={`navbar ${isShown ? "show" : "hide"}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          My Portfolio
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
