import "./App.css";
import React from "react";
import "./Components/Main/Main";
import { useDispatch, useSelector, Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Components/Main/Main";
import Home from "./Components/Home/Home";
import Ending from "./Components/Ending/Ending";

const App = () => {
  // const checknum = useSelector((state) => state);
  // const dispatch = useDispatch();
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/main" element={<Main />} />
          <Route path="/ending" element={<Ending />} />
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
