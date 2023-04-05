/* eslint-disable */

import React from "react";
import { useDispatch, useSelector } from "react-redux";

const BIRDAnimeSF = () => {
  const status = useSelector((state) => state);

  const chooseMood = () => {
    if (status.sound1 === "기쁨노래.mp3" || status.sound1 === "기쁨노래2.mp3") {
      return (
        <>
          <h1> 새 시작 애니메이션 (바다)(기쁨)</h1>
        </>
      );
    } else if (
      status.sound1 === "슬픔노래1.mp3" ||
      status.sound1 === "슬픔노래2.mp3"
    ) {
      return (
        <>
          <h1> 새 시작 애니메이션 (바다)(슬픔)</h1>
        </>
      );
    } else if (
      status.sound1 === "긴장노래3.mp3" ||
      status.sound1 === "긴장노래1.mp3"
    ) {
      return (
        <>
          <h1> 새 시작 애니메이션 (바다)(긴장)</h1>
        </>
      );
    }
  };
  return <div>{chooseMood()}</div>;
};
export default BIRDAnimeSF;
