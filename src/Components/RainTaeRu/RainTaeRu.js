/* eslint-disable */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sound6in2 from "../Boymusic/Sound6in2";
import Sound6in1 from "../Boymusic/Sound6in1";
import "../../css/Chapter2.css";
import "../../css/Card.css";
import chdeco from "../ChapterBoy/chdeco.png";
import textdeco from "../textdecoration.png";
import carddeco from "../carddeco.png";
import carddecoback from "../carddecoback.png";
import coverdeco from "../backdeco.png";
import rtrchat1 from "../rtrchat1.png";
import watachat from "./watachat.png";
import { batch } from "react-redux";

const RainTaeRu = () => {
  let [nextBtn, setNextBtn] = useState(0);
  let [changeBox, setChangeBox] = useState(0);

  const DialogFlow = () => {
    if (nextBtn === 0) {
      return <Transition nextBtn={nextBtn} setNextBtn={setNextBtn} />;
    } else if (nextBtn === 1) {
      return <Dialog0 nextBtn={nextBtn} setNextBtn={setNextBtn} />;
    } else if (nextBtn === 2) {
      return <Dialog1 nextBtn={nextBtn} setNextBtn={setNextBtn} />;
    } else if (nextBtn === 3) {
      return <Dialog2 nextBtn={nextBtn} setNextBtn={setNextBtn} />;
    } else if (nextBtn === 4) {
      return <Dialog3 nextBtn={nextBtn} setNextBtn={setNextBtn} />;
    } else if (nextBtn === 5) {
      setTimeout(() => {
        setChangeBox(1);
      }, 10);
      return <Dialog4 nextBtn={nextBtn} setNextBtn={setNextBtn} />;
    } else if (nextBtn === 6) {
      setTimeout(() => {
        setChangeBox(0);
      }, 10);
      return <Dialog5 nextBtn={nextBtn} setNextBtn={setNextBtn} />;
    } else if (nextBtn === 7) {
      return <Dialog6 nextBtn={nextBtn} setNextBtn={setNextBtn} />;
    } else if (nextBtn === 8) {
      return <Dialog7 nextBtn={nextBtn} setNextBtn={setNextBtn} />;
    } else if (nextBtn === 9) {
      return <Dialog8 nextBtn={nextBtn} setNextBtn={setNextBtn} />;
    } else if (nextBtn === 10) {
      return <Dialog9 nextBtn={nextBtn} setNextBtn={setNextBtn} />;
    } else if (nextBtn === 11) {
      return <Dialog10 nextBtn={nextBtn} setNextBtn={setNextBtn} />;
    } else if (nextBtn === 12) {
      return <Dialog11 nextBtn={nextBtn} setNextBtn={setNextBtn} />;
    } else if (nextBtn === 13) {
      return <Dialog12 nextBtn={nextBtn} setNextBtn={setNextBtn} />;
    } else if (nextBtn === 14) {
      return <Dialog13 nextBtn={nextBtn} setNextBtn={setNextBtn} />;
    } else if (nextBtn === 15) {
      return <Dialog14 nextBtn={nextBtn} setNextBtn={setNextBtn} />;
    } else if (nextBtn === 16) {
      return <Dialog15 nextBtn={nextBtn} setNextBtn={setNextBtn} />;
    } else if (nextBtn === 17) {
      setTimeout(() => {
        setChangeBox(1);
      }, 10);
      return <Dialog16 nextBtn={nextBtn} setNextBtn={setNextBtn} />;
    } else if (nextBtn === 18) {
      return <Dialog17 />;
    } else if (nextBtn === 19) {
      return <Dialog18 />;
    }
  };

  return (
    <div className="CP2_UPPER">
      {/* <div className={"caracterIcon" + changeBox}></div> */}
      {DialogFlow()}
      {/* <button
        className="c2boynextBtn0"
        onClick={() => {
          setNextBtn(nextBtn + 1);
        }}
      >
        다음
      </button> */}
    </div>
  );
};

const Transition = (props) => {
  let [btnFade, setBtnFade] = useState(1);
  setTimeout(() => {
    setBtnFade(0);
  }, 5000);

  return (
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_rtr" />
      <p className="dialog_oneline">
        알 수 없는 힘에 의해 지형이 변하기 시작했다..
      </p>
      <button
        className={"c2boynextBtn" + btnFade}
        onClick={() => {
          props.setNextBtn(props.nextBtn + 1);
        }}
      >
        다음
      </button>
    </div>
  );
};

const Dialog0 = (props) => {
  return (
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_rtr" />
      <img className="rtrchat1" src={rtrchat1} alt="rtrchat" />
      <p className="dialog_oneline">저기,</p>
      <button
        className="c2boynextBtn0"
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
  return (
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_rtr2" />
      <img className="rtrchat1" src={rtrchat1} alt="rtrchat" />
      <p className="dialog_oneline">곤란해 보이네</p>
      <button
        className="c2boynextBtn0"
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
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_rtr3" />
      <img className="rtrchat1" src={rtrchat1} alt="rtrchat" />
      <p className="dialog_oneline">비 때문이라면, 역시 테루테루보즈지!</p>
      <button
        className="c2boynextBtn0"
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
  return (
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_rtr4" />
      <img className="rtrchat1" src={rtrchat1} alt="rtrchat" />
      <p className="dialog_oneline">혹시 테루테루보즈 이야기 들어봤어?</p>
      <button
        className="c2boynextBtn0"
        onClick={() => {
          props.setNextBtn(props.nextBtn + 1);
        }}
      >
        다음
      </button>
    </div>
  );
};
const Dialog4 = (props) => {
  const { nextBtn, setNextBtn } = props;

  return (
    <div className="fadelick">
      <button
        className="choiceNo2"
        onClick={() => {
          setNextBtn(nextBtn + 1);
        }}
      >
        <img className="chdeco" src={chdeco} alt="chdeco2" />
        <p className="yesp">응, 들어봤어</p>
      </button>
      <button
        className="choiceNo2"
        onClick={() => {
          setNextBtn(nextBtn + 1);
        }}
      >
        <img className="chdeco" src={chdeco} alt="chdeco2" />
        <p className="nop">아니.. 처음 들어봤어</p>
      </button>
    </div>
  );
};

const Dialog5 = (props) => {
  return (
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_rtr4" />
      <img className="rtrchat1" src={rtrchat1} alt="rtrchat" />
      <p className="dialog_oneline">있지, 들어봐</p>
      <button
        className="c2boynextBtn0"
        onClick={() => {
          props.setNextBtn(props.nextBtn + 1);
        }}
      >
        다음
      </button>
    </div>
  );
};
const Dialog6 = (props) => {
  return (
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_rtr4" />
      <img className="watachat" src={watachat} alt="watachat" />
      <p className="dialog_oneline">제멋대로 떠들어대기 시작했다...</p>
      <button
        className="c2boynextBtn0"
        onClick={() => {
          props.setNextBtn(props.nextBtn + 1);
        }}
      >
        다음
      </button>
    </div>
  );
};
const Dialog7 = (props) => {
  return (
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_rtr4" />
      <img className="rtrchat1" src={rtrchat1} alt="rtrchat" />
      <p className="dialog_oneline">
        어느 마을에 비가 계속 내리는 바람에 모두가 슬픔에 잠겼어
      </p>
      <button
        className="c2boynextBtn0"
        onClick={() => {
          props.setNextBtn(props.nextBtn + 1);
        }}
      >
        다음
      </button>
    </div>
  );
};
const Dialog8 = (props) => {
  return (
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_rtr4" />
      <img className="rtrchat1" src={rtrchat1} alt="rtrchat" />
      <p className="dialog_oneline">
        그떄 어느 한 승려가 하늘에 공양을 하면 비가 그친다고 했어
      </p>
      <button
        className="c2boynextBtn0"
        onClick={() => {
          props.setNextBtn(props.nextBtn + 1);
        }}
      >
        다음
      </button>
    </div>
  );
};
const Dialog9 = (props) => {
  return (
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_rtr4" />
      <img className="rtrchat1" src={rtrchat1} alt="rtrchat" />
      <p className="dialog_long">
        허나 비는 그칠 줄 몰랐고,, 마을 사람들은
        <br />
        승려의 머리에 흰 천을 씌워 목을 매달었어.
      </p>
      <button
        className="c2boynextBtn0"
        onClick={() => {
          props.setNextBtn(props.nextBtn + 1);
        }}
      >
        다음
      </button>
    </div>
  );
};
const Dialog10 = (props) => {
  return (
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_rtr4" />
      <img className="rtrchat1" src={rtrchat1} alt="rtrchat" />
      <p className="dialog_oneline">그러자 거짓말 처럼 비가 그쳤고</p>
      <button
        className="c2boynextBtn0"
        onClick={() => {
          props.setNextBtn(props.nextBtn + 1);
        }}
      >
        다음
      </button>
    </div>
  );
};
const Dialog11 = (props) => {
  return (
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_rtr4" />
      <img className="rtrchat1" src={rtrchat1} alt="rtrchat" />
      <p className="dialog_oneline">
        사람들은 이를 함께 기뻐하며 슬픔은 점차 줄어들었어
      </p>
      <button
        className="c2boynextBtn0"
        onClick={() => {
          props.setNextBtn(props.nextBtn + 1);
        }}
      >
        다음
      </button>
    </div>
  );
};
const Dialog12 = (props) => {
  return (
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_rtr4" />
      <img className="rtrchat1" src={rtrchat1} alt="rtrchat" />
      <p className="dialog_long">
        그 후 사람들은 비가 올 때마다
        <br />
        하얀 천을 목매단 사람 모양으로 매달기 시작했어..
      </p>
      <button
        className="c2boynextBtn0"
        onClick={() => {
          props.setNextBtn(props.nextBtn + 1);
        }}
      >
        다음
      </button>
    </div>
  );
};

const Dialog13 = (props) => {
  return (
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_rtr4" />
      <img className="rtrchat1" src={rtrchat1} alt="rtrchat" />
      <p className="dialog_long">
        반대로, 이를 거꾸로 매달면 슬픔이 전염되듯
        <br />
        비가 온다고 전해진다고 해..
      </p>
      <button
        className="c2boynextBtn0"
        onClick={() => {
          props.setNextBtn(props.nextBtn + 1);
        }}
      >
        다음
      </button>
    </div>
  );
};
const Dialog14 = (props) => {
  return (
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_rtr4" />
      <img className="rtrchat1" src={rtrchat1} alt="rtrchat" />
      <p className="dialog_long">
        슬픔을 함께 할수록 줄어드는 것 아니면
        <br />
        슬픔은 전염병 같은 것이라 불어나는 것
      </p>
      <button
        className="c2boynextBtn0"
        onClick={() => {
          props.setNextBtn(props.nextBtn + 1);
        }}
      >
        다음
      </button>
    </div>
  );
};
const Dialog15 = (props) => {
  return (
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_rtr4" />
      <img className="rtrchat1" src={rtrchat1} alt="rtrchat" />
      <p className="dialog_oneline">너는 어느쪽?</p>
      <button
        className="c2boynextBtn0"
        onClick={() => {
          props.setNextBtn(props.nextBtn + 1);
        }}
      >
        다음
      </button>
    </div>
  );
};

const Dialog16 = (props) => {
  return (
    <div className="fadelick">
      <div className="wrap">
        <div className="card">
          <div className="card-front">
            <img className="carddeco" src={carddeco} alt="carddeco1" />
            <img className="coverdeco" src={coverdeco} alt="coverdeco" />
          </div>
          <div className="card-back">
            <img className="carddeco" src={carddecoback} alt="carddeco1" />
            <Sound6in1 {...props} />
          </div>
        </div>
      </div>
      <div className="wrap2">
        <div className="card2">
          <div className="card-front2">
            <img className="carddeco" src={carddeco} alt="carddeco1" />
            <img className="coverdeco" src={coverdeco} alt="coverdeco" />
          </div>
          <div className="card-back2">
            <img className="carddeco" src={carddecoback} alt="carddeco1" />
            <Sound6in2 {...props} />
          </div>
        </div>
      </div>
    </div>
  );
};

const Dialog17 = () => {
  const status = useSelector((state) => state);
  const dispatch = useDispatch();
  var [checkMS, setCheck] = useState("");
  useEffect(() => {
    if (status.sound4 === "산소리.mp3") {
      setCheck("index/CKAnimeMF");
    } else if (status.sound4 === "바다소리.mp3") {
      setCheck("index/CKAnimeSF");
    }
  }, []);
  return (
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_rtr4" />
      <p className="dialog_oneline">비가 세차게 내리기 시작했다...</p>
      <button
        className="c2boynextBtn0"
        onClick={() => {
          batch(() => {
            dispatch({ type: "index/CK_1050" });
            dispatch({ type: checkMS });
          });
        }}
      >
        다음
      </button>
    </div>
  );
};

const Dialog18 = () => {
  const status = useSelector((state) => state);
  const dispatch = useDispatch();
  var [checkMS, setCheck] = useState("");
  useEffect(() => {
    if (status.sound4 === "산소리.mp3") {
      setCheck("index/CKAnimeMF");
    } else if (status.sound4 === "바다소리.mp3") {
      setCheck("index/CKAnimeSF");
    }
  }, []);
  return (
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_rtr4" />
      <p className="dialog_oneline">비가 잔잔히 내리기 시작했다...</p>
      <button
        className="c2boynextBtn0"
        onClick={() => {
          batch(() => {
            dispatch({ type: "index/CK_1050" });
            dispatch({ type: checkMS });
          });
        }}
      >
        다음
      </button>
    </div>
  );
};

export default RainTaeRu;
