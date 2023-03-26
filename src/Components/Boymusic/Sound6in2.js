/* eslint-disable */

import React, { useState } from "react";
import ReactHowler from "../../howler/ReactHowler.js";
import { useSelector, useDispatch } from "react-redux";
import { setSound6 } from "../../index";
import "../../css/Card.css";

const Sound6in2 = (props) => {
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
        dispatch(setSound6("빗소리.mp3"));
        props.setNextBtn(props.nextBtn + 2);
      }}
    >
      <ReactHowler
        src={["빗소리.mp3"]}
        playing={play}
        loop={false}
        mute={false}
        volume={0.1}
      />
      <h2 className="script">반듯이 매단다</h2>
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
          dispatch(setSound5("Cooper Ave - The Westerlies.mp3"));
          props.setNextBtn(props.nextBtn + 1);
        }}
      >
        저장하기
      </button> */}
    </div>
  );
};

export default Sound6in2;
