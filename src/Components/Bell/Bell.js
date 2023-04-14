/* eslint-disable */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactHowler from "../../howler/ReactHowler.js";
import Sound9in2 from "../Boymusic/Sound9in2";
import Sound9in1 from "../Boymusic/Sound9in1";

import "../../css/Chapter2.css";
import "../../css/Card.css";
import carddeco from "../carddeco.png";
import carddecoback from "../carddecoback.png";
import { Link } from "react-router-dom";
import chdeco from "../ChapterBoy/chdeco.png";
import textdeco from "../textdecoration.png";
import coverdeco from "../backdeco.png";
import bnchat from "../bnchat.png";
import watachat from "./watachat.png";

const Bell = () => {
  let [nextBtn, setNextBtn] = useState(0);

  const DialogFlow = () => {
    if (nextBtn === 0) {
      return <Dialog0 nextBtn={nextBtn} setNextBtn={setNextBtn} />;
    } else if (nextBtn === 1) {
      return <Dialog1 nextBtn={nextBtn} setNextBtn={setNextBtn} />;
    } else if (nextBtn === 2) {
      return <Dialog2 nextBtn={nextBtn} setNextBtn={setNextBtn} />;
    } else if (nextBtn === 3) {
      return <Dialog3 nextBtn={nextBtn} setNextBtn={setNextBtn} />;
    } else if (nextBtn === 4) {
      return <Dialog4 nextBtn={nextBtn} setNextBtn={setNextBtn} />;
    } else if (nextBtn === 5) {
      return <Dialog5 nextBtn={nextBtn} setNextBtn={setNextBtn} />;
    } else if (nextBtn === 6) {
      return <Dialog6 nextBtn={nextBtn} setNextBtn={setNextBtn} />;
    } else if (nextBtn === 7) {
      return <Dialog7 nextBtn={nextBtn} setNextBtn={setNextBtn} />;
    } else if (nextBtn === 8) {
      return <Dialog8 nextBtn={nextBtn} setNextBtn={setNextBtn} />;
    } else if (nextBtn === 9) {
      return <Dialog9 nextBtn={nextBtn} setNextBtn={setNextBtn} />;
    } else if (nextBtn === 10) {
      return <Dialog10 nextBtn={nextBtn} setNextBtn={setNextBtn} />;
    } else if (nextBtn === 11) {
      return <Dialog11 nextBtn={nextBtn} setNextBtn={setNextBtn} />;
    } else if (nextBtn === 12) {
      return <Dialog12 nextBtn={nextBtn} setNextBtn={setNextBtn} />;
    } else if (nextBtn === 13) {
      return <Dialog13 />;
    } else if (nextBtn === 14) {
      return <Dialog14 />;
    }
  };

  return (
    <div className="CP2_UPPER">
      {/* <div className={"caracterIcon" + changeBox}></div> */}
      {DialogFlow()}
      {/* <button
        className="nextBtn0"
        onClick={() => {
          buttonCount();
        }}
      >
        다음
      </button> */}
    </div>
  );
};

const Dialog0 = (props) => {
  const buttonCount = () => {
    if (props.nextBtn === 3) {
      props.setNextBtn(props.nextBtn + 2);
    } else {
      props.setNextBtn(props.nextBtn + 1);
    }
  };
  return (
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_bd" />
      <img className="watachat" src={watachat} alt="watachat" />
      <p className="dialog_oneline">............</p>
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

const Dialog1 = (props) => {
  const buttonCount = () => {
    if (props.nextBtn === 3) {
      props.setNextBtn(props.nextBtn + 2);
    } else {
      props.setNextBtn(props.nextBtn + 1);
    }
  };
  return (
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_bd" />
      <img className="bnchat" src={bnchat} alt="bnchat" />
      <p className="dialog_oneline">지금 들리는 소리는 마음에 드니?</p>
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
    if (props.nextBtn === 3) {
      props.setNextBtn(props.nextBtn + 2);
    } else {
      props.setNextBtn(props.nextBtn + 1);
    }
  };
  return (
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_bd" />
      <img className="bnchat" src={bnchat} alt="bnchat" />
      <p className="dialog_oneline">그건 전부 네가 한 선택의 결과물</p>
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
        className="choiceNo2"
        onClick={() => {
          setNextBtn(nextBtn + 2);
        }}
      >
        <img className="chdeco" src={chdeco} alt="chdeco2" />
        <p className="yesp_bell">여기는 어디?</p>
      </button>
      <button
        className="choiceNo2"
        onClick={() => {
          setNextBtn(nextBtn + 1);
        }}
      >
        <img className="chdeco" src={chdeco} alt="chdeco2" />
        <p className="nop_bell">너는 누구?</p>
      </button>
    </div>
  );
};
const Dialog4 = (props) => {
  const buttonCount = () => {
    if (props.nextBtn === 3) {
      props.setNextBtn(props.nextBtn + 2);
    } else {
      props.setNextBtn(props.nextBtn + 1);
    }
  };

  return (
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_bd" />
      <img className="bnchat" src={bnchat} alt="bnchat" />
      <p className="dialog_oneline">여기는 네 꿈과 현실 사이의 세계</p>
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
    if (props.nextBtn === 3) {
      props.setNextBtn(props.nextBtn + 2);
    } else {
      props.setNextBtn(props.nextBtn + 1);
    }
  };

  return (
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_bd" />
      <img className="bnchat" src={bnchat} alt="bnchat" />
      <p className="dialog_oneline">나는 너의 무의식</p>
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
    if (props.nextBtn === 3) {
      props.setNextBtn(props.nextBtn + 2);
    } else {
      props.setNextBtn(props.nextBtn + 1);
    }
  };

  return (
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_bd" />
      <img className="bnchat" src={bnchat} alt="bnchat" />
      <p className="dialog_oneline">너의 선택이 이 세계를 만들어</p>
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
    if (props.nextBtn === 3) {
      props.setNextBtn(props.nextBtn + 2);
    } else {
      props.setNextBtn(props.nextBtn + 1);
    }
  };

  return (
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_bd" />
      <img className="bnchat" src={bnchat} alt="bnchat" />
      <p className="dialog_oneline">마지막 선택을 할 시간이네</p>
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
const Dialog8 = (props) => {
  const buttonCount = () => {
    if (props.nextBtn === 3) {
      props.setNextBtn(props.nextBtn + 2);
    } else {
      props.setNextBtn(props.nextBtn + 1);
    }
  };

  return (
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_bd" />
      <img className="bnchat" src={bnchat} alt="bnchat" />
      <p className="dialog_oneline">
        알잖아, 삶이란게 네 선택대로 흘러가지 않는 다는 사실
      </p>
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
const Dialog9 = (props) => {
  const buttonCount = () => {
    if (props.nextBtn === 3) {
      props.setNextBtn(props.nextBtn + 2);
    } else {
      props.setNextBtn(props.nextBtn + 1);
    }
  };

  return (
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_bd" />
      <img className="bnchat" src={bnchat} alt="bnchat" />
      <p className="dialog_oneline">여긴 네가 선택한 대로 세상이 움직여</p>
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
const Dialog10 = (props) => {
  const buttonCount = () => {
    if (props.nextBtn === 3) {
      props.setNextBtn(props.nextBtn + 2);
    } else {
      props.setNextBtn(props.nextBtn + 1);
    }
  };

  return (
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_bd" />
      <img className="bnchat" src={bnchat} alt="bnchat" />
      <p className="dialog_oneline">죽음조차, 선택하지 않는다면 영원히</p>
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
const Dialog11 = (props) => {
  const buttonCount = () => {
    if (props.nextBtn === 3) {
      props.setNextBtn(props.nextBtn + 2);
    } else {
      props.setNextBtn(props.nextBtn + 1);
    }
  };

  return (
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_bd" />
      <img className="bnchat" src={bnchat} alt="bnchat" />
      <p className="dialog_oneline">원한다면 머물러도 좋아</p>
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

const Dialog12 = (props) => {
  const buttonCount = () => {
    if (props.nextBtn === 3) {
      props.setNextBtn(props.nextBtn + 2);
    } else {
      props.setNextBtn(props.nextBtn + 1);
    }
  };

  return (
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_bd" />
      <img className="bnchat" src={bnchat} alt="bnchat" />
      <p className="dialog_oneline">어떻게 할래?</p>
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
const Dialog13 = (props) => {
  return (
    <div className="fadelick">
      <div className="wrap">
        <div className="card">
          <div className="card-front">
            <img className="carddeco" src={carddeco} alt="carddeco1" />
            <img className="coverdeco" src={coverdeco} alt="coverdeco1" />
          </div>
          <div className="card-back">
            <img className="carddeco" src={carddecoback} alt="carddeco1" />
            {/* <p className="chtext1">해야만 하는 일을 해</p> */}
            {/* <h2 className="script">해야만 하는 일을 해</h2> */}
            <Sound9in1 {...props} />
          </div>
        </div>
      </div>
      <div className="wrap2">
        <div className="card2">
          <div className="card-front2">
            <img className="carddeco" src={carddeco} alt="carddeco1" />
            <img className="coverdeco" src={coverdeco} alt="coverdeco1" />
          </div>
          <div className="card-back2">
            <img className="carddeco" src={carddecoback} alt="carddeco1" />
            {/* <p className="chtext1">하고 싶은 일을 해</p> */}
            {/* <h2 className="script">하고싶은 일을 해</h2> */}
            <Sound9in2 {...props} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bell;
