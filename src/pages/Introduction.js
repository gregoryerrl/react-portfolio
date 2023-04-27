import React from "react";
import "../style.css";
import "./Introduction.css";
import gregpic from "../images/gregpic.png";
import {FaGithub, FaLinkedin, FaFacebook} from "react-icons/fa";
import {faFileArrowDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import cv from "../cv.pdf";

function Introduction() {
  return (
    <div className="page" id="home">
      <div className="full-container">
        <div className="half1">
          <div className="card card-body">
            <img className="profpic mx-auto rounded" src={gregpic} alt="" />
            <h1>GREGORY ERRL BABELA</h1>
            <h2>Web Developer</h2>
          </div>
          <div className="basic-info">
            <div className="basic-content my-4 ms-4">
              <p>
                <FaGithub className="icon me-2" />
                <a href="https://github.com/gregoryerrl" target="_blank">
                  github.com/gregoryerrl
                </a>
              </p>
              <p>
                <FaLinkedin className="icon me-2" />
                <a href="https://www.linkedin.com/in/errl/" target="_blank">
                  linkedin.com/in/errl/
                </a>
              </p>
              <p>
                <FaFacebook className="icon me-2" />
                <a href="https://www.facebook.com/gregoryerrl" target="_blank">
                  facebook.com/gregoryerrl
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="half2 ms-5 ps-5">
          <div className="border-bottom mx-auto py-auto d-flex cv">
            <a className="d-flex cv" href={cv} download={cv}>
              <FontAwesomeIcon className="dl me-4" icon={faFileArrowDown} />{" "}
              <h1>Download CV</h1>
            </a>
          </div>
          <div className="career mt-3">
            <h3 className="border-right col-7 float-start px-4 mx-4 my-5">
              Bachelor of Science in Computer Engineering - 2023
            </h3>
            <h3 className="border-left float-end px-4 mx-5 mb-5">
              5+ Certifications as a student <br></br>
              <p>
                See <a href="#expertise">expertise</a> for reference
              </p>
            </h3>
            <h3 className="border-right float-start px-4 mx-4 mb-5">
              Proficiency in different Languages
            </h3>
            <h3 className="border-left col-7 float-end px-4 mx-5 mb-5">
              Creative, Multi-talented and has strong foundation for visual
              design{" "}
              <p>
                <a href="#more">Reference</a>
              </p>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
