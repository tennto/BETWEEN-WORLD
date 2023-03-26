/* eslint-disable */

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSound7 } from "../../index";
import "../../css/Card.css";
import "../../css/Chapter2.css";
const Sound7in2 = (props) => {
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
        dispatch(setSound7(""));
        props.setNextBtn(props.nextBtn + 1);
      }}
    >
      <h2 className="script">고개를 가로젓는다</h2>
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

export default Sound7in2;
