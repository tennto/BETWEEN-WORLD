/* eslint-disable */

import React, { useEffect, useState } from "react";
import ReactHowler from "../../howler/ReactHowler.js";
import { useSelector, useDispatch } from "react-redux";
import { setSound4 } from "../../index";
import { mainSound } from "../../index";

import mchoice from "../ChapterBoy/mchoice.png";
import "../../css/Card.css";

const Sound4in1 = (props) => {
  // const status = useSelector((state) => state);
  const dispatch = useDispatch();
  const [play, setPlaying] = useState(false);

  useEffect(() => {
    dispatch(mainSound(false));
  }, []);

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
        dispatch(setSound4("산소리.mp3"));
        props.setNextBtn(props.nextBtn + 1);
      }}
    >
      <ReactHowler
        src={["산소리.mp3"]}
        playing={play}
        loop={false}
        mute={false}
        volume={0.3}
      />
      <img className="mchoice" src={mchoice} alt="mchoice" />
      <p className="rtrscript">나는 어진 사람같아</p>
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
          dispatch(setSound4("The Quiet Aftermath - Sir Cubworth.mp3"));
          props.setNextBtn(props.nextBtn + 1);
        }}
      >
        저장하기
      </button> */}
    </div>
  );
};

export default Sound4in1;
