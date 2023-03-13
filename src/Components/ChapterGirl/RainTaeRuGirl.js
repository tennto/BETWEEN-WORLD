import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GSound6in2 from "../Girlmusic/GSound6in2";
import GSound6in1 from "../Girlmusic/GSound6in1";
import "../../css/Chapter2.css";
import "../../css/HappyText.css";

const RainTaeRuGirl = () => {
  let [nextBtn, setNextBtn] = useState(0);
  let [changeBox, setChangeBox] = useState(0);

  const DialogFlow = () => {
    if (nextBtn === 0) {
      return <Dialog0 />;
    } else if (nextBtn === 1) {
      return <Dialog1 />;
    } else if (nextBtn === 2) {
      return <Dialog2 />;
    } else if (nextBtn === 3) {
      return <Dialog3 />;
    } else if (nextBtn === 4) {
      return <Dialog4 nextBtn={nextBtn} setNextBtn={setNextBtn} />;
    } else if (nextBtn === 5) {
      return <Dialog5 />;
    } else if (nextBtn === 6) {
      return <Dialog6 />;
    } else if (nextBtn === 7) {
      return <Dialog7 />;
    } else if (nextBtn === 8) {
      return <Dialog8 />;
    } else if (nextBtn === 9) {
      return <Dialog9 />;
    } else if (nextBtn === 10) {
      return <Dialog10 />;
    } else if (nextBtn === 11) {
      return <Dialog11 />;
    } else if (nextBtn === 12) {
      return <Dialog12 />;
    } else if (nextBtn === 13) {
      return <Dialog13 />;
    } else if (nextBtn === 14) {
      return <Dialog14 />;
    } else if (nextBtn === 15) {
      return <Dialog15 />;
    } else if (nextBtn === 16) {
      return <Dialog16 nextBtn={nextBtn} setNextBtn={setNextBtn} />;
    } else if (nextBtn === 17) {
      return <Dialog17 />;
    }
  };

  return (
    <div className="CP2_UPPER">
      <div className={"caracterIcon" + changeBox}></div>
      {DialogFlow()}
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

const Dialog0 = () => {
  return (
    <>
      <h3 className="dialog_oneline">저기,</h3>
    </>
  );
};

const Dialog1 = () => {
  return (
    <>
      <h3 className="dialog_oneline">곤란해 보이네</h3>
    </>
  );
};

const Dialog2 = () => {
  return (
    <>
      <h3 className="dialog_oneline">비 때문이라면, 역시 테루테루보즈지!</h3>
    </>
  );
};

const Dialog3 = () => {
  return (
    <>
      <h3 className="dialog_oneline">혹시 테루테루보즈 이야기 들어봤어?</h3>
    </>
  );
};
const Dialog4 = (props) => {
  const { nextBtn, setNextBtn } = props;

  return (
    <>
      <button
        className="choiceNo1"
        onClick={() => {
          setNextBtn(nextBtn + 1);
        }}
      >
        응
      </button>
      <button
        className="choiceNo1"
        onClick={() => {
          setNextBtn(nextBtn + 1);
        }}
      >
        아니
      </button>
    </>
  );
};
const Dialog5 = () => {
  return (
    <>
      <h3 className="dialog_oneline">있지, 들어봐</h3>
    </>
  );
};
const Dialog6 = () => {
  return (
    <>
      <h3 className="dialog_oneline">제멋대로 떠들어대기 시작했다...</h3>
    </>
  );
};
const Dialog7 = () => {
  return (
    <>
      <h3 className="dialog_oneline">
        어느 마을에 비가 계속 내리는 바람에 모두가 슬픔에 잠겼어
      </h3>
    </>
  );
};
const Dialog8 = () => {
  return (
    <>
      <h3 className="dialog_oneline">
        그떄 어느 한 승려가 흐날에 공양을 하면 비가 그친다고 했어
      </h3>
    </>
  );
};
const Dialog9 = () => {
  return (
    <>
      <h3 className="dialog_oneline">
        허나 비는 그칠 줄 몰랐고,, 마을 사람들은 승려의 머리에 흰 천을 씌워 목을
        매달었어.
      </h3>
    </>
  );
};
const Dialog10 = () => {
  return (
    <>
      <h3 className="dialog_oneline">그러자 거짓말 처럼 비가 그쳤고</h3>
    </>
  );
};
const Dialog11 = () => {
  return (
    <>
      <h3 className="dialog_oneline">
        사람들은 이를 함께 기뻐하며 슬픔은 점차 줄어들었어
      </h3>
    </>
  );
};
const Dialog12 = () => {
  return (
    <>
      <h3 className="dialog_oneline">
        그 후 사람들은 비가 올 때마다 하얀 천을 목매단 사람 모양으로 매달기
        시작했어..
      </h3>
    </>
  );
};

const Dialog13 = () => {
  return (
    <>
      <h3 className="dialog_oneline">
        반대로, 이를 거꾸로 매달면 슬픔이 전염되듯, 비가 온다고 전해진다고 해..
      </h3>
    </>
  );
};
const Dialog14 = () => {
  return (
    <>
      <h3 className="dialog_oneline">
        슬픔을 함께 할수록 줄어드는 것, 슬픔은 전염병 같은 것이라 불어나는 것,
      </h3>
    </>
  );
};
const Dialog15 = () => {
  return (
    <>
      <h3 className="dialog_oneline">너는 어느쪽?</h3>
    </>
  );
};

const Dialog16 = (props) => {
  const status = useSelector((state) => state);
  const dispatch = useDispatch();
  let [nextBtn, setNextBtn] = useState(0);
  const [visible, setVisible] = useState(1);
  const [visible2, setVisible2] = useState(1);

  const isHovering = () => {
    if (visible === 1) {
      return (
        <div
          className="hover2"
          onClick={() => {
            setVisible(0);
          }}
        >
          슬픔을 나누면 줄어드는 것. 반듯이 매단다.
        </div>
      );
    } else {
      return "";
    }
  };

  const isHovering2 = () => {
    if (visible2 === 1) {
      return (
        <div
          className="selec_2"
          onClick={() => {
            setVisible2(0);
          }}
        >
          슬픔은 전염병 같이 남에게도 옮는 것. 거꾸로 매단다.
        </div>
      );
    } else {
      return "";
    }
  };
  return (
    <>
      <div
        className="selec_1"
        onMouseOut={() => {
          setVisible2(1);
        }}
      >
        {" "}
        <GSound6in2 {...props} />
      </div>
      <div
        className="hover1"
        onMouseOut={() => {
          setVisible(1);
        }}
      >
        {" "}
        <GSound6in1 {...props} />
      </div>
      {isHovering2()}
      {isHovering()}
    </>
  );
};

const Dialog17 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "index/SMGIRL_1404" });
    }, 1000);
  }, [dispatch]);
  return (
    <>
      <h3 className="dialog_oneline">...</h3>
    </>
  );
};

export default RainTaeRuGirl;
