import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Player } from "@lottiefiles/react-lottie-player";
import wata_ending1 from "./wata_ending.json";

const BELLAnimeF = () => {
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
};
export default BELLAnimeF;
