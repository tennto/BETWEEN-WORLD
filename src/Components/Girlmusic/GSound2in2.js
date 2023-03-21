import React, { useState } from "react";
import ReactHowler from "../../howler/ReactHowler.js";
import { useSelector, useDispatch } from "react-redux";
import { setSound2 } from "../../index";
import "../../css/Card.css";

const GSound2in2 = () => {
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
        dispatch(setSound2("Elegy - Wayne Jones.mp3"));
        dispatch({ type: "index/CSGIRL_1401" });
      }}
    >
      <ReactHowler
        src={["Elegy - Wayne Jones.mp3"]}
        playing={play}
        loop={false}
        mute={false}
        volume={1.0}
      />
      <h2 className="script">
        어느 누구와도
        <br />
        대화하고싶지않아..
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
          dispatch(setSound2("Elegy - Wayne Jones.mp3"));
          dispatch({ type: "index/CSGIRL_1401" });
        }}
      >
        저장하기
      </button> */}
    </div>
  );
};

export default GSound2in2;
