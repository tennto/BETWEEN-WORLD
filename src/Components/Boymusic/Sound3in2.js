/* eslint-disable */
import React, { useEffect, useState } from "react";
import ReactHowler from "../../howler/ReactHowler.js";
import { useSelector, useDispatch } from "react-redux";
import { setSound1 } from "../../index";
import "../../css/Card.css";
import { batch } from "react-redux";

const Sound3in2 = () => {
  const status = useSelector((state) => state);
  const dispatch = useDispatch();
  const [play, setPlaying] = useState(false);
  var [checkMS, setCheck] = useState("");
  useEffect(() => {
    if (status.sound4 === "산소리.mp3") {
      setCheck("index/RTRAnimeMF");
    } else if (status.sound4 === "바다소리.mp3") {
      setCheck("index/RTRAnimeSF");
    }
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
        batch(() => {
          dispatch(setSound1("긴장노래1.mp3"));
          dispatch({ type: "index/RTR_1040" });
          dispatch({ type: checkMS });
        });
      }}
    >
      <ReactHowler
        src={["긴장노래1.mp3"]}
        playing={play}
        loop={false}
        mute={false}
        volume={1.0}
      />
      <h2 className="script">
        도망치고 싶어..!
        <br />
        원래 있던 곳으로..
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
          dispatch(setSound3("Cooper Ave - The Westerlies.mp3"));
          dispatch({ type: "index/CSBOY_1001" });
        }}
      >
        저장하기
      </button> */}
    </div>
  );
};

export default Sound3in2;
