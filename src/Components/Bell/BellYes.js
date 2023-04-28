/* eslint-disable */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, batch } from "react-redux";
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
import wagichat from "../ChapterBoy/wagichat.png";
import { useNavigate } from "react-router-dom";
import ReactHowler from "../../howler/ReactHowler.js";
import axios from "axios";

const BellYes = () => {
  let [nextBtn, setNextBtn] = useState(0);
  const status = useSelector((state) => state);
  const dataSubmit = async () => {
    await axios.post("/gallery/userinfo", {
      userName: status.userName,
      userSex: status.userSex,
      sound1: status.sound1,
      sound2: status.sound2,
      sound4: status.sound4,
      sound6: status.sound6,
      sound7: status.sound7,
      sound8: status.sound8,
    });
  };

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
      return <Dialog7 />;
    }
  };

  useEffect(() => {
    dataSubmit();
  }, []);

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
  let [btnFade, setBtnFade] = useState(1);
  useEffect(() => {
    setTimeout(() => {
      setBtnFade(0);
    }, 5000);
  }, []);
  return (
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_bd" />
      <img className="bnchat" src={bnchat} alt="bnchat" />
      <p className="dialog_oneline">그래</p>
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
      <p className="dialog_oneline">그것 또한 너의 선택</p>
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
      <p className="dialog_oneline">앞으로 무수한 선택의 기로에 놓이겠지</p>
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
      <p className="dialog_oneline">후회하지 않는 삶을 살길</p>
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
  // const status = useSelector((state) => state);
  // const imgReturn = () => {
  //   if (status.userSex === 1) {
  //     return <img className="watachat" src={watachat} alt="watachat" />;
  //   } else {
  //     return <img className="watachat" src={wagichat} alt="watachat" />;
  //   }
  // };
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
      <p className="dialog_oneline">......</p>
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
    if (status.userSex === 1) {
      return <img className="watachat" src={watachat} alt="watachat" />;
    } else {
      return <img className="watachat" src={wagichat} alt="watachat" />;
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
      <p className="dialog_oneline">......</p>
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
    if (status.userSex === 1) {
      return <img className="watachat" src={watachat} alt="watachat" />;
    } else {
      return <img className="watachat" src={wagichat} alt="watachat" />;
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
      <p className="dialog_oneline">어디선가 익숙한 소리가 귓가에 맴돈다...</p>
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
const Dialog7 = () => {
  const navigate = useNavigate();
  const status = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="fadelick">
      {/* <img className="deco" src={textdeco} alt="textdeco_bd" />
      <img className="bnchat" src={bnchat} alt="bnchat" />
      <p className="dialog_oneline">……</p> */}
      <Link to="/">
        <button
          className="goToHome"
          onClick={() => {
            batch(() => {
              dispatch({ type: "index/RESET_ALL1" });
              dispatch({ type: "index/RESET_ALL2" });
              dispatch({ type: "index/RESET_ALL3" });
              dispatch({ type: "index/RESET_ALL4" });
              dispatch({ type: "index/RESET_ALL5" });
              dispatch({ type: "index/RESET_ALL6" });
              dispatch({ type: "index/RESET_ALL7" });
              dispatch({ type: "index/RESET_ALL8" });
              dispatch({ type: "index/RESET_ALL9" });
              dispatch({ type: "index/RESET_ALL10" });
              dispatch({ type: "index/RESET_ALL11" });
              dispatch({ type: "index/RESET_ALL12" });
              dispatch({ type: "index/RESET_ALL13" });
            });
          }}
        >
          처음으로
        </button>
      </Link>
    </div>
  );
};

export default BellYes;
