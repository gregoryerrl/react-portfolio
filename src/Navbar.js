import React, {useState} from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
  const [currentPage, setCurrentPage] = useState("Home");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link
        to="/"
        className="navbar-brand"
        onClick={() => handlePageChange("Home")}
      >
        My Website
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className={`nav-item ${currentPage === "Home" ? "active" : ""}`}>
            <Link
              to="/"
              className="nav-link"
              onClick={() => handlePageChange("Home")}
            >
              Home
            </Link>
          </li>
          <li className={`nav-item ${currentPage === "About" ? "active" : ""}`}>
            <Link
              to="/about"
              className="nav-link"
              onClick={() => handlePageChange("About")}
            >
              About
            </Link>
          </li>
          <li
            className={`nav-item ${currentPage === "Contact" ? "active" : ""}`}
          >
            <Link
              to="/contact"
              className="nav-link"
              onClick={() => handlePageChange("Contact")}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
