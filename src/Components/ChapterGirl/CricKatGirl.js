import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GSound7in2 from "../Girlmusic/GSound7in2";
import GSound7in1 from "../Girlmusic/GSound7in1";
import "../../css/Chapter2.css";
import "../../css/Card.css";

const CricKatGirl = () => {
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
      return <Dialog9 nextBtn={nextBtn} setNextBtn={setNextBtn} />;
    } else if (nextBtn === 10) {
      return <Dialog10 />;
    } else if (nextBtn === 11) {
      return <Dialog11 />;
    } else if (nextBtn === 12) {
      return <Dialog12 />;
    }
  };

  return (
    <div className="CP2_UPPER">
      <div className={"caracterIcon" + changeBox}></div>
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
    <>
      <h3 className="dialog_oneline">저기,</h3>
    </>
  );
};

const Dialog1 = () => {
  return (
    <>
      <h3 className="dialog_oneline">사랑이 뭐라고 생각해?</h3>
    </>
  );
};

const Dialog2 = () => {
  return (
    <>
      <h3 className="dialog_oneline">
        사랑한다면, 함께 하고 싶은게 당연하잖아?
      </h3>
    </>
  );
};

const Dialog3 = () => {
  return (
    <>
      <h3 className="dialog_oneline">나 : ...</h3>
    </>
  );
};
const Dialog4 = () => {
  return (
    <>
      <h3 clasName="dialog_oneline">
        사랑한다면, 목숨도 아깝지 않은게 당연하잖아?
      </h3>
    </>
  );
};
const Dialog5 = () => {
  return (
    <>
      <h3 className="dialog_oneline">나 : ...</h3>
    </>
  );
};
const Dialog6 = () => {
  return (
    <>
      <h3 className="dialog_oneline">
        사랑한다면, 목숨도 아깝지 않은게 당연하잖아?
      </h3>
    </>
  );
};
const Dialog7 = () => {
  return (
    <>
      <h3 className="dialog_oneline">....</h3>
    </>
  );
};
const Dialog8 = () => {
  return (
    <>
      <h3 className="dialog_oneline">
        사랑한다면, 나는 어찌 되든 좋은게 당연하잖아
      </h3>
    </>
  );
};
const Dialog9 = (props) => {
  return (
    <>
      <div className="wrap">
        <div className="card">
          <div className="card-front">'고개를 끄덕인다'</div>
          <div className="card-back">
            <GSound7in1 {...props} />
          </div>
        </div>
      </div>
      <div className="wrap2">
        <div className="card2">
          <div className="card-front2">'고개를 가로젖는다'</div>
          <div className="card-back2">
            <GSound7in2 {...props} />
          </div>
        </div>
      </div>
    </>
  );
};
const Dialog10 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "index/CKGIRL_1406" });
    }, 1000);
  }, [dispatch]);
  return (
    <>
      <h3 className="dialog_oneline">있지... 내가 죽으면 울어 줄거지?</h3>
    </>
  );
};
const Dialog11 = () => {
  return (
    <>
      <h3 className="dialog_oneline">너가 살아야 나도 살아</h3>
    </>
  );
};
const Dialog12 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "index/BIRDGIRL_1406" });
    }, 1000);
  }, [dispatch]);
  return (
    <>
      <h3 className="dialog_oneline">꽃아, 꽃아.</h3>
    </>
  );
};

export default CricKatGirl;
