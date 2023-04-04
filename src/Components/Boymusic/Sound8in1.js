/* eslint-disable */

import React, { useEffect, useState } from "react";
import ReactHowler from "../../howler/ReactHowler.js";
import { useSelector, useDispatch } from "react-redux";
import { setSound8 } from "../../index";
import { cardSelect } from "../../index";
import "../../css/Card.css";
import { batch } from "react-redux";

const Sound8in1 = (props) => {
  const status = useSelector((state) => state);
  const dispatch = useDispatch();
  const [play, setPlaying] = useState(false);
  var [checkMS, setCheck] = useState("");
  useEffect(() => {
    if (status.sound4 === "산소리.mp3") {
      setCheck("index/BIRDAnimeMH");
    } else if (status.sound4 === "바다소리.mp3") {
      setCheck("index/BIRDAnimeSH");
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
          dispatch(setSound8("새소리.wav"));
          dispatch({ type: checkMS });
          dispatch(cardSelect(0));
        });
        props.setNextBtn(props.nextBtn + 1);
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
      <h1>새소리O</h1>
    </div>
  );
};

export default Sound8in1;
