/* eslint-disable */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Player } from "@lottiefiles/react-lottie-player";
import h_m_c_1 from "./happy_san_crikat_love.json";
import h_m_c_2 from "./happy_san_wata_crikat_run.json";
import "../../css/Chapter2.css";

const CKAnimeMH = () => {
  const status = useSelector((state) => state);

  const chooseMood = () => {
    if (status.cardSelect === 0) {
      return (
        <>
          <Player
            className="fadelick"
            src={h_m_c_1}
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
            src={h_m_c_2}
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
export default CKAnimeMH;
