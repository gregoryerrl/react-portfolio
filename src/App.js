import React, {useRef, useEffect} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Introduction from "./pages/Introduction";
import Expertise from "./pages/Expertise";
import CustomNavbar from "./Navbar";

function App() {
  return (
    <div className="body">
      <CustomNavbar id="custom-navbar" />
      <div
        data-spy="scroll"
        data-target="#navbar"
        className="content"
        data-offset="0"
      >
        <section className="page" id="introduction">
          <Introduction />
        </section>
        <section className="page mid" id="expertise">
          <h1>Expertise</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus
            ipsum vel lorem ullamcorper, quis feugiat massa bibendum. Vivamus
            eget nisl vel libero iaculis dapibus. Maecenas congue justo id dui
            pulvinar, ac vulputate enim venenatis. Ut at sapien lobortis,
            volutpat ipsum id, eleifend turpis. Duis bibendum tortor nec diam
            vehicula, nec ornare leo cursus. Aliquam erat volutpat. Vestibulum
            vel risus ac risus semper convallis ut vel urna. Nullam blandit nisi
            in urna sagittis sollicitudin. Sed blandit sapien quis lacinia
            varius. Sed eget nibh at risus blandit placerat. Nulla in lacus sit
            amet tortor varius pulvinar.
          </p>
        </section>
        <section className="page mid" id="education">
          <h1>Education</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus
            ipsum vel lorem ullamcorper, quis feugiat massa bibendum. Vivamus
            eget nisl vel libero iaculis dapibus. Maecenas congue justo id dui
            pulvinar, ac vulputate enim venenatis. Ut at sapien lobortis,
            volutpat ipsum id, eleifend turpis. Duis bibendum tortor nec diam
            vehicula, nec ornare leo cursus. Aliquam erat volutpat. Vestibulum
            vel risus ac risus semper convallis ut vel urna. Nullam blandit nisi
            in urna sagittis sollicitudin. Sed blandit sapien quis lacinia
            varius. Sed eget nibh at risus blandit placerat. Nulla in lacus sit
            amet tortor varius pulvinar.
          </p>
        </section>
        <section className="page mid" id="more">
          <h1>More</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus
            ipsum vel lorem ullamcorper, quis feugiat massa bibendum. Vivamus
            eget nisl vel libero iaculis dapibus. Maecenas congue justo id dui
            pulvinar, ac vulputate enim venenatis. Ut at sapien lobortis,
            volutpat ipsum id, eleifend turpis. Duis bibendum tortor nec diam
            vehicula, nec ornare leo cursus. Aliquam erat volutpat. Vestibulum
            vel risus ac risus semper convallis ut vel urna. Nullam blandit nisi
            in urna sagittis sollicitudin. Sed blandit sapien quis lacinia
            varius. Sed eget nibh at risus blandit placerat. Nulla in lacus sit
            amet tortor varius pulvinar.
          </p>
        </section>
      </div>
    </div>
  );
}

export default App;
