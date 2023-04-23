/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Player } from "@lottiefiles/react-lottie-player";
import g_h_m_t_d from "./happy_san_wagi_teru_default.json";
import g_s_m_t_d from "./sad_san_wagi_teru_default.json";
import g_t_m_t_d from "./thrill_san_wagi_teru_default.json";
import h_m_t_d from "./happy_san_wata_teru_default.json";
import s_m_t_d from "./sad_san_wata_teru_default.json";
import t_m_t_d from "./thrill_san_wata_teru_default.json";
import "../../css/Chapter2.css";

const RTRAnimeMF = () => {
  const status = useSelector((state) => state);

  const chooseMood = () => {
    if (
      status.sound1 === "기쁨노래1.mp3" ||
      status.sound1 === "기쁨노래2.mp3"
    ) {
      if (status.userSex === 1) {
        return (
          <>
            <Player
              className="fadelick1"
              src={h_m_t_d}
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
              src={g_h_m_t_d}
              style={{ width: "1920px" }}
              autoplay={true}
              loop={false}
              speed={1}
            />
          </>
        );
      }
    } else if (
      status.sound1 === "슬픔노래1.mp3" ||
      status.sound1 === "슬픔노래2.mp3"
    ) {
      if (status.userSex === 1) {
        return (
          <>
            <Player
              className="fadelick1"
              src={h_s_t_d}
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
              src={g_s_m_t_d}
              style={{ width: "1920px" }}
              autoplay={true}
              loop={false}
              speed={1}
            />
          </>
        );
      }
    } else if (
      status.sound1 === "긴장노래3.mp3" ||
      status.sound1 === "긴장노래1.mp3"
    ) {
      if (status.userSex === 1) {
        return (
          <>
            <Player
              className="fadelick1"
              src={t_m_t_d}
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
              src={g_t_m_t_d}
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

export default RTRAnimeMF;
