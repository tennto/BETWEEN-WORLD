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

const RainTaeRuBoy = () => {
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
      setTimeout(() => {
        setChangeBox(1);
      }, 10);
      return <Dialog4 nextBtn={nextBtn} setNextBtn={setNextBtn} />;
    } else if (nextBtn === 5) {
      setTimeout(() => {
        setChangeBox(0);
      }, 10);
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
      setTimeout(() => {
        setChangeBox(1);
      }, 10);
      return <Dialog16 nextBtn={nextBtn} setNextBtn={setNextBtn} />;
    } else if (nextBtn === 17) {
      return <Dialog17 />;
    }
  };

  return (
    <div className="CP2_UPPER">
      {/* <div className={"caracterIcon" + changeBox}></div> */}
      {DialogFlow()}
      <button
        className={"c2boynextBtn" + changeBox}
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
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_rtr" />
      <h3 className="dialog_oneline">저기,</h3>
    </div>
  );
};

const Dialog1 = () => {
  return (
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_rtr2" />
      <h3 className="dialog_oneline">곤란해 보이네</h3>
    </div>
  );
};

const Dialog2 = () => {
  return (
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_rtr3" />
      <h3 className="dialog_oneline">비 때문이라면, 역시 테루테루보즈지!</h3>
    </div>
  );
};

const Dialog3 = () => {
  return (
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_rtr4" />
      <h3 className="dialog_oneline">혹시 테루테루보즈 이야기 들어봤어?</h3>
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

const Dialog5 = () => {
  return (
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_rtr4" />
      <h3 className="dialog_oneline">있지, 들어봐</h3>
    </div>
  );
};
const Dialog6 = () => {
  return (
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_rtr4" />
      <h3 className="dialog_oneline">제멋대로 떠들어대기 시작했다...</h3>
    </div>
  );
};
const Dialog7 = () => {
  return (
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_rtr4" />
      <h3 className="dialog_oneline">
        어느 마을에 비가 계속 내리는 바람에 모두가 슬픔에 잠겼어
      </h3>
    </div>
  );
};
const Dialog8 = () => {
  return (
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_rtr4" />
      <h3 className="dialog_oneline">
        그떄 어느 한 승려가 하늘에 공양을 하면 비가 그친다고 했어
      </h3>
    </div>
  );
};
const Dialog9 = () => {
  return (
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_rtr4" />
      <h3 className="dialog_long">
        허나 비는 그칠 줄 몰랐고,, 마을 사람들은
        <br />
        승려의 머리에 흰 천을 씌워 목을 매달었어.
      </h3>
    </div>
  );
};
const Dialog10 = () => {
  return (
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_rtr4" />
      <h3 className="dialog_oneline">그러자 거짓말 처럼 비가 그쳤고</h3>
    </div>
  );
};
const Dialog11 = () => {
  return (
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_rtr4" />
      <h3 className="dialog_oneline">
        사람들은 이를 함께 기뻐하며 슬픔은 점차 줄어들었어
      </h3>
    </div>
  );
};
const Dialog12 = () => {
  return (
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_rtr4" />
      <h3 className="dialog_long">
        그 후 사람들은 비가 올 때마다
        <br />
        하얀 천을 목매단 사람 모양으로 매달기 시작했어..
      </h3>
    </div>
  );
};

const Dialog13 = () => {
  return (
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_rtr4" />
      <h3 className="dialog_long">
        반대로, 이를 거꾸로 매달면 슬픔이 전염되듯
        <br />
        비가 온다고 전해진다고 해..
      </h3>
    </div>
  );
};
const Dialog14 = () => {
  return (
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_rtr4" />
      <h3 className="dialog_long">
        슬픔을 함께 할수록 줄어드는 것 아니면
        <br />
        슬픔은 전염병 같은 것이라 불어나는 것
      </h3>
    </div>
  );
};
const Dialog15 = () => {
  return (
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_rtr4" />
      <h3 className="dialog_oneline">너는 어느쪽?</h3>
    </div>
  );
};

const Dialog16 = (props) => {
  const status = useSelector((state) => state);

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
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "index/SMBOY_1004" });
    }, 5000);
  }, [dispatch]);
  return (
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_rtr4" />
      <h3 className="dialog_oneline">...</h3>
    </div>
  );
};

export default RainTaeRuBoy;
