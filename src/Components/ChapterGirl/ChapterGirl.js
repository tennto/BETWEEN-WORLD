/* eslint-disable */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../css/ChapterGirl.css";
import deco from "../textdecoration.png";
import chdeco from "../ChapterBoy/chdeco.png";
import wagichat from "./wagichat.png";

const ChapterGirl = () => {
  const dispatch = useDispatch();
  let [nextBtn, setNextBtn] = useState(0);
  let [changeBox, setChangeBox] = useState(0);

  const DialogFlow = () => {
    if (nextBtn === 0) {
      return <Dialog0 nextBtn={nextBtn} setNextBtn={setNextBtn} />;
    } else if (nextBtn === 1) {
      return <Dialog1 nextBtn={nextBtn} setNextBtn={setNextBtn} />;
    } else if (nextBtn === 2) {
      setTimeout(() => {
        setChangeBox(1);
      }, 10);
      return <Dialog2 />;
    }
  };

  return (
    <div className="CP2_UPPER_G">
      {/* <div className={"caracterIcon_G" + changeBox}></div> */}
      {DialogFlow()}
      {/* <button
        className="nextBtn0"
        onClick={() => {
          setNextBtn(nextBtn + 1);
        }}
      >
        다음
      </button> */}
    </div>
  );
};

const Dialog0 = (props) => {
  return (
    <div className="forFade">
      <img className="deco" src={deco} alt="deco2" />
      <p className="dialog_oneline">. . .</p>
      <button
        className="nextBtn0"
        onClick={() => {
          props.setNextBtn(props.nextBtn + 1);
        }}
      >
        다음
      </button>
    </div>
  );
};

const Dialog1 = (props) => {
  return (
    <div className="forFade">
      <img className="deco" src={deco} alt="deco2" />
      <img className="wagichat" src={wagichat} alt="wagichat" />
      <p className="dialog_oneline">여긴.. 어디지..?</p>
      <button
        className="nextBtn0"
        onClick={() => {
          props.setNextBtn(props.nextBtn + 1);
        }}
      >
        다음
      </button>
    </div>
  );
};

const Dialog2 = () => {
  const status = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className="forFade_mood">
      <div
        onClick={() => {
          dispatch({ type: "index/HAPPY_MOOD_G" });
        }}
        className="CH_BOX"
      >
        <img className="chdeco" src={chdeco} alt="chdeco_2" />
        <p>
          처음 와보는 곳<br />
          신난다..!
        </p>
      </div>
      <div
        onClick={() => {
          dispatch({ type: "index/SAD_MOOD_G" });
        }}
        className="CH_BOX"
      >
        <img className="chdeco" src={chdeco} alt="chdeco_2" />
        <p>
          낯선 곳은 항상
          <br />
          피곤해...
        </p>
      </div>
      <div
        onClick={() => {
          dispatch({ type: "index/THRILL_MOOD_G" });
        }}
        className="CH_BOX"
      >
        <img className="chdeco" src={chdeco} alt="chdeco_2" />
        <p>
          도대체 어디지..
          <br />
          긴장돼...
        </p>
      </div>
    </div>
  );
};

export default ChapterGirl;
