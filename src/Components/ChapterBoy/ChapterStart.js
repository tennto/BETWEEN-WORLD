/* eslint-disable */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { batch } from "react-redux";
import "../../css/ChapterNo3.css";
import deco from "../textdecoration.png";
import chdeco from "./chdeco.png";
import watachat from "./watachat.png";
import bnchat from "../bnchat.png";

const ChapterStart = () => {
  let [nextBtn, setNextBtn] = useState(1);
  let [changeBox, setChangeBox] = useState(0);

  const textFlow = () => {
    if (nextBtn === 1) {
      return <Dialog1 nextBtn={nextBtn} setNextBtn={setNextBtn} />;
    } else if (nextBtn === 2) {
      return <Dialog2 nextBtn={nextBtn} setNextBtn={setNextBtn} />;
    } else if (nextBtn === 3) {
      setTimeout(() => {
        setChangeBox(1);
      }, 10);
      return <Dialog3 nextBtn={nextBtn} setNextBtn={setNextBtn} />;
    } else if (nextBtn === 4) {
      setTimeout(() => {
        setChangeBox(0);
      }, 10);
      return <DialogA nextBtn={nextBtn} setNextBtn={setNextBtn} />;
    } else if (nextBtn === 5) {
      setTimeout(() => {
        setChangeBox(0);
      }, 10);
      return <DialogB nextBtn={nextBtn} setNextBtn={setNextBtn} />;
    } else if (nextBtn === 6) {
      return <Dialog4 nextBtn={nextBtn} setNextBtn={setNextBtn} />;
    } else if (nextBtn === 7) {
      return <Dialog5 nextBtn={nextBtn} setNextBtn={setNextBtn} />;
    } else if (nextBtn === 8) {
      return <Dialog6 nextBtn={nextBtn} setNextBtn={setNextBtn} />;
    } else if (nextBtn === 9) {
      return <Dialog7 nextBtn={nextBtn} setNextBtn={setNextBtn} />;
    } else if (nextBtn === 10) {
      setTimeout(() => {
        setChangeBox(1);
      }, 10);
      return <Dialog8 />;
    }
  };

  // const buttonCount = () => {
  //   if (nextBtn === 4) {
  //     setNextBtn(nextBtn + 2);
  //   } else {
  //     setNextBtn(nextBtn + 1);
  //   }
  // };

  return (
    <div className="CP3_UPPER">
      {textFlow()}
      {/* <button
        className={"nextBtn" + changeBox}
        onClick={() => {
          buttonCount();
        }}
      >
        다음
      </button> */}
    </div>
  );
};

const Dialog1 = (props) => {
  const buttonCount = () => {
    if (props.nextBtn === 4) {
      props.setNextBtn(props.nextBtn + 2);
    } else {
      props.setNextBtn(props.nextBtn + 1);
    }
  };
  return (
    <div className="forFade">
      <img className="deco" src={deco} alt="deco1" />
      <img className="watachat" src={watachat} alt="watachat" />
      <p className="dialog_oneline">(어디선가 낯선 목소리가 들려온다..)</p>
      <button
        className="nextBtn0"
        onClick={() => {
          buttonCount();
        }}
      >
        다음
      </button>
    </div>
  );
};
const Dialog2 = (props) => {
  const buttonCount = () => {
    if (props.nextBtn === 4) {
      props.setNextBtn(props.nextBtn + 2);
    } else {
      props.setNextBtn(props.nextBtn + 1);
    }
  };
  const status = useSelector((state) => state);
  return (
    <div className="forFade">
      <img className="deco" src={deco} alt="deco1" />
      <img className="bnchat" src={bnchat} alt="bnchat" />
      <p className="dialog_oneline">{status.userName}(이)라고 하는구나..</p>
      <button
        className="nextBtn0"
        onClick={() => {
          buttonCount();
        }}
      >
        다음
      </button>
    </div>
  );
};

const Dialog3 = (props) => {
  const { nextBtn, setNextBtn } = props;

  return (
    <div className="fadelick">
      <button
        className="choiceNo1"
        onClick={() => {
          setNextBtn(4);
        }}
      >
        <img className="chdeco_b1" src={chdeco} alt="chdeco2" />
        <p>여기는 어디야..?</p>
      </button>
      <button
        className="choiceNo1"
        onClick={() => {
          setNextBtn(5);
        }}
      >
        <img className="chdeco_b1" src={chdeco} alt="chdeco2" />
        <p> 당신은 누구야..?</p>
      </button>
    </div>
  );
};

const DialogA = (props) => {
  const buttonCount = () => {
    if (props.nextBtn === 4) {
      props.setNextBtn(props.nextBtn + 2);
    } else {
      props.setNextBtn(props.nextBtn + 1);
    }
  };
  return (
    <div className="forFade">
      <img className="deco" src={deco} alt="deco1" />
      <img className="bnchat" src={bnchat} alt="bnchat" />
      <p className="dialog_oneline">여기가 어딘지는 중요하지 않아</p>
      <button
        className="nextBtn0"
        onClick={() => {
          buttonCount();
        }}
      >
        다음
      </button>
    </div>
  );
};

const DialogB = (props) => {
  const buttonCount = () => {
    if (props.nextBtn === 4) {
      props.setNextBtn(props.nextBtn + 2);
    } else {
      props.setNextBtn(props.nextBtn + 1);
    }
  };
  return (
    <div className="forFade">
      <img className="deco" src={deco} alt="deco1" />
      <img className="bnchat" src={bnchat} alt="bnchat" />
      <p className="dialog_oneline">내가 누군지는 중요하지 않아</p>
      <button
        className="nextBtn0"
        onClick={() => {
          buttonCount();
        }}
      >
        다음
      </button>
    </div>
  );
};

const Dialog4 = (props) => {
  const buttonCount = () => {
    if (props.nextBtn === 4) {
      props.setNextBtn(props.nextBtn + 2);
    } else {
      props.setNextBtn(props.nextBtn + 1);
    }
  };
  return (
    <div className="forFade">
      <img className="deco" src={deco} alt="deco1" />
      <img className="bnchat" src={bnchat} alt="bnchat" />
      <p className="dialog_oneline">네가 어떤 사람인지,</p>
      <button
        className="nextBtn0"
        onClick={() => {
          buttonCount();
        }}
      >
        다음
      </button>
    </div>
  );
};

const Dialog5 = (props) => {
  const buttonCount = () => {
    if (props.nextBtn === 4) {
      props.setNextBtn(props.nextBtn + 2);
    } else {
      props.setNextBtn(props.nextBtn + 1);
    }
  };
  return (
    <div className="forFade">
      <img className="deco" src={deco} alt="deco1" />
      <img className="bnchat" src={bnchat} alt="bnchat" />
      <p className="dialog_oneline">네가 어떤 선택을 할지 정말 궁금한걸</p>
      <button
        className="nextBtn0"
        onClick={() => {
          buttonCount();
        }}
      >
        다음
      </button>
    </div>
  );
};

const Dialog6 = (props) => {
  const buttonCount = () => {
    if (props.nextBtn === 4) {
      props.setNextBtn(props.nextBtn + 2);
    } else {
      props.setNextBtn(props.nextBtn + 1);
    }
  };
  return (
    <div className="forFade">
      <img className="deco" src={deco} alt="deco1" />
      <img className="bnchat" src={bnchat} alt="bnchat" />
      <p className="dialog_oneline">선택은 한 번뿐 .</p>
      <button
        className="nextBtn0"
        onClick={() => {
          buttonCount();
        }}
      >
        다음
      </button>
    </div>
  );
};

const Dialog7 = (props) => {
  const buttonCount = () => {
    if (props.nextBtn === 4) {
      props.setNextBtn(props.nextBtn + 2);
    } else {
      props.setNextBtn(props.nextBtn + 1);
    }
  };
  return (
    <div className="forFade">
      <img className="deco" src={deco} alt="deco1" />
      <img className="bnchat" src={bnchat} alt="bnchat" />
      <p className="dialog_oneline">신중하게 선택해</p>
      <button
        className="nextBtn0"
        onClick={() => {
          buttonCount();
        }}
      >
        다음
      </button>
    </div>
  );
};

const Dialog8 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      batch(() => {
        dispatch({ type: "index/SOM" });
        dispatch({ type: "index/SOMANI" });
      });
    }, 1000);
  }, [dispatch]);

  return (
    <div className="forFade">
      <img className="deco" src={deco} alt="deco1" />
      <img className="bnchat" src={bnchat} alt="bnchat" />
      <p className="dialog_oneline">시작한다...</p>
    </div>
  );
};

export default ChapterStart;
