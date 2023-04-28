/* eslint-disable */
import React, { useEffect, useState } from "react";
import ReactHowler from "../../howler/ReactHowler.js";
import { useSelector, useDispatch } from "react-redux";
import { setSound8 } from "../../index";
import { cardSelect } from "../../index";
import "../../css/Card.css";
import { batch } from "react-redux";
import SBCard1 from "../Bird/birdcard2.png";

const Sound8in3 = (props) => {
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
          dispatch(setSound8("부엉이.mp3"));
          dispatch({ type: checkMS });
          dispatch(cardSelect(0));
        });
        props.setNextBtn(props.nextBtn + 1);
      }}
    >
      <ReactHowler
        src={["부엉이.mp3"]}
        playing={play}
        loop={false}
        mute={false}
        volume={0.2}
      />
      <img className="HBCard1" src={SBCard1} alt="SBCard1" />
      <p className="bscript">해야만 하는 일을 해 (소리 O)</p>
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
          dispatch(setSound5("The Quiet Aftermath - Sir Cubworth.mp3"));
          props.setNextBtn(props.nextBtn + 1);
        }}
      >
        저장하기
      </button> */}
    </div>
  );
};

export default Sound8in3;
