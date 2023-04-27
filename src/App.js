import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Home";
import CustomNavbar from "./Navbar";

function App() {
  return (
    <div>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes here for other pages */}
      </Routes>
    </div>
  );
}

export default App;
