import React from "react";
import { useDispatch, useSelector } from "react-redux";
import wataHappyEnding from "./wata_happyEnding.png";
import wataSadEnding from "./wata_sadEnding.png";
import wataThrillEnding from "./wata_thrillEnding.png";
import wagiHappyEnding from "./wagi_happyEnding.png";
import wagiSadEnding from "./wagi_sadEnding.png";
import wagiThrillEnding from "./wagi_thrillEnding.png";
import "./ending.css";

const BELLNoAnime = () => {
  const status = useSelector((state) => state);
  const chooseMood = () => {
    if (
      status.sound1 === "기쁨노래1.mp3" ||
      status.sound1 === "기쁨노래2.mp3"
    ) {
      if (status.moodSelect === 1090) {
        return (
          <>
            <img className="endingPic" src={wataHappyEnding} alt="wataHE" />
          </>
        );
      } else if (status.moodSelect === 2090) {
        return (
          <>
            <img className="endingPic" src={wagiHappyEnding} alt="wagiHE" />
          </>
        );
      }
    } else if (
      status.sound1 === "슬픔노래1.mp3" ||
      status.sound1 === "슬픔노래2.mp3"
    ) {
      if (status.moodSelect === 1090) {
        return (
          <>
            <img className="endingPic" src={wataSadEnding} alt="wataSE" />
          </>
        );
      } else if (status.moodSelect == 2090) {
        return (
          <>
            <img className="endingPic" src={wagiSadEnding} alt="wagiSE" />
          </>
        );
      }
    } else if (
      status.sound1 === "긴장노래3.mp3" ||
      status.sound1 === "긴장노래1.mp3"
    ) {
      if (status.moodSelect === 1090) {
        return (
          <>
            <img className="endingPic" src={wataThrillEnding} alt="wataTE" />
          </>
        );
      } else {
        return (
          <>
            <img className="endingPic" src={wagiThrillEnding} alt="wagiTE" />
          </>
        );
      }
    }
  };
  return <div>{chooseMood()}</div>;
};
export default BELLNoAnime;
