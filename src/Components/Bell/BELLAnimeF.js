import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Player } from "@lottiefiles/react-lottie-player";
import wagi_ending1 from "./wagi_ending.json";
import wata_ending1 from "./wata_ending.json";
import { HttpStatusCode } from "axios";

const BELLAnimeF = () => {
  const status = useSelector((state) => state);
  const sexInfo = () => {
    if (status.userSex === 1) {
      return (
        <>
          <Player
            src={wata_ending1}
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
            src={wagi_ending1}
            style={{ width: "1920px" }}
            autoplay={true}
            loop={false}
            speed={1}
          />
        </>
      );
    }
  };
  return <>{sexInfo()}</>;
};
export default BELLAnimeF;
