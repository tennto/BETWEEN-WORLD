/* eslint-disable */

import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import data3 from "./data3.json";
import data3_w from "./wagi_bn_meet.json";
import { useSelector } from "react-redux";

const C3AnimeBoy = () => {
  const status = useSelector((state) => state);
  const chooseMood = () => {
    if (status.userSex === 1) {
      return (
        <>
          <Player
            src={data3}
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
            src={data3_w}
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

export default C3AnimeBoy;
