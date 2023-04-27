import React, {useState} from "react";
import "./Navbar.css";
import {
  faFlaskVial,
  faUserPen,
  faBuildingColumns,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

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
      className={`navbar navbar-expand-lg navbar-dark  ${
        isShown ? "show" : "hide"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container-fluid">
        <ul class="nav nav-pill">
          <li class="nav-item">
            <a class="nav-link" activeClass="active" href="#introduction">
              <FontAwesomeIcon className="icon me-5" icon={faUserPen} />
              <span className="my-auto">Introduction</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" activeClass="active" href="#expertise">
              <FontAwesomeIcon className="icon me-5" icon={faFlaskVial} />
              Expertise
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              activeClass="active"
              smooth
              spy
              href="#education"
            >
              <FontAwesomeIcon className="icon me-5" icon={faBuildingColumns} />
              Education
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" activeClass="active" smooth spy href="#more">
              <FontAwesomeIcon className="icon me-5" icon={faEllipsis} /> More
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
