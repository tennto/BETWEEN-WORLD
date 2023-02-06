import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Nickname.css";
import gonguh from "./gonguh.png";
import wagi from "./girl.png";

const Nickname = () => {
  const status = useSelector((state) => state);
  const dispatch = useDispatch();
  let [nextBtn, setNextBtn] = useState(1);

  const goToSelect = () => {
    dispatch({ type: "NNAME_NEXT1" });
  };

  const textFlow = () => {
    if (nextBtn === 1) {
      console.log(nextBtn);
      return (
        <>
          <h3 className="dialog">여긴 꿈세계와 현실세계 사이의 틈..</h3>
          <img className="gonguh" src={gonguh} alt="gonguh" />
        </>
      );
    } else if (nextBtn === 2) {
      console.log(nextBtn);
      return (
        <>
          <h3 className="dialog">(여긴 어디지..?)</h3>
          <img className="wagi" src={wagi} alt="wagi" />
        </>
      );
    } else if (nextBtn === 3) {
      console.log(nextBtn);
      return <h3 className="dialog">닉네임 세번째 대화</h3>;
    } else if (nextBtn === 4) {
      setTimeout(function () {
        goToSelect();
      }, 1);
    }
  };

  return (
    <div className="nicknameBox">
      <div className="caracterIcon"></div>
      {textFlow()}
      <button
        className="nextBtn"
        onClick={() => {
          setNextBtn(nextBtn + 1);
        }}
      >
        다음
      </button>
    </div>
  );
};

export default Nickname;
