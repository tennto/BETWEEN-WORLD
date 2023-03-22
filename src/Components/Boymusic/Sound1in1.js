import React, { useState } from "react";
import ReactHowler from "../../howler/ReactHowler.js";
import { useSelector, useDispatch } from "react-redux";
import { setSound1 } from "../../index";
import "../../css/Card.css";

const Sound1in1 = () => {
  // const status = useSelector((state) => state);
  const dispatch = useDispatch();
  const [play, setPlaying] = useState(false);
  //페이드아웃 함수
  const fadeout = () => {};

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
        dispatch(setSound1("기쁨노래.mp3"));
        dispatch({ type: "index/CSBOY_1001" });
      }}
    >
      <ReactHowler
        src={["기쁨노래1.mp3"]}
        playing={play}
        loop={false}
        mute={false}
        volume={1.0}
      />
      <h2 className="script">
        신난다!
        <br />
        조금은 들뜨는데..?
      </h2>
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
          dispatch(setSound1("example_sound.mp3"));
          dispatch({ type: "index/CSBOY_1001" });
        }}
      >
        저장하기
      </button> */}
    </div>
  );
};

export default Sound1in1;
