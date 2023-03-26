/* eslint-disable */

import React, { useState } from "react";
import ReactHowler from "../../howler/ReactHowler.js";
import { useSelector, useDispatch } from "react-redux";
import { setSound4 } from "../../index";
import "../../css/Card.css";

const Sound4in1 = (props) => {
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
        dispatch(setSound4("바람소리,나뭇잎.mp3"));
        props.setNextBtn(props.nextBtn + 1);
      }}
    >
      <ReactHowler
        src={["바람소리,나뭇잎.mp3"]}
        playing={play}
        loop={false}
        mute={false}
        volume={0.5}
      />
      <h2 className="script">산이 좋겠어</h2>
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
