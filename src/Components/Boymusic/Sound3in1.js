import React, { useState } from "react";
import ReactHowler from "../../howler/ReactHowler.js";
import { useSelector, useDispatch } from "react-redux";
import { setSound3 } from "../../index";
import "../../css/Card.css";

const Sound3in1 = () => {
  // const status = useSelector((state) => state);
  const dispatch = useDispatch();
  const [play, setPlaying] = useState(false);

  return (
    <div
      className="happy1"
      onMouseOver={() => {
        setPlaying(true);
      }}
      onMouseLeave={() => {
        setPlaying(false);
      }}
      onClick={() => {
        dispatch(setSound3("The Quiet Aftermath - Sir Cubworth.mp3"));
        dispatch({ type: "index/CSBOY_1001" });
      }}
    >
      <ReactHowler
        src={["The Quiet Aftermath - Sir Cubworth.mp3"]}
        playing={play}
        loop={false}
        mute={false}
        volume={1.0}
      />
      <p>음악1 뒷면</p>
      <h1>THRILL_멜로디1</h1>
      {/* <button
        onClick={() => {
          setPlaying(false);
        }}
      >
        {" "}
        멈춤{" "}
      </button>
      <button
        onClick={() => {
          setPlaying(true);
        }}
      >
        {" "}
        실행{" "}
      </button>
      <button
        id="saveButtons"
        onClick={() => {
          dispatch(setSound3("The Quiet Aftermath - Sir Cubworth.mp3"));
          dispatch({ type: "index/CSBOY_1001" });
        }}
      >
        저장하기
      </button> */}
    </div>
  );
};

export default Sound3in1;
