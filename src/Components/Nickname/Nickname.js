/* eslint-disable */

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Nickname.css";
import { setName } from "../../index";
import deco from "../../Components/textdecoration.png";
import decoinput from "./inputdeco.png";
import sexdeco from "./sexdeco.png";
import wata1 from "./wata1.png";
import wagi1 from "./wagi1.png";
import watamotion from "./watamotion.json";
import { Player } from "@lottiefiles/react-lottie-player";

const Nickname = () => {
  const status = useSelector((state) => state);
  const dispatch = useDispatch();
  let [nextBtn, setNextBtn] = useState(1);
  let [changeBox, setChangeBox] = useState(1);

  const textFlow = () => {
    if (nextBtn === 1) {
      return <Dialog0 nextBtn={nextBtn} setNextBtn={setNextBtn} />;
    } else if (nextBtn === 2) {
      return <Dialog1 nextBtn={nextBtn} setNextBtn={setNextBtn} />;
    } else if (nextBtn === 3) {
      return <Dialog2 nextBtn={nextBtn} setNextBtn={setNextBtn} />;
    } else if (nextBtn === 4) {
      return <Dialog3 nextBtn={nextBtn} setNextBtn={setNextBtn} />;
    } else if (nextBtn === 5) {
      return <Dialog4 nextBtn={nextBtn} setNextBtn={setNextBtn} />;
    } else if (nextBtn === 6) {
      setTimeout(() => {
        setChangeBox(1);
      }, 10);
      return <Dialog5 />;
    }
  };
  //이름 입력할 때 버튼 없애는 함수
  // const btnDelete = () => {
  //   if (nextBtn === 4) {
  //     return "";
  //   } else {
  //     return (
  //       <button
  //         className={"NnextBtn" + changeBox}
  //         onClick={() => {
  //           setNextBtn(nextBtn + 1);
  //         }}
  //       >
  //         다음
  //       </button>
  //     );
  //   }
  // };

  return (
    <div className="nicknameBox">
      {/* <div className={"caracterIcon" + changeBox}></div> */}
      {textFlow()}
      {/* {btnDelete()} */}
    </div>
  );
};

const Dialog0 = (props) => {
  return (
    <div className="forFade">
      <img className="deco" src={deco} alt="deco" />
      <p className="dialog_oneline">다음 버튼을 눌러 진행해주세요</p>
      <button
        className="NnextBtn0"
        onClick={() => {
          props.setNextBtn(props.nextBtn + 1);
        }}
      >
        다음
      </button>
    </div>
  );
};

const Dialog1 = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "index/PLUS_STATE1" });
  }, []);

  return (
    <div className="forFade">
      <img className="deco" src={deco} alt="deco" />
      <p className="dialog_oneline">
        (형용할 수 없는 어떤 세계에 도착하였습니다)
      </p>
      <button
        className="NnextBtn0"
        onClick={() => {
          props.setNextBtn(props.nextBtn + 1);
        }}
      >
        다음
      </button>
    </div>
  );
};

const Dialog2 = (props) => {
  return (
    <div className="forFade">
      <img className="deco" src={deco} alt="deco" />
      <p className="dialog_oneline">. . .</p>
      <button
        className="NnextBtn0"
        onClick={() => {
          props.setNextBtn(props.nextBtn + 1);
        }}
      >
        다음
      </button>
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
      <p className="dialog_oneline">당신의 이름은..?</p>
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
const Dialog4 = (props) => {
  const status = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "index/PLUS_STATE3" });
  }, []);
  return (
    <div className="forFade">
      <img className="deco" src={deco} alt="deco" />
      <p className="dialog_oneline">나는 {status.userName}이구나..</p>
      <button
        className="NnextBtn0"
        onClick={() => {
          props.setNextBtn(props.nextBtn + 1);
        }}
      >
        다음
      </button>
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
        {/* <img className="wata1" src={wata1} alt="wata1" /> */}
        <p className="sexText">남자</p>
        <img className="sexdeco" src={sexdeco} alt="sexdeco" />
        <Player
          className="wata_motion"
          src={watamotion}
          style={{ width: "360px" }}
          autoplay={true}
          loop={false}
          speed={1}
        />
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
