/* eslint-disable */

import React from "react";
import { useDispatch, useSelector } from "react-redux";

const BIRDAnimeMH = () => {
  const status = useSelector((state) => state);

  const chooseMood = () => {
    if (status.cardSelect === 0) {
      return (
        <>
          <h1> 새 애니메이션 (산)(기쁨)(새소리 0)</h1>
        </>
      );
    } else if (status.cardSelect === 1) {
      return (
        <>
          <h1> 새 애니메이션 (산)(기쁨)(새소리 X)</h1>
        </>
      );
    }
  };
  return <div>{chooseMood()}</div>;
};
export default BIRDAnimeMH;
