/* eslint-disable */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { batch } from "react-redux";
import Sound4in2 from "../Boymusic/Sound4in2";
import Sound4in1 from "../Boymusic/Sound4in1";
import "../../css/Chapter2.css";
import "../../css/Card.css";
import deco from "../textdecoration.png";
import carddeco from "../carddeco.png";
import carddecoback from "../carddecoback.png";
import coverdeco from "../backdeco.png";
import watachat from "./watachat.png";
import bnchat from "../bnchat.png";

const SeaOrMountain = () => {
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
      return <Dialog2 nextBtn={nextBtn} setNextBtn={setNextBtn} />;
    } else if (nextBtn === 3) {
      return <Dialog3 />;
    }
  };

  return (
    <div className="CP2_UPPER">
      {/* <div className={"caracterIcon" + changeBox}></div> */}
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
    <div className="forFade_g">
      <img className="deco" src={deco} alt="deco_som" />
      <img className="bnchat" src={bnchat} alt="bnchat" />
      <p className="dialog_oneline">
        어진 이는 산을 좋아하고, 지혜로운 자는 바다를 좋아한다고 했다.
      </p>
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
    <div className="forFade_g">
      <img className="deco" src={deco} alt="deco_som" />
      <img className="bnchat" src={bnchat} alt="bnchat" />
      <p className="dialog_oneline">너는 어느 쪽?</p>
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

const Dialog2 = (props) => {
  const status = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="fadelick">
      <div className="wrap">
        <div className="card">
          <div className="card-front">
            <img className="carddeco" src={carddeco} alt="carddeco1" />
            <img className="coverdeco" src={coverdeco} alt="coverdeco" />
          </div>
          <div className="card-back">
            {/* <img className="carddeco" src={carddecoback} alt="carddeco1" /> */}
            <Sound4in1 {...props} />
          </div>
        </div>
      </div>
      <div className="wrap2">
        <div className="card2">
          <div className="card-front2">
            <img className="carddeco" src={carddeco} alt="carddeco1" />
            <img className="coverdeco" src={coverdeco} alt="coverdeco" />
          </div>
          <div className="card-back2">
            {/* <img className="carddeco" src={carddecoback} alt="carddeco1" /> */}
            <Sound4in2 {...props} />
          </div>
        </div>
      </div>
    </div>
  );
};

const Dialog3 = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state);
  useEffect(() => {
    setTimeout(() => {
      batch(() => {
        dispatch({ type: "index/MOOD_SELECT" });
        dispatch({ type: "index/MOODAnime" });
      });
    }, 3000);
  }, [dispatch]);

  const setText = () => {
    if (status.sound4 === "산소리.mp3") {
      return "어디선가 나무가 스산거리는 소리가 들려오기 시작했다...";
    } else {
      return "어디선가 파도소리가 들려오기 시작했다...";
    }
  };

  return (
    <div className="forFade_b">
      <img className="deco" src={deco} alt="deco_som" />
      {/* <img className="bnchat" src={bnchat} alt="bnchat" /> */}
      <p className="dialog_oneline">{setText()}</p>
    </div>
  );
};

export default SeaOrMountain;
