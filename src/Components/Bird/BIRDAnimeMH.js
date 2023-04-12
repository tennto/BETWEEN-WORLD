/* eslint-disable */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Player } from "@lottiefiles/react-lottie-player";
import h_m_b_c from "./happy_san_wata_bird_cry.json";
import h_m_b_s from "./happy_san_wata_bird_smile.json";
import "../../css/Chapter2.css";

const BIRDAnimeMH = () => {
  const status = useSelector((state) => state);

  const chooseMood = () => {
    if (status.cardSelect === 0) {
      return (
        <>
          <Player
            className="fadelick"
            src={h_m_b_c}
            style={{ width: "1920px" }}
            autoplay={true}
            loop={false}
            speed={1}
          />
        </>
      );
    } else if (status.cardSelect === 1) {
      return (
        <>
          <Player
            className="fadelick"
            src={h_m_b_s}
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
export default BIRDAnimeMH;
