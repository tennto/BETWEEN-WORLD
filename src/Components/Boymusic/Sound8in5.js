/* eslint-disable */

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactHowler from "../../howler/ReactHowler";
import { setSound8 } from "../../index";
import { cardSelect } from "../../index";
import "../../css/Card.css";
import { batch } from "react-redux";
import TBCard1 from "../Bird/birdcard3.png";

const Sound8in5 = (props) => {
  const status = useSelector((state) => state);
  const dispatch = useDispatch();
  const [play, setPlaying] = useState(false);
  var [checkMT, setCheck] = useState("");
  useEffect(() => {
    if (status.sound4 === "산소리.mp3") {
      setCheck("index/BIRDAnimeMT");
    } else if (status.sound4 === "바다소리.mp3") {
      setCheck("index/BIRDAnimeST");
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
          dispatch({ type: checkMT });
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
      <img className="HBCard1" src={TBCard1} alt="TBCard1" />
      <p>해야만 하는 일을 해 (소리 O)</p>
    </div>
  );
};

export default Sound8in5;
