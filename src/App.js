/* eslint-disable */

import "./App.css";
import React from "react";
import "./Components/Main/Main";
import { useDispatch, useSelector, Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Components/Main/Main";
import Home from "./Components/Home/Home";
import Ending1 from "./Components/Ending/Ending1";
import Ending2 from "./Components/Ending/Ending2";
import Ending3 from "./Components/Ending/Ending3";
import Ending4 from "./Components/Ending/Ending4";
import Gallery from "./Components/Gallery/Gallery";

const App = () => {
  // const checknum = useSelector((state) => state);
  // const dispatch = useDispatch();
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/main" element={<Main />} />
          <Route path="/ending1" element={<Ending1 />} />
          <Route path="/ending2" element={<Ending2 />} />
          <Route path="/ending3" element={<Ending3 />} />
          <Route path="/ending4" element={<Ending4 />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Router>

      {/* <p>here {checknum}</p>
      <button
        onClick={() => {
          dispatch({ type: "up" });
        }}
      >
        +
      </button> */}
    </div>
  );
};

export default App;
