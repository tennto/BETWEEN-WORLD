/* eslint-disable */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../css/Chapter2.css";
import deco from "../../Components/textdecoration.png";
import chdeco from "./chdeco.png";
import watachat from "./watachat.png";

const MoodSelect = () => {
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
    <div className="CP2_UPPER">
      {/* <div className={"caracterIcon" + changeBox}></div> */}
      {DialogFlow()}
      {/* <button
        className="c2boynextBtn0"
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
    <div className="forFade_b">
      <img className="deco" src={deco} alt="deco" />
      <p className="dialog_oneline">. . .</p>
      <button
        className="c2boynextBtn0"
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
    <div className="forFade_b">
      <img className="deco" src={deco} alt="deco" />
      <img className="watachat" src={watachat} alt="watachat" />
      <p className="dialog_oneline">여긴.. 어디지..?</p>
      <button
        className="c2boynextBtn0"
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
          dispatch({ type: "index/HAPPY_MOOD" });
        }}
        className="CH_BOX"
      >
        <img className="chdeco" src={chdeco} alt="cddeco" />
        <p>
          처음 와보는 곳<br />
          신난다..!
        </p>
      </div>
      <div
        onClick={() => {
          dispatch({ type: "index/SAD_MOOD" });
        }}
        className="CH_BOX"
      >
        <img className="chdeco" src={chdeco} alt="cddeco" />
        <p>
          낯선 곳은 항상
          <br />
          피곤해...
        </p>
      </div>
      <div
        onClick={() => {
          dispatch({ type: "index/THRILL_MOOD" });
        }}
        className="CH_BOX"
      >
        <img className="chdeco" src={chdeco} alt="cddeco" />
        <p>
          도대체 어디지..
          <br />
          긴장돼...
        </p>
      </div>
    </div>
  );
};

export default MoodSelect;