/* eslint-disable */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Player } from "@lottiefiles/react-lottie-player";
import h_m_c_d from "./happy_san_wata_crikat_default.json";
import s_m_c_d from "./sad_san_wata_crikat_default.json";
import t_m_c_d from "./thrill_san_wata_crikat_default.json";
import "../../css/Chapter2.css";

const CKAnimeMF = () => {
  const status = useSelector((state) => state);

  const chooseMood = () => {
    if (status.sound1 === "기쁨노래.mp3" || status.sound1 === "기쁨노래2.mp3") {
      return (
        <>
          <Player
            className="fadelick"
            src={h_m_c_d}
            style={{ width: "1920px" }}
            autoplay={true}
            loop={false}
            speed={1}
          />
        </>
      );
    } else if (
      status.sound1 === "슬픔노래1.mp3" ||
      status.sound1 === "슬픔노래2.mp3"
    ) {
      return (
        <>
          <Player
            className="fadelick"
            src={s_m_c_d}
            style={{ width: "1920px" }}
            autoplay={true}
            loop={false}
            speed={1}
          />
        </>
      );
    } else if (
      status.sound1 === "긴장노래3.mp3" ||
      status.sound1 === "긴장노래1.mp3"
    ) {
      return (
        <>
          <Player
            className="fadelick"
            src={t_m_c_d}
            style={{ width: "1920px" }}
            autoplay={true}
            loop={false}
            speed={1}
          />
        </>
      );
    }
  };
  return <div>{chooseMood()}</div>;
};

export default CKAnimeMF;
