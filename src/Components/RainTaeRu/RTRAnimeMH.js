import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Player } from "@lottiefiles/react-lottie-player";
import h_m_t_s from "./happy_san_teru_strait.json";
import h_m_t_r from "./happy_san_wata_teru_reverse.json";
import "../../css/Chapter2.css";

const RTRAnimeMH = () => {
  const status = useSelector((state) => state);

  const chooseMood = () => {
    if (status.cardSelect === 0) {
      return (
        <>
          <Player
            className="fadelick"
            src={h_m_t_r}
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
            src={h_m_t_s}
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
export default RTRAnimeMH;
