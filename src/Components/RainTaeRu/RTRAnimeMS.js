/* eslint-disable */

import React from "react";
import { useSelector } from "react-redux";
import { Player } from "@lottiefiles/react-lottie-player";
import s_m_t_s from "./sad_san_wata_teru_strait.json";
import s_m_t_r from "./sad_san_wata_teru_reverse.json";
import g_s_m_t_s from "./sad_san_wagi_teru_strait.json";
import g_s_m_t_r from "./sad_san_wagi_teru_reverse.json";
import "../../css/Chapter2.css";

const RTRAnimeMS = () => {
  const status = useSelector((state) => state);

  const chooseMood = () => {
    if (status.cardSelect === 0) {
      if (status.userSex === 1) {
        return (
          <>
            <Player
              className="fadelick1"
              src={s_m_t_r}
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
              src={g_s_m_t_r}
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
              src={s_m_t_s}
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
              src={g_s_m_t_s}
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

export default RTRAnimeMS;
