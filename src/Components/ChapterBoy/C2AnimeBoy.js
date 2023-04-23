/* eslint-disable */

import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import nick2 from "./data2.json";
import "../Nickname/Anime1.css";
import { useSelector } from "react-redux";
import nick2_w from "../Nickname/wagi_siluoet.json";

const C2AnimeBoy = () => {
  const status = useSelector((state) => state);
  const chooseMood = () => {
    if (status.userSex === 1) {
      return (
        <>
          <Player
            src={nick2}
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
            src={nick2_w}
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

export default C2AnimeBoy;
