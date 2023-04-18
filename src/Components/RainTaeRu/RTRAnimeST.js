/* eslint-disable */

import React from "react";
import { useSelector } from "react-redux";
import { Player } from "@lottiefiles/react-lottie-player";
import t_b_t_s from "./thrill_sea_wata_teru_strait.json";
import t_b_t_r from "./thrill_sea_wata_teru_reverse.json";
import "../../css/Chapter2.css";

const RTRAnimeST = () => {
  const status = useSelector((state) => state);

  const chooseMood = () => {
    if (status.cardSelect === 0) {
      return (
        <>
          <Player
            className="fadelick1"
            src={t_b_t_r}
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
            className="fadelick1"
            src={t_b_t_s}
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
export default RTRAnimeST;
