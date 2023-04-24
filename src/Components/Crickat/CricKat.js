/* eslint-disable */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sound7in2 from "../Boymusic/Sound7in2";
import Sound7in1 from "../Boymusic/Sound7in1";
import "../../css/Chapter2.css";
import "../../css/Card.css";
import carddeco from "../carddeco.png";
import carddecoback from "../carddecoback.png";
import chdeco from "../ChapterBoy/chdeco.png";
import textdeco from "../textdecoration.png";
import coverdeco from "../backdeco.png";
import ckchat1 from "../ckchat.png";
import watachat from "./watachat.png";
import wagichat from "../ChapterBoy/wagichat.png";
import { batch } from "react-redux";

const CricKatBoy = () => {
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
    </div>
  );
};

const Dialog0 = (props) => {
  let [btnState, setBtnState] = useState(0);

  return (
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_ck" />
      <img className="ckchat1" src={ckchat1} alt="ckchat" />
      <p className="dialog_oneline">저기,</p>
      <button
        className={"nextBtn" + btnState}
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
      <img className="deco" src={textdeco} alt="textdeco_ck" />
      <img className="ckchat1" src={ckchat1} alt="ckchat" />
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
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_ck" />
      <img className="ckchat1" src={ckchat1} alt="ckchat" />
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
  const status = useSelector((state) => state);
  const imgReturn = () => {
    if (status.userSex === 1) {
      return <img className="watachat" src={watachat} alt="watachat" />;
    } else if (status.userSex === 2) {
      return <img className="watachat" src={wagichat} alt="wagichat" />;
    }
  };
  return (
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_ck" />
      {imgReturn()}
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
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_ck" />
      <img className="ckchat1" src={ckchat1} alt="ckchat" />
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
  const status = useSelector((state) => state);
  const imgReturn = () => {
    if (status.userSex === 1) {
      return <img className="watachat" src={watachat} alt="watachat" />;
    } else if (status.userSex === 2) {
      return <img className="watachat" src={wagichat} alt="wagichat" />;
    }
  };
  return (
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_ck" />
      {imgReturn()}
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
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_ck" />
      <img className="ckchat1" src={ckchat1} alt="ckchat" />
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
  const status = useSelector((state) => state);
  const imgReturn = () => {
    if (status.userSex === 1) {
      return <img className="watachat" src={watachat} alt="watachat" />;
    } else if (status.userSex === 2) {
      return <img className="watachat" src={wagichat} alt="wagichat" />;
    }
  };
  return (
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_ck" />
      {imgReturn()}
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
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_ck" />
      <img className="ckchat1" src={ckchat1} alt="ckchat" />
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
  const status = useSelector((state) => state);

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
            <Sound7in1 {...props} />
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
            <Sound7in2 {...props} />
          </div>
        </div>
      </div>
    </div>
  );
};
const Dialog10 = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state);
  var checkMS;
  useEffect(() => {
    if (status.sound4 === "산소리.mp3") {
      checkMS = "index/BIRDAnimeMF";
    } else if (status.sound4 === "바다소리.mp3") {
      checkMS = "index/BIRDAnimeSF";
    }
  }, []);

  const setText = () => {
    if (
      status.sound1 === "기쁨노래1.mp3" ||
      status.sound1 === "기쁨노래2.mp3"
    ) {
      return "...거짓말, 넌 사랑에 대해 아무것도 몰라.";
    } else {
      return "있지... 내가 죽으면 울어 줄거지?";
    }
  };

  return (
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_ck" />
      <img className="ckchat1" src={ckchat1} alt="ckchat" />
      <p className="dialog_oneline">{setText()}</p>
      <button
        className="nextBtn0"
        onClick={() => {
          batch(() => {
            dispatch({ type: "index/BIRD_1060" });
            dispatch({ type: checkMS });
          });
        }}
      >
        다음
      </button>
    </div>
  );
};
const Dialog11 = (props) => {
  const status = useSelector((state) => state);

  const setText = () => {
    if (
      status.sound1 === "기쁨노래1.mp3" ||
      status.sound1 === "기쁨노래2.mp3"
    ) {
      return "역시 그렇지?! (귀뚜라미는 기쁜 듯 울기 시작했다)";
    } else {
      return "네가 살아야, 나도 살아...";
    }
  };

  return (
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_ck" />
      <img className="ckchat1" src={ckchat1} alt="ckchat" />
      <p className="dialog_oneline">{setText()}</p>
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
  const status = useSelector((state) => state);
  const imgReturn = () => {
    if (status.userSex === 1) {
      return <img className="watachat" src={watachat} alt="watachat" />;
    } else if (status.userSex === 2) {
      return <img className="watachat" src={wagichat} alt="wagichat" />;
    }
  };
  var checkMS;
  useEffect(() => {
    if (status.sound4 === "산소리.mp3") {
      checkMS = "index/BIRDAnimeMF";
    } else if (status.sound4 === "바다소리.mp3") {
      checkMS = "index/BIRDAnimeSF";
    }
  }, []);
  return (
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_ck" />
      {imgReturn()}
      <p className="dialog_oneline">구슬픈 풀벌레의 울음소리가 들려온다..</p>
      <button
        className="nextBtn0"
        onClick={() => {
          batch(() => {
            dispatch({ type: "index/BIRD_1060" });
            dispatch({ type: checkMS });
          });
        }}
      >
        다음
      </button>
    </div>
  );
};

export default CricKatBoy;
