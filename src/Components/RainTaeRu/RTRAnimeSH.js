/* eslint-disable */

import React from "react";
import { useSelector } from "react-redux";

const RTRAnimeSH = () => {
  const status = useSelector((state) => state);

  const chooseMood = () => {
    if (status.cardSelect === 0) {
      return (
        <>
          <h1> 비 애니메이션 (바다)(기쁨)(빗소리 많이)</h1>
        </>
      );
    } else if (status.cardSelect === 1) {
      return (
        <>
          <h1> 비 애니메이션 (바다)(기쁨)(빗소리 적게)</h1>
        </>
      );
    }
  };
  return <div>{chooseMood()}</div>;
};
export default RTRAnimeSH;