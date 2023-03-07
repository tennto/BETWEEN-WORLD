import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ChapterNo3.css";

const ChapterNo3 = () => {
  let [nextBtn, setNextBtn] = useState(1);
  let [changeBox, setChangeBox] = useState(0);

  const textFlow = () => {
    if (nextBtn === 1) {
      return <Dialog1 />;
    } else if (nextBtn === 2) {
      return <Dialog2 />;
    } else if (nextBtn === 3) {
      setTimeout(() => {
        setChangeBox(1);
      }, 10);
      return <Dialog3 nextBtn={nextBtn} setNextBtn={setNextBtn} />;
    } else if (nextBtn === 4) {
      setTimeout(() => {
        setChangeBox(0);
      }, 10);
      return <DialogA />;
    } else if (nextBtn === 5) {
      setTimeout(() => {
        setChangeBox(0);
      }, 10);
      return <DialogB />;
    } else if (nextBtn === 6) {
      return <Dialog4 />;
    } else if (nextBtn === 7) {
      return <Dialog5 />;
    } else if (nextBtn === 8) {
      return <Dialog6 />;
    } else if (nextBtn === 9) {
      return <Dialog7 />;
    } else if (nextBtn === 10) {
      setTimeout(() => {
        setChangeBox(1);
      }, 10);
      return <Dialog8 />;
    }
  };

  return (
    <div className="CP3_UPPER">
      {textFlow()}
      <button
        className={"nextBtn" + changeBox}
        onClick={() => {
          setNextBtn(nextBtn + 1);
        }}
      >
        다음
      </button>
    </div>
  );
};

const Dialog1 = () => {
  return (
    <>
      <p className="dialog_oneline">너는 누구지...?</p>
    </>
  );
};
const Dialog2 = () => {
  const status = useSelector((state) => state);
  return (
    <>
      <p className="dialog_oneline">{status.userName}이라고 하는구나..</p>
    </>
  );
};

const Dialog3 = (props) => {
  const { nextBtn, setNextBtn } = props;

  return (
    <>
      <button
        className="choiceNo1"
        onClick={() => {
          setNextBtn(4);
        }}
      >
        여기는 어디야..?
      </button>
      <button
        className="choiceNo1"
        onClick={() => {
          setNextBtn(5);
        }}
      >
        너는 누구야..?
      </button>
    </>
  );
};

const DialogA = () => {
  return (
    <>
      <p className="dialog_oneline">여기가 어딘지는 중요하지 않아</p>
    </>
  );
};

const DialogB = () => {
  return (
    <>
      <p className="dialog_oneline">내가 누군지는 중요하지 않아</p>
    </>
  );
};

const Dialog4 = () => {
  return (
    <>
      <p className="dialog_oneline">네가 어떤 사람인지,</p>
    </>
  );
};

const Dialog5 = () => {
  return (
    <>
      <p className="dialog_oneline">네가 어떤 선택을 할지 정말 궁금한걸</p>
    </>
  );
};

const Dialog6 = () => {
  return (
    <>
      <p className="dialog_oneline">선택은 한 번뿐.</p>
    </>
  );
};

const Dialog7 = () => {
  return (
    <>
      <p className="dialog_oneline">신중하게 선택해</p>
    </>
  );
};

const Dialog8 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "index/HAPPY_1002" });
    }, 5000);
  }, [dispatch]);

  return (
    <>
      <p className="dialog_oneline">시작한다...</p>
    </>
  );
};

export default ChapterNo3;
