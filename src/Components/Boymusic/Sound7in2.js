/* eslint-disable */

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSound7 } from "../../index";
import { cardSelect } from "../../index";
import "../../css/Card.css";
import "../../css/Chapter2.css";
import { batch } from "react-redux";

const Sound7in2 = (props) => {
  const status = useSelector((state) => state);
  const dispatch = useDispatch();
  const [play, setPlaying] = useState(false);
  var [checkMS, setCheck] = useState("");

  const hotfix = () => {
    if (
      status.sound1 === "기쁨노래1.mp3" ||
      status.sound1 === "기쁨노래2.mp3"
    ) {
      return "고개를 가로젓는다 (소리 X)";
    } else {
      return "고개를 끄덕인다 (소리 X)";
    }
  };
  useEffect(() => {
    if (status.sound4 === "산소리.mp3") {
      if (
        status.sound1 === "기쁨노래1.mp3" ||
        status.sound1 === "기쁨노래2.mp3"
      ) {
        setCheck("index/CKAnimeMH");
      } else if (
        status.sound1 === "슬픔노래1.mp3" ||
        status.sound1 === "슬픔노래2.mp3"
      ) {
        setCheck("index/CKAnimeMS");
      } else if (
        status.sound1 === "긴장노래3.mp3" ||
        status.sound1 === "긴장노래1.mp3"
      ) {
        setCheck("index/CKAnimeMT");
      }
    } else if (status.sound4 === "바다소리.mp3") {
      if (
        status.sound1 === "기쁨노래1.mp3" ||
        status.sound1 === "기쁨노래2.mp3"
      ) {
        setCheck("index/CKAnimeSH");
      } else if (
        status.sound1 === "슬픔노래1.mp3" ||
        status.sound1 === "슬픔노래2.mp3"
      ) {
        setCheck("index/CKAnimeSS");
      } else if (
        status.sound1 === "긴장노래3.mp3" ||
        status.sound1 === "긴장노래1.mp3"
      ) {
        setCheck("index/CKAnimeST");
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
          dispatch(setSound7(""));
          dispatch(cardSelect(1));
          dispatch({ type: checkMS });
          dispatch({ type: "index/CK_CASE2" });
        });
        props.setNextBtn(props.nextBtn + 1);
      }}
    >
      <p className="script">{hotfix()}</p>
    </div>
  );
};

export default Sound7in2;
