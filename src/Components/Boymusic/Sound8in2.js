/* eslint-disable */

import React, { useEffect, useState } from "react";
import ReactHowler from "../../howler/ReactHowler.js";
import { useSelector, useDispatch } from "react-redux";
import { setSound8 } from "../../index";
import { cardSelect } from "../../index";
import "../../css/Card.css";
import { batch } from "react-redux";
import HBCard2 from "../Bird/birdcard4.png";

const Sound8in2 = (props) => {
  const status = useSelector((state) => state);
  const dispatch = useDispatch();
  const [play, setPlaying] = useState(false);
  var [checkMH, setCheck] = useState("");
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
      onClick={() => {
        batch(() => {
          dispatch(setSound8(""));
          dispatch({ type: checkMH });
          dispatch(cardSelect(1));
          dispatch({ type: "index/BD_CASE2" });
        });
        props.setNextBtn(props.nextBtn + 2);
      }}
    >
      <img className="HBCard" src={HBCard2} alt="HBCard2" />
      <p className="bscript">하고 싶은 일을 해 (소리 X)</p>
    </div>
  );
};

export default Sound8in2;
