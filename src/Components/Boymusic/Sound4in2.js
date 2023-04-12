/* eslint-disable */

import React, { useState } from "react";
import ReactHowler from "../../howler/ReactHowler.js";
import { useSelector, useDispatch } from "react-redux";
import { setSound4 } from "../../index";
import schoice from "../ChapterBoy/schoice.png";
import "../../css/Card.css";

const Sound4in2 = (props) => {
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
        dispatch(setSound4("바다소리.mp3"));
        props.setNextBtn(props.nextBtn + 1);
      }}
    >
      <ReactHowler
        src={["바다소리.mp3"]}
        playing={play}
        loop={false}
        mute={false}
        volume={0.3}
      />
      <img className="schoice" src={schoice} alt="schoice" />
      <p className="script">바다가 좋겠어..!</p>

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
          dispatch(setSound4("Cooper Ave - The Westerlies.mp3"));
          props.setNextBtn(props.nextBtn + 1);
        }}
      >
        저장하기
      </button> */}
    </div>
  );
};

export default Sound4in2;
