/* eslint-disable */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Player } from "@lottiefiles/react-lottie-player";
import h_s_c_d from "./happy_sea_wata_crikat_default.json";
import s_s_c_d from "./sad_sea_wata_crikat_default.json";
import t_s_c_d from "./thrill_sea_wata_crikat_default.json";
import "../../css/Chapter2.css";

const CKAnimeSF = () => {
  const status = useSelector((state) => state);
  const chooseMood = () => {
    if (
      status.sound1 === "기쁨노래1.mp3" ||
      status.sound1 === "기쁨노래2.mp3"
    ) {
      return (
        <>
          <Player
            className="fadelick1"
            src={h_s_c_d}
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
            className="fadelick1"
            src={s_s_c_d}
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
            className="fadelick1"
            src={t_s_c_d}
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
export default CKAnimeSF;
