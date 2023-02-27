import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Nickname.css";
import { setName } from "../../index";

const Nickname = () => {
  const status = useSelector((state) => state);
  const dispatch = useDispatch();
  let [nextBtn, setNextBtn] = useState(1);

  console.log(nextBtn);

  const textFlow = () => {
    if (nextBtn === 1) {
      return <Dialog0 />;
    } else if (nextBtn === 2) {
      return <Dialog1 />;
    } else if (nextBtn === 3) {
      return <Dialog2 />;
    } else if (nextBtn === 4) {
      return <Dialog3 />;
    } else if (nextBtn === 5) {
      return <Dialog4 />;
    } else if (nextBtn === 6) {
      return <Dialog5 />;
    } else if (nextBtn === 7) {
      dispatch({ type: "index/STORY_NO2" });
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
      <h3 className="dialog_oneline">1번 대화내용입니다</h3>
    </>
  );
};

const Dialog1 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "index/PLUS_STATE1" });
  }, []);
  return (
    <>
      <h3 className="dialog_oneline">캐릭터 실루엣 등장</h3>
    </>
  );
};

const Dialog2 = () => {
  return (
    <>
      <h3 className="dialog_oneline">. . .</h3>
    </>
  );
};

const Dialog3 = () => {
  const status = useSelector((state) => state);
  const name = React.useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "index/PLUS_STATE2" });
  }, []);
  return (
    <>
      <h3 className="dialog_oneline">당신의 이름은..?</h3>
      <input ref={name} className="nicknameInput" />
      <button
        onClick={() => {
          setTimeout(() => {
            dispatch(setName(name.current.value));
          }, 10);
          console.log(status.userName);
        }}
      >
        입력하기
      </button>
    </>
  );
};
const Dialog4 = () => {
  const status = useSelector((state) => state);
  const dispatch = useDispatch();
  dispatch({ type: "index/PLUS_STATE3" });
  return (
    <>
      <h3 className="dialog_oneline">{status.userName}라고 하는구나..?</h3>
    </>
  );
};
const Dialog5 = () => {
  const dispatch = useDispatch();
  dispatch({ type: "index/PLUS_STATE4" });
  return (
    <>
      <div>하남자</div>
      <div>하여자</div>
    </>
  );
};

export default Nickname;
