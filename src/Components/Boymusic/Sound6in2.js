/* eslint-disable */

import React, { useEffect, useState } from "react";
import ReactHowler from "../../howler/ReactHowler.js";
import { useSelector, useDispatch } from "react-redux";
import { setSound6 } from "../../index";
import { cardSelect } from "../../index";
import "../../css/Card.css";
import { batch } from "react-redux";
import tstrait from "../RainTaeRu/tstrait.png";

const Sound6in2 = (props) => {
  const status = useSelector((state) => state);
  const dispatch = useDispatch();
  const [play, setPlaying] = useState(false);
  var [checkMS, setCheck] = useState("");
  useEffect(() => {
    if (status.sound4 === "산소리.mp3") {
      if (
        status.sound1 === "기쁨노래.mp3" ||
        status.sound1 === "기쁨노래2.mp3"
      ) {
        setCheck("index/RTRAnimeMH");
      } else if (
        status.sound1 === "슬픔노래1.mp3" ||
        status.sound1 === "슬픔노래2.mp3"
      ) {
        setCheck("index/RTRAnimeMS");
      } else if (
        status.sound1 === "긴장노래3.mp3" ||
        status.sound1 === "긴장노래1.mp3"
      ) {
        setCheck("index/RTRAnimeMT");
      }
    } else if (status.sound4 === "바다소리.mp3") {
      if (
        status.sound1 === "기쁨노래.mp3" ||
        status.sound1 === "기쁨노래2.mp3"
      ) {
        setCheck("index/RTRAnimeSH");
      } else if (
        status.sound1 === "슬픔노래1.mp3" ||
        status.sound1 === "슬픔노래2.mp3"
      ) {
        setCheck("index/RTRAnimeSS");
      } else if (
        status.sound1 === "긴장노래3.mp3" ||
        status.sound1 === "긴장노래1.mp3"
      ) {
        setCheck("index/RTRAnimeST");
      }
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
          dispatch(setSound6("빗소리.mp3"));
          dispatch(cardSelect(1));
          dispatch({ type: checkMS });
        });
        props.setNextBtn(props.nextBtn + 2);
      }}
    >
      <ReactHowler
        src={["빗소리.mp3"]}
        playing={play}
        loop={false}
        mute={false}
        volume={0.1}
      />
      <img className="terucard" src={tstrait} alt="tstrait" />
      <h2 className="tscript">반듯이 매단다 (약한 빗소리)</h2>
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
          dispatch(setSound5("Cooper Ave - The Westerlies.mp3"));
          props.setNextBtn(props.nextBtn + 1);
        }}
      >
        저장하기
      </button> */}
    </div>
  );
};

export default Sound6in2;
