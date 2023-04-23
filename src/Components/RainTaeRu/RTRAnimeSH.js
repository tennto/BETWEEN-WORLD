/* eslint-disable */

import React from "react";
import { useSelector } from "react-redux";
import { Player } from "@lottiefiles/react-lottie-player";
import h_b_t_s from "./happy_sea_wata_teru_strait.json";
import h_b_t_r from "./happy_sea_wata_teru_reverse.json";
import g_h_b_t_s from "./happy_sea_wagi_teru_strait.json";
import g_h_b_t_r from "./happy_sea_wagi_teru_reverse.json";
import "../../css/Chapter2.css";

const RTRAnimeSH = () => {
  const status = useSelector((state) => state);

  const chooseMood = () => {
    if (status.cardSelect === 0) {
      if (status.userSex === 1) {
        return (
          <>
            <Player
              className="fadelick1"
              src={h_b_t_r}
              style={{ width: "1920px" }}
              autoplay={true}
              loop={false}
              speed={1}
            />
          </>
        );
      } else {
        return (
          <>
            <Player
              className="fadelick1"
              src={g_h_b_t_r}
              style={{ width: "1920px" }}
              autoplay={true}
              loop={false}
              speed={1}
            />
          </>
        );
      }
    } else if (status.cardSelect === 1) {
      if (status.userSex === 1) {
        return (
          <>
            <Player
              className="fadelick1"
              src={h_b_t_s}
              style={{ width: "1920px" }}
              autoplay={true}
              loop={false}
              speed={1}
            />
          </>
        );
      } else {
        return (
          <>
            <Player
              className="fadelick1"
              src={g_h_b_t_s}
              style={{ width: "1920px" }}
              autoplay={true}
              loop={false}
              speed={1}
            />
          </>
        );
      }
    }
  };
  return <div>{chooseMood()}</div>;
};
export default RTRAnimeSH;
