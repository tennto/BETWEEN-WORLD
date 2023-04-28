/* eslint-disable */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sound8in2 from "../Boymusic/Sound8in2";
import Sound8in1 from "../Boymusic/Sound8in1";
import Sound8in3 from "../Boymusic/Sound8in3";
import Sound8in4 from "../Boymusic/Sound8in4";
import Sound8in5 from "../Boymusic/Sound8in5";
import Sound8in6 from "../Boymusic/Sound8in6";

import "../../css/Chapter2.css";
import "../../css/Card.css";
import carddeco from "../carddeco.png";
import carddecoback from "../carddecoback.png";
import { Link } from "react-router-dom";
import chdeco from "../ChapterBoy/chdeco.png";
import textdeco from "../textdecoration.png";
import coverdeco from "../backdeco.png";
import hbchat2 from "../bdchat2.png";
import sbchat from "../sbchat1.png";
import sbchat2 from "../sbchat2.png";
import tbchat from "../tbchat1.png";
import tbchat2 from "../tbchat2.png";
import bdchat from "../bdchat.png";
import watachat from "./watachat.png";
import wagichat from "../ChapterBoy/wagichat.png";
import { batch } from "react-redux";

import HBCard from "./birdcard1.png";
import SBCard from "./birdcard2.png";
import TBCard from "./birdcard3.png";
import HBCard2 from "./birdcard4.png";
import SBCard2 from "./birdcard5.png";
import TBCard2 from "./birdcard6.png";

const Bird = () => {
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
  const status = useSelector((state) => state);
  const imgReturn = () => {
    if (
      status.sound1 === "기쁨노래1.mp3" ||
      status.sound1 === "기쁨노래2.mp3"
    ) {
      return <img className="bdchat" src={bdchat} alt="hbdchat" />;
    } else if (
      status.sound1 === "슬픔노래1.mp3" ||
      status.sound1 === "슬픔노래2.mp3"
    ) {
      return <img className="bdchat" src={sbchat} alt="hbdchat" />;
    } else {
      return <img className="bdchat" src={tbchat} alt="hbdchat" />;
    }
  };
  const buttonCount = () => {
    if (props.nextBtn === 3) {
      props.setNextBtn(props.nextBtn + 2);
    } else {
      props.setNextBtn(props.nextBtn + 1);
    }
  };
  let [btnFade, setBtnFade] = useState(1);
  useEffect(() => {
    setTimeout(() => {
      setBtnFade(0);
    }, 5000);
  }, []);

  return (
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_bd" />
      {imgReturn()}
      <p className="dialog_oneline">안녕. 인간</p>
      <button
        className={"nextBtn" + btnFade}
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
  const status = useSelector((state) => state);
  const imgReturn = () => {
    if (
      status.sound1 === "기쁨노래1.mp3" ||
      status.sound1 === "기쁨노래2.mp3"
    ) {
      return <img className="bdchat" src={bdchat} alt="hbdchat" />;
    } else if (
      status.sound1 === "슬픔노래1.mp3" ||
      status.sound1 === "슬픔노래2.mp3"
    ) {
      return <img className="bdchat" src={sbchat} alt="hbdchat" />;
    } else {
      return <img className="bdchat" src={tbchat} alt="hbdchat" />;
    }
  };
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
      {imgReturn()}
      <p className="dialog_oneline">또 만났네.</p>
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
  const { nextBtn, setNextBtn } = props;

  return (
    <div className="fadelick_ch">
      <button
        className="choiceNo2"
        onClick={() => {
          setNextBtn(nextBtn + 1);
        }}
      >
        <img className="chdeco" src={chdeco} alt="chdeco2" />
        <p className="yesp_bd">너는 누구지?</p>
      </button>
      <button
        className="choiceNo2"
        onClick={() => {
          setNextBtn(nextBtn + 2);
        }}
      >
        <img className="chdeco" src={chdeco} alt="chdeco2" />
        <p className="nop_bd">본 적이 있던가?</p>
      </button>
    </div>
  );
};

const Dialog3 = (props) => {
  const status = useSelector((state) => state);
  const imgReturn = () => {
    if (
      status.sound1 === "기쁨노래1.mp3" ||
      status.sound1 === "기쁨노래2.mp3"
    ) {
      return <img className="bdchat" src={bdchat} alt="hbdchat" />;
    } else if (
      status.sound1 === "슬픔노래1.mp3" ||
      status.sound1 === "슬픔노래2.mp3"
    ) {
      return <img className="bdchat" src={sbchat} alt="hbdchat" />;
    } else {
      return <img className="bdchat" src={tbchat} alt="hbdchat" />;
    }
  };
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
      {imgReturn()}
      <p className="dialog_oneline">지금은 이런 모습이야</p>
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
  const status = useSelector((state) => state);
  const imgReturn = () => {
    if (
      status.sound1 === "기쁨노래1.mp3" ||
      status.sound1 === "기쁨노래2.mp3"
    ) {
      return <img className="bdchat" src={bdchat} alt="hbdchat" />;
    } else if (
      status.sound1 === "슬픔노래1.mp3" ||
      status.sound1 === "슬픔노래2.mp3"
    ) {
      return <img className="bdchat" src={sbchat} alt="hbdchat" />;
    } else {
      return <img className="bdchat" src={tbchat} alt="hbdchat" />;
    }
  };
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
      {imgReturn()}
      <p className="dialog_oneline">이미 여러번. 이 모습으론 처음이야</p>
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
  const status = useSelector((state) => state);
  const imgReturn = () => {
    if (
      status.sound1 === "기쁨노래1.mp3" ||
      status.sound1 === "기쁨노래2.mp3"
    ) {
      return <img className="bdchat" src={bdchat} alt="hbdchat" />;
    } else if (
      status.sound1 === "슬픔노래1.mp3" ||
      status.sound1 === "슬픔노래2.mp3"
    ) {
      return <img className="bdchat" src={sbchat} alt="hbdchat" />;
    } else {
      return <img className="bdchat" src={tbchat} alt="hbdchat" />;
    }
  };
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
      {imgReturn()}
      <p className="dialog_oneline">사람들은 말하지</p>
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
  const status = useSelector((state) => state);
  const imgReturn = () => {
    if (
      status.sound1 === "기쁨노래1.mp3" ||
      status.sound1 === "기쁨노래2.mp3"
    ) {
      return <img className="bdchat" src={bdchat} alt="hbdchat" />;
    } else if (
      status.sound1 === "슬픔노래1.mp3" ||
      status.sound1 === "슬픔노래2.mp3"
    ) {
      return <img className="bdchat" src={sbchat} alt="hbdchat" />;
    } else {
      return <img className="bdchat" src={tbchat} alt="hbdchat" />;
    }
  };
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
      {imgReturn()}
      <p className="dialog_oneline">"나 답게 있고 싶다"</p>
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
  const status = useSelector((state) => state);
  const imgReturn = () => {
    if (
      status.sound1 === "기쁨노래1.mp3" ||
      status.sound1 === "기쁨노래2.mp3"
    ) {
      return <img className="bdchat" src={bdchat} alt="hbdchat" />;
    } else if (
      status.sound1 === "슬픔노래1.mp3" ||
      status.sound1 === "슬픔노래2.mp3"
    ) {
      return <img className="bdchat" src={sbchat} alt="hbdchat" />;
    } else {
      return <img className="bdchat" src={tbchat} alt="hbdchat" />;
    }
  };
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
      {imgReturn()}
      <p className="dialog_oneline">그렇다면 나 다움이란 건 뭐지?</p>
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
  const status = useSelector((state) => state);
  const imgReturn = () => {
    if (
      status.sound1 === "기쁨노래1.mp3" ||
      status.sound1 === "기쁨노래2.mp3"
    ) {
      return <img className="bdchat" src={bdchat} alt="hbdchat" />;
    } else if (
      status.sound1 === "슬픔노래1.mp3" ||
      status.sound1 === "슬픔노래2.mp3"
    ) {
      return <img className="bdchat" src={sbchat} alt="hbdchat" />;
    } else {
      return <img className="bdchat" src={tbchat} alt="hbdchat" />;
    }
  };
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
      {imgReturn()}
      <p className="dialog_oneline">계속 이야기에 맞춰 내 모습을 바꿔왔어.</p>
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
  const status = useSelector((state) => state);
  const imgReturn = () => {
    if (
      status.sound1 === "기쁨노래1.mp3" ||
      status.sound1 === "기쁨노래2.mp3"
    ) {
      return <img className="bdchat" src={bdchat} alt="hbdchat" />;
    } else if (
      status.sound1 === "슬픔노래1.mp3" ||
      status.sound1 === "슬픔노래2.mp3"
    ) {
      return <img className="bdchat" src={sbchat} alt="hbdchat" />;
    } else {
      return <img className="bdchat" src={tbchat} alt="hbdchat" />;
    }
  };
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
      {imgReturn()}
      <p className="dialog_oneline">이건 나에게 주어진 일</p>
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
  const status = useSelector((state) => state);
  const imgReturn = () => {
    if (
      status.sound1 === "기쁨노래1.mp3" ||
      status.sound1 === "기쁨노래2.mp3"
    ) {
      return <img className="bdchat" src={bdchat} alt="hbdchat" />;
    } else if (
      status.sound1 === "슬픔노래1.mp3" ||
      status.sound1 === "슬픔노래2.mp3"
    ) {
      return <img className="bdchat" src={sbchat} alt="hbdchat" />;
    } else {
      return <img className="bdchat" src={tbchat} alt="hbdchat" />;
    }
  };
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
      {imgReturn()}
      <p className="dialog_oneline">나는 항상 나 답게 있고 싶었어.</p>
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
  const status = useSelector((state) => state);
  const imgReturn = () => {
    if (
      status.sound1 === "기쁨노래1.mp3" ||
      status.sound1 === "기쁨노래2.mp3"
    ) {
      return <img className="bdchat" src={bdchat} alt="hbdchat" />;
    } else if (
      status.sound1 === "슬픔노래1.mp3" ||
      status.sound1 === "슬픔노래2.mp3"
    ) {
      return <img className="bdchat" src={sbchat} alt="hbdchat" />;
    } else {
      return <img className="bdchat" src={tbchat} alt="hbdchat" />;
    }
  };
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
      {imgReturn()}
      <p className="dialog_oneline">나는 어떻게 해야만 하지?</p>
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
  const status = useSelector((state) => state);
  const showSound1 = () => {
    if (
      status.sound1 === "기쁨노래1.mp3" ||
      status.sound1 === "기쁨노래2.mp3"
    ) {
      return (
        <>
          <Sound8in1 {...props} />
        </>
      );
    } else if (
      status.sound1 === "슬픔노래1.mp3" ||
      status.sound1 === "슬픔노래2.mp3"
    ) {
      return (
        <>
          <Sound8in3 {...props} />
        </>
      );
    } else if (
      status.sound1 === "긴장노래1.mp3" ||
      status.sound1 === "긴장노래2.mp3" ||
      status.sound1 === "긴장노래3.mp3"
    ) {
      return (
        <>
          <Sound8in5 {...props} />
        </>
      );
    }
  };

  const showSound2 = () => {
    if (
      status.sound1 === "기쁨노래1.mp3" ||
      status.sound1 === "기쁨노래2.mp3"
    ) {
      return (
        <>
          <Sound8in2 {...props} />
        </>
      );
    } else if (
      status.sound1 === "슬픔노래1.mp3" ||
      status.sound1 === "슬픔노래2.mp3"
    ) {
      return (
        <>
          <Sound8in4 {...props} />
        </>
      );
    } else if (
      status.sound1 === "긴장노래1.mp3" ||
      status.sound1 === "긴장노래2.mp3" ||
      status.sound1 === "긴장노래3.mp3"
    ) {
      return (
        <>
          <Sound8in6 {...props} />
        </>
      );
    }
  };

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
            {showSound1()}
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
            {showSound2()}
          </div>
        </div>
      </div>
    </div>
  );
};

const Dialog13 = (props) => {
  const status = useSelector((state) => state);
  const imgReturn = () => {
    if (status.userSex === 1) {
      return <img className="watachat" src={watachat} alt="watachat" />;
    } else if (status.userSex === 2) {
      return <img className="watachat" src={wagichat} alt="wagichat" />;
    }
  };
  const dispatch = useDispatch();
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
      {imgReturn()}
      <p className="dialog_oneline">새는 노래하기 시작했다.</p>
      <button
        className="nextBtn0"
        onClick={() => {
          batch(() => {
            dispatch({ type: "index/BELL_1070" });
            dispatch({ type: "index/BELLAnimeF" });
          });
        }}
      >
        다음
      </button>
    </div>
  );
};

const Dialog14 = (props) => {
  const status = useSelector((state) => state);
  const imgReturn = () => {
    if (status.userSex === 1) {
      return <img className="watachat" src={watachat} alt="watachat" />;
    } else {
      return <img className="watachat" src={wagichat} alt="watachat" />;
    }
  };
  const dispatch = useDispatch();
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
      {imgReturn()}
      <p className="dialog_oneline">새는 부리를 벗고 환하게 웃기 시작했다.</p>
      <button
        className="nextBtn0"
        onClick={() => {
          batch(() => {
            dispatch({ type: "index/BELL_1070" });
            dispatch({ type: "index/BELLAnimeF" });
          });
        }}
      >
        다음
      </button>
    </div>
  );
};
export default Bird;
