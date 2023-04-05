/* eslint-disable */

import React from "react";
import { useDispatch, useSelector } from "react-redux";

const CKAnimeMT = () => {
  const status = useSelector((state) => state);

  const chooseMood = () => {
    if (status.cardSelect === 0) {
      return (
        <>
          <h1> 귀뚜라미 애니메이션 (산)(긴장)(소리 있음)</h1>
        </>
      );
    } else if (status.cardSelect === 1) {
      return (
        <>
          <h1> 귀뚜라미 애니메이션 (산)(긴장)(소리 없음)</h1>
        </>
      );
    }
  };
  return <div>{chooseMood()}</div>;
};
export default CKAnimeMT;
