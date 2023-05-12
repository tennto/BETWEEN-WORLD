/* eslint-disable */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { batch } from "react-redux";
import "../../css/Chapter2.css";
import "../../css/Card.css";
import carddeco from "../carddeco.png";
import carddecoback from "../carddecoback.png";
import { Link } from "react-router-dom";
import chdeco from "../ChapterBoy/chdeco.png";
import textdeco from "../textdecoration.png";
import coverdeco from "../backdeco.png";
import bdchat from "../bdchat.png";
import bnchat from "../bnchat.png";
import watachat from "./watachat.png";
import wagichat from "../ChapterBoy/wagichat.png";
import { useNavigate } from "react-router-dom";
import ReactHowler from "../../howler/ReactHowler.js";
import axios from "axios";
const BellNo = () => {
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
  useEffect(() => {
    dataSubmit();
  }, []);
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
      return <Dialog8 />;
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
  let [btnState, setBtnState] = useState(1);
  useEffect(() => {
    setTimeout(() => {
      setBtnState(0);
    }, 5000);
  }, []);

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
      <p className="dialog_oneline">........</p>
      <button
        className={"nextBtn" + btnState}
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
    if (status.userSex === 1) {
      return <img className="watachat" src={watachat} alt="watachat" />;
    } else if (status.userSex === 2) {
      return <img className="watachat" src={wagichat} alt="wagichat" />;
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
      <p className="dialog_oneline">.........</p>
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
      <p className="dialog_oneline">그래</p>
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
    } else if (status.userSex === 2) {
      return <img className="watachat" src={wagichat} alt="wagichat" />;
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
    } else if (status.userSex === 2) {
      return <img className="watachat" src={wagichat} alt="wagichat" />;
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
      <p className="dialog_oneline">익숙한 노래만이 반복해서 들린다...</p>
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
  let [btnState, setBtnState] = useState(1);
  useEffect(() => {
    setTimeout(() => {
      setBtnState(0);
    }, 5000);
  }, []);
  const status = useSelector((state) => state);
  const imgReturn = () => {
    if (status.userSex === 1) {
      return <img className="watachat" src={watachat} alt="watachat" />;
    } else if (status.userSex === 2) {
      return <img className="watachat" src={wagichat} alt="wagichat" />;
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
      <p className="dialog_oneline">영원히</p>
      <button
        className={"nextBtn" + btnState}
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
  const navigate = useNavigate();
  const status = useSelector((state) => state);
  const gotoGallery = () => {
    navigate("/gallery", {
      state: { status },
    });
  };

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
          {" "}
          처음으로{" "}
        </button>
      </Link>
    </div>
  );
};

export default BellNo;
