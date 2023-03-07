import React, { useState } from "react";
import ReactHowler from "../../howler/ReactHowler.js";
import { useSelector, useDispatch } from "react-redux";
import { setSound2 } from "../../index";
import "../../css/HappyText.css";

const Sound3in2 = () => {
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
    >
      <ReactHowler
        src={["Cooper Ave - The Westerlies.mp3"]}
        playing={play}
        loop={false}
        mute={false}
        volume={1.0}
      />
      <p>음악2 뒷면</p>
      <button
        onClick={() => {
          setPlaying(false);
          console.log(status.userInfoArr);
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
          dispatch(setSound2("Cooper Ave - The Westerlies.mp3"));
          dispatch({ type: "index/CSBOY_1001" });
        }}
      >
        저장하기
      </button>
    </div>
  );
};

export default Sound3in2;
