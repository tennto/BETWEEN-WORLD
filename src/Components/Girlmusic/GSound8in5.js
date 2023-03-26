/* eslint-disable */

import React, { useState } from "react";
import ReactHowler from "../../howler/ReactHowler.js";
import { useSelector, useDispatch } from "react-redux";
import { setSound8 } from "../../index";
import "../../css/Card.css";

const GSound8in5 = (props) => {
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
        dispatch(setSound8("까마귀.wav"));
        props.setNextBtn(props.nextBtn + 1);
      }}
    >
      <ReactHowler
        src={["까마귀.wav"]}
        playing={play}
        loop={false}
        mute={false}
        volume={0.2}
      />
      <p>음악1 뒷면</p>
      <h1>까마귀O</h1>
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
          dispatch(setSound5("The Quiet Aftermath - Sir Cubworth.mp3"));
          props.setNextBtn(props.nextBtn + 1);
        }}
      >
        저장하기
      </button> */}
    </div>
  );
};

export default GSound8in5;
