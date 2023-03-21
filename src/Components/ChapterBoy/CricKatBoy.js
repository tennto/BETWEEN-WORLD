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

const CricKatBoy = () => {
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
      return <Dialog4 />;
    } else if (nextBtn === 5) {
      return <Dialog5 />;
    } else if (nextBtn === 6) {
      return <Dialog6 />;
    } else if (nextBtn === 7) {
      return <Dialog7 />;
    } else if (nextBtn === 8) {
      return <Dialog8 />;
    } else if (nextBtn === 9) {
      setTimeout(() => {
        setChangeBox(1);
      }, 10);
      return <Dialog9 nextBtn={nextBtn} setNextBtn={setNextBtn} />;
    } else if (nextBtn === 10) {
      setTimeout(() => {
        setChangeBox(0);
      }, 10);
      return <Dialog10 />;
    } else if (nextBtn === 11) {
      return <Dialog11 />;
    } else if (nextBtn === 12) {
      return <Dialog12 />;
    }
  };

  return (
    <div className="CP2_UPPER">
      {/* <div className={"caracterIcon" + changeBox}></div> */}
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
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_ck" />
      <h3 className="dialog_oneline">저기,</h3>
    </div>
  );
};

const Dialog1 = () => {
  return (
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_ck" />
      <h3 className="dialog_oneline">사랑이 뭐라고 생각해?</h3>
    </div>
  );
};

const Dialog2 = () => {
  return (
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_ck" />
      <h3 className="dialog_oneline">
        사랑한다면, 함께 하고 싶은게 당연하잖아?
      </h3>
    </div>
  );
};

const Dialog3 = () => {
  return (
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_ck" />
      <h3 className="dialog_oneline">...</h3>
    </div>
  );
};
const Dialog4 = () => {
  return (
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_ck" />
      <h3 className="dialog_oneline">
        사랑한다면, 가장 좋은걸 주고 싶은게 당연하잖아?
      </h3>
    </div>
  );
};
const Dialog5 = () => {
  return (
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_ck" />
      <h3 className="dialog_oneline">...</h3>
    </div>
  );
};
const Dialog6 = () => {
  return (
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_ck" />
      <h3 className="dialog_oneline">
        사랑한다면, 목숨도 아깝지 않은게 당연하잖아?
      </h3>
    </div>
  );
};
const Dialog7 = () => {
  return (
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_ck" />
      <h3 className="dialog_oneline">......</h3>
    </div>
  );
};
const Dialog8 = () => {
  return (
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_ck" />
      <h3 className="dialog_oneline">
        사랑한다면, 나는 어찌 되든 좋은게 당연하잖아..
      </h3>
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
            '고개를 끄덕인다'
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
            '고개를 가로젖는다'
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
  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "index/CKBOY_1006" });
    }, 1000);
  }, [dispatch]);
  return (
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_ck" />
      <h3 className="dialog_oneline">있지... 내가 죽으면 울어 줄거지?</h3>
    </div>
  );
};
const Dialog11 = () => {
  return (
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_ck" />
      <h3 className="dialog_oneline">네가 살아야, 나도 살아</h3>
    </div>
  );
};
const Dialog12 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "index/BIRDBOY_1006" });
    }, 1000);
  }, [dispatch]);
  return (
    <div className="forFade_b">
      <img className="deco" src={textdeco} alt="textdeco_ck" />
      <h3 className="dialog_oneline">꽃아, 꽃아.</h3>
    </div>
  );
};

export default CricKatBoy;
