/* eslint-disable */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GSound7in2 from "../Girlmusic/GSound7in2";
import GSound7in1 from "../Girlmusic/GSound7in1";
import "../../css/Chapter2.css";
import "../../css/Card.css";
import carddeco from "../carddeco.png";
import carddecoback from "../carddecoback.png";
import chdeco from "../ChapterBoy/chdeco.png";
import textdeco from "../textdecoration.png";
import coverdeco from "../backdeco.png";

const CricKatGirl3404 = () => {
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
      return <Dialog10 />;
    } else if (nextBtn === 11) {
      return <Dialog11 nextBtn={nextBtn} setNextBtn={setNextBtn} />;
    } else if (nextBtn === 12) {
      return <Dialog12 />;
    }
  };

  return (
    <div className="CP2_UPPER">
      {/* <div className={"caracterIcon" + changeBox}></div> */}
      {DialogFlow()}
      {/* <button
        className="nextBtn0"
        onClick={() => {
          props.setNextBtn(props.nextBtn + 1);
        }}
      >
        다음
      </button> */}
    </div>
  );
};

const Dialog0 = (props) => {
  return (
    <div className="forFade_g">
      <img className="deco" src={textdeco} alt="textdeco_ck" />
      <p className="dialog_oneline">저기,</p>
      <button
        className="nextBtn0"
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
    <div className="forFade_g">
      <img className="deco" src={textdeco} alt="textdeco_ck" />
      <p className="dialog_oneline">사랑이 뭐라고 생각해?</p>
      <button
        className="nextBtn0"
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
    <div className="forFade_g">
      <img className="deco" src={textdeco} alt="textdeco_ck" />
      <p className="dialog_oneline">사랑한다면, 함께 하고 싶은게 당연하잖아?</p>
      <button
        className="nextBtn0"
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
    <div className="forFade_g">
      <img className="deco" src={textdeco} alt="textdeco_ck" />
      <p className="dialog_oneline">. . .</p>
      <button
        className="nextBtn0"
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
  return (
    <div className="forFade_g">
      <img className="deco" src={textdeco} alt="textdeco_ck" />
      <p className="dialog_oneline">
        사랑한다면, 가장 좋은걸 주고 싶은게 당연하잖아?
      </p>
      <button
        className="nextBtn0"
        onClick={() => {
          props.setNextBtn(props.nextBtn + 1);
        }}
      >
        다음
      </button>
    </div>
  );
};
const Dialog5 = (props) => {
  return (
    <div className="forFade_g">
      <img className="deco" src={textdeco} alt="textdeco_ck" />
      <p className="dialog_oneline">. . .</p>
      <button
        className="nextBtn0"
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
    <div className="forFade_g">
      <img className="deco" src={textdeco} alt="textdeco_ck" />
      <p className="dialog_oneline">
        사랑한다면, 목숨도 아깝지 않은게 당연하잖아?
      </p>
      <button
        className="nextBtn0"
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
    <div className="forFade_g">
      <p className="dialog_oneline">. . . . . .</p>
      <button
        className="nextBtn0"
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
    <div className="forFade_g">
      <img className="deco" src={textdeco} alt="textdeco_ck" />
      <p className="dialog_oneline">
        사랑한다면, 나는 어찌 되든 좋은게 당연하잖아..
      </p>
      <button
        className="nextBtn0"
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
    <div className="fadelick">
      <div className="wrap">
        <div className="card">
          <div className="card-front">
            <img className="carddeco" src={carddeco} alt="carddeco1" />
            <img className="coverdeco" src={coverdeco} alt="coverdeco1" />
          </div>
          <div className="card-back">
            <img className="carddeco" src={carddecoback} alt="carddeco1" />
            <GSound7in1 {...props} />
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
            <GSound7in2 {...props} />
          </div>
        </div>
      </div>
    </div>
  );
};
const Dialog10 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "index/CKGIRL_3414" });
    });
  }, [dispatch]);
  return (
    <div className="forFade_g">
      <img className="deco" src={textdeco} alt="textdeco_ck" />
      <p className="dialog_oneline">있지... 내가 죽으면 울어 줄거지?</p>
      <button
        className="c2girlnextBtn0"
        onClick={() => {
          dispatch({ type: "index/BIRDGIRL_1405" });
        }}
      >
        다음
      </button>
    </div>
  );
};
const Dialog11 = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "index/CKGIRL_3424" });
    });
  }, [dispatch]);
  return (
    <div className="forFade_g">
      <img className="deco" src={textdeco} alt="textdeco_ck" />
      <p className="dialog_oneline">네가 살아야, 나도 살아</p>
      <button
        className="nextBtn0"
        onClick={() => {
          props.setNextBtn(props.nextBtn + 1);
        }}
      >
        다음
      </button>
    </div>
  );
};
const Dialog12 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "index/BIRDGIRL_3405" });
    }, 5000);
  }, [dispatch]);
  return (
    <div className="forFade_g">
      <img className="deco" src={textdeco} alt="textdeco_ck" />
      <p className="dialog_oneline">귀뚜라미는 서글프게 울기 시작했다..</p>
    </div>
  );
};

export default CricKatGirl3404;
