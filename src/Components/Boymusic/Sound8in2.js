/* eslint-disable */

import React, { useEffect, useState } from "react";
import ReactHowler from "../../howler/ReactHowler.js";
import { useSelector, useDispatch } from "react-redux";
import { setSound8 } from "../../index";
import { cardSelect } from "../../index";
import "../../css/Card.css";
import { batch } from "react-redux";

const Sound8in2 = (props) => {
  const status = useSelector((state) => state);
  const dispatch = useDispatch();
  const [play, setPlaying] = useState(false);
  var [checkMS, setCheck] = useState("");
  useEffect(() => {
    if (status.sound4 === "산소리.mp3") {
      setCheck("index/BIRDAnimeMS");
    } else if (status.sound4 === "바다소리.mp3") {
      setCheck("index/BIRDAnimeSS");
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
          dispatch(setSound8("까마귀.wav"));
          dispatch({ type: checkMS });
          dispatch(cardSelect(0));
        });
        props.setNextBtn(props.nextBtn + 1);
      }}
    >
      <ReactHowler
        src={["까마귀.wav"]}
        playing={play}
        loop={false}
        mute={false}
        volume={0.2}
      />
      <p>해야만 하는 일을 해 (소리 O)</p>
    </div>
  );
};

export default Sound8in2;
