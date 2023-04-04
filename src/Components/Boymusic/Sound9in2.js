/* eslint-disable */

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSound2 } from "../../index";
import { cardSelect } from "../../index";
import "../../css/Card.css";
import { batch } from "react-redux";

const Sound9in2 = (props) => {
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
          dispatch(setSound2(""));
          dispatch({ type: "index/BELLNO_1090" });
          dispatch({ type: "index/BELLNOAnime" });
        });
      }}
    >
      <p>음악2 뒷면</p>
      <h1>종소리 X</h1>
    </div>
  );
};

export default Sound9in2;
