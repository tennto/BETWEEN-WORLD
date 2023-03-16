import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Nickname.css";
import { setName } from "../../index";
import ChapterBoy from "../ChapterBoy/ChapterBoy";
import deco from "../../Components/textdecoration.png";
import decoinput from "./inputdeco.png";
import sexdeco from "./sexdeco.png";
import wata1 from "./wata1.png";
import wagi1 from "./wagi1.png";

const Nickname = () => {
  const status = useSelector((state) => state);
  const dispatch = useDispatch();
  let [nextBtn, setNextBtn] = useState(1);
  let [changeBox, setChangeBox] = useState(0);

  console.log(nextBtn);

  const textFlow = () => {
    if (nextBtn === 1) {
      return <Dialog0 />;
    } else if (nextBtn === 2) {
      return <Dialog1 />;
    } else if (nextBtn === 3) {
      return <Dialog2 />;
    } else if (nextBtn === 4) {
      return <Dialog3 nextBtn={nextBtn} setNextBtn={setNextBtn} />;
    } else if (nextBtn === 5) {
      return <Dialog4 />;
    } else if (nextBtn === 6) {
      setTimeout(() => {
        setChangeBox(1);
      }, 10);
      return <Dialog5 />;
    }
  };
  //이름 입력할 때 버튼 없애는 함수
  const btnDelete = () => {
    if (nextBtn === 4) {
      return "";
    } else {
      return (
        <button
          className={"NnextBtn" + changeBox}
          onClick={() => {
            setNextBtn(nextBtn + 1);
          }}
        >
          다음
        </button>
      );
    }
  };

  return (
    <div className="nicknameBox">
      {/* <div className={"caracterIcon" + changeBox}></div> */}
      {textFlow()}
      {btnDelete()}
    </div>
  );
};

const Dialog0 = () => {
  return (
    <div className="forFade">
      <img className="deco" src={deco} alt="deco" />
      <h3 className="dialog_oneline">알 수 없는 곳에 도착하였습니다</h3>
    </div>
  );
};

const Dialog1 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "index/PLUS_STATE1" });
  }, []);
  return (
    <div className="forFade">
      <img className="deco" src={deco} alt="deco" />
      <h3 className="dialog_oneline">캐릭터 실루엣 등장</h3>
    </div>
  );
};

const Dialog2 = () => {
  return (
    <div className="forFade">
      <img className="deco" src={deco} alt="deco" />
      <h3 className="dialog_oneline">. . .</h3>
    </div>
  );
};

const Dialog3 = (props) => {
  const status = useSelector((state) => state);
  const name = React.useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "index/PLUS_STATE2" });
  }, []);

  return (
    <div className="forFade">
      <img className="deco" src={deco} alt="deco" />
      <h3 className="dialog_oneline">당신의 이름은..?</h3>
      <div className="nicknameDiv">
        <img className="decoinput" src={decoinput} alt="decoinp" />
        <p className="notice_input">닉네임을 입력해주세요</p>
        <input ref={name} className="nicknameInput" />
        <button
          className="inputBtn"
          onClick={() => {
            dispatch(setName(name.current.value));
            console.log(status.userName);
            props.setNextBtn(props.nextBtn + 1);
          }}
        >
          입력하기
        </button>
      </div>
    </div>
  );
};
const Dialog4 = () => {
  const status = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "index/PLUS_STATE3" });
  }, []);
  return (
    <div className="forFade">
      <img className="deco" src={deco} alt="deco" />
      <h3 className="dialog_oneline">{status.userName} (이)라고 하는구나..?</h3>
    </div>
  );
};
const Dialog5 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "index/PLUS_STATE4" });
  }, []);

  return (
    <div className="sexBox">
      <button
        className="choiceSex"
        onClick={() => {
          dispatch({ type: "index/STORY_NO2" });
        }}
      >
        <img className="wata1" src={wata1} alt="wata1" />
        <p className="sexText">남자</p>
        <img className="sexdeco" src={sexdeco} alt="sexdeco" />
      </button>
      <button
        className="choiceSex"
        onClick={() => {
          dispatch({ type: "index/STORY_NO3" });
        }}
      >
        <img className="wagi1" src={wagi1} alt="wagi1" />
        <p className="sexText">여자</p>
        <img className="sexdeco" src={sexdeco} alt="sexdeco" />
      </button>
    </div>
  );
};

export default Nickname;
