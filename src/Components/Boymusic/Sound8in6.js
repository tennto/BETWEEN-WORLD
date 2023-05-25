/* eslint-disable */

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSound8 } from "../../index";
import { cardSelect } from "../../index";
import "../../css/Card.css";
import { batch } from "react-redux";
import TBCard2 from "../Bird/birdcard6.png";

const Sound8in6 = (props) => {
  const status = useSelector((state) => state);
  const dispatch = useDispatch();
  var [checkMS, setCheck] = useState("");
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
      onClick={() => {
        batch(() => {
          dispatch(setSound8(""));
          dispatch({ type: checkMS });
          dispatch(cardSelect(1));
          dispatch({ type: "index/BD_CASE2" });
        });
        props.setNextBtn(props.nextBtn + 2);
      }}
    >
      <img className="HBCard2" src={TBCard2} alt="TBCard2" />
      <p className="bscript">하고 싶은 일을 해 (소리 X)</p>
    </div>
  );
};

export default Sound8in6;
