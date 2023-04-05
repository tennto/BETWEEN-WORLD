/* eslint-disable */

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactHowler from "../../howler/ReactHowler.js";
import { setSound2 } from "../../index";
import { cardSelect } from "../../index";
import "../../css/Card.css";
import { batch } from "react-redux";

const Sound9in1 = (props) => {
  const status = useSelector((state) => state);
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
        batch(() => {
          dispatch(setSound2("새소리.wav"));
          dispatch({ type: "index/BELLYES_1080" });
          dispatch({ type: "index/BELLYESAnime" });
        });
      }}
    >
      <ReactHowler
        src={["새소리.wav"]}
        playing={play}
        loop={false}
        mute={false}
        volume={0.2}
      />
      <p>음악1 뒷면</p>
      <h1>종소리 O</h1>
    </div>
  );
};

export default Sound9in1;
