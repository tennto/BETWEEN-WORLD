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
      return <Dialog0 />;
    } else if (nextBtn === 2) {
      console.log(nextBtn);
      return <Dialog1 />;
    } else if (nextBtn === 3) {
      console.log(nextBtn);
      return <Dialog2 />;
    } else if (nextBtn === 4) {
      console.log(nextBtn);
      return <Dialog3 />;
    } else if (nextBtn === 5) {
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

const Dialog0 = () => {
  return (
    <>
      <h3 className="dialog_wagi1">
        음...
        <br />
        (알 수 없는 곳에서 눈을 뜬 주인공, 정처없이 걷는다){" "}
      </h3>
      <img className="wagi" src={wagi} alt="wagi" />
    </>
  );
};

const Dialog1 = () => {
  return (
    <>
      <h3 className="dialog_oneline">
        (알 수 없는 존재를 마주치고, 그것은 말을 걸어온다)
      </h3>
      <img className="gonguh" src={gonguh} alt="gonguh" />
    </>
  );
};

const Dialog2 = () => {
  return (
    <>
      <h3 className="dialog_oneline">너는 누구지?</h3>
      <img className="gonguh" src={gonguh} alt="gonguh" />
    </>
  );
};

const Dialog3 = () => {
  return (
    <>
      <h3 className="dialog_oneline">내가 너를 어떻게 정의해야 하지?</h3>

      <img className="gonguh" src={gonguh} alt="gonguh" />
    </>
  );
};

export default Nickname;
