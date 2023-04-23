import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import nick2 from "../ChapterBoy/data2.json";
import { useSelector } from "react-redux";
import nick2_w from "./wagi_siluoet.json";

const NicknameAnime3 = () => {
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
    } else if (status.userSex === 2) {
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

export default NicknameAnime3;
