/* eslint-disable */

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactHowler from "../../howler/ReactHowler.js";
import { setSound2 } from "../../index";
import { cardSelect } from "../../index";
import "../../css/Card.css";
import { batch } from "react-redux";

const Sound9in3 = (props) => {
  const status = useSelector((state) => state);
  const dispatch = useDispatch();
  const [play, setPlaying] = useState(false);
  // let [name, setName] = useState("");

  // useEffect(() => {
  //   if (
  //     status.sound1 === "긴장노래1.mp3" ||
  //     status.sound1 === "긴장노래3.mp3"
  //   ) {
  //     setName("종소리.mp3");
  //   } else {
  //     setName("풍경소리.wav");
  //   }
  // }, []);

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
          dispatch(setSound2("종소리.mp3"));
          dispatch({ type: "index/BELLYES_1080" });
          dispatch({ type: "index/BELLYESAnime" });
        });
      }}
    >
      <ReactHowler
        src={["종소리.mp3"]}
        playing={play}
        loop={false}
        mute={false}
        volume={0.1}
      />
      <p className="bellscript">눈을 뜬다 (소리 O)</p>
    </div>
  );
};

export default Sound9in3;
