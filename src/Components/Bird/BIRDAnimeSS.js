/* eslint-disable */

import React from "react";
import { useDispatch, useSelector } from "react-redux";

const BIRDAnimeSS = () => {
  const status = useSelector((state) => state);

  const chooseMood = () => {
    if (status.cardSelect === 0) {
      return (
        <>
          <h1> 새 애니메이션 (바다)(슬픔)(까마귀 0)</h1>
        </>
      );
    } else if (status.cardSelect === 1) {
      return (
        <>
          <h1> 새 애니메이션 (산)(슬픔)(까마귀 X)</h1>
        </>
      );
    }
  };
  return <div>{chooseMood()}</div>;
};
export default BIRDAnimeSS;
