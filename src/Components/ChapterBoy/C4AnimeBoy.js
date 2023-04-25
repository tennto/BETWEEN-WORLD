/* eslint-disable */

import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import WSTM from "./wata_swap_to_san.json";
import GSTM from "./wagi_swap_to_san.json";
import WSTS from "./wata_swap_to_sea.json";
import GSTS from "./wagi_swap_to_sea.json";
import { useSelector } from "react-redux";

const C4AnimeBoy = () => {
  const status = useSelector((state) => state);
  const swapImg = () => {
    if (status.sound4 === "산소리.mp3") {
      if (status.userSex === 1) {
        return (
          <>
            <Player
              className="fadelick1"
              src={WSTM}
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
              src={GSTM}
              style={{ width: "1920px" }}
              autoplay={true}
              loop={false}
              speed={1}
            />
          </>
        );
      }
    } else if (status.sound4 === "바다소리.mp3") {
      if (status.userSex === 1) {
        return (
          <>
            <Player
              className="fadelick1"
              src={WSTS}
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
              src={GSTS}
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
  return <>{swapImg()}</>;
};

export default C4AnimeBoy;
