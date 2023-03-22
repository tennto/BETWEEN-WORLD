import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GSound8in2 from "../Girlmusic/GSound8in2";
import GSound8in1 from "../Girlmusic/GSound8in1";
import GSound8in3 from "../Girlmusic/GSound8in3";
import GSound8in4 from "../Girlmusic/GSound8in4";
import GSound8in5 from "../Girlmusic/GSound8in5";
import GSound8in6 from "../Girlmusic/GSound8in6";
import "../../css/Chapter2.css";
import "../../css/Card.css";

const BirdGirl = () => {
  let [nextBtn, setNextBtn] = useState(0);
  let [changeBox, setChangeBox] = useState(0);

  const DialogFlow = () => {
    if (nextBtn === 0) {
      return <Dialog0 />;
    } else if (nextBtn === 1) {
      return <Dialog1 />;
    } else if (nextBtn === 2) {
      return <Dialog2 nextBtn={nextBtn} setNextBtn={setNextBtn} />;
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
      return <Dialog9 />;
    } else if (nextBtn === 10) {
      return <Dialog10 />;
    } else if (nextBtn === 11) {
      return <Dialog11 />;
    } else if (nextBtn === 12) {
      return <Dialog12 nextBtn={nextBtn} setNextBtn={setNextBtn} />;
    } else if (nextBtn === 13) {
      return <Dialog13 />;
    } else if (nextBtn === 14) {
      return <Dialog14 />;
    }
  };
  const buttonCount = () => {
    if (nextBtn === 3) {
      setNextBtn(nextBtn + 2);
    } else {
      setNextBtn(nextBtn + 1);
    }
  };

  return (
    <div className="CP2_UPPER">
      <div className={"caracterIcon" + changeBox}></div>
      {DialogFlow()}
      <button
        className={"nextBtn" + changeBox}
        onClick={() => {
          buttonCount();
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
      <h3 className="dialog_oneline">안녕. 인간</h3>
    </>
  );
};

const Dialog1 = () => {
  return (
    <>
      <h3 className="dialog_oneline">또 만났네.</h3>
    </>
  );
};

const Dialog2 = (props) => {
  const { nextBtn, setNextBtn } = props;

  return (
    <>
      <button
        className="choiceNo1"
        onClick={() => {
          setNextBtn(nextBtn + 1);
        }}
      >
        너는 누구지?
      </button>
      <button
        className="choiceNo1"
        onClick={() => {
          setNextBtn(nextBtn + 2);
        }}
      >
        본 적이 있던가?
      </button>
    </>
  );
};

const Dialog3 = () => {
  return (
    <>
      <h3 className="dialog_oneline">지금은 이런 모습이야</h3>
    </>
  );
};
const Dialog4 = () => {
  return (
    <>
      <h3 className="dialog_oneline">이미 여러번. 이 모습으론 처음이야</h3>
    </>
  );
};
const Dialog5 = () => {
  return (
    <>
      <h3 className="dialog_oneline">사람들은 말하지</h3>
    </>
  );
};
const Dialog6 = () => {
  return (
    <>
      <h3 className="dialog_oneline">"나 답게 있고 싶다.</h3>
    </>
  );
};
const Dialog7 = () => {
  return (
    <>
      <h3 className="dialog_oneline">그렇다면 나 다움이란 건 뭐지?</h3>
    </>
  );
};
const Dialog8 = () => {
  return (
    <>
      <h3 className="dialog_oneline">계속 이야기에 맞춰 내 모습을 바꿔왔어.</h3>
    </>
  );
};
const Dialog9 = () => {
  return (
    <>
      <h3 className="dialog_oneline">이건 나에게 주어진 일</h3>
    </>
  );
};
const Dialog10 = () => {
  return (
    <>
      <h3 className="dialog_oneline">나는 항상 나 답게 있고 싶었다.</h3>
    </>
  );
};
const Dialog11 = () => {
  return (
    <>
      <h3 className="dialog_oneline">나는 어떻게 해야만 하지?</h3>
    </>
  );
};
const Dialog12 = (props) => {
  const status = useSelector((state) => state);

  const showSound1 = () => {
    if (status.sound1 === "기쁨노래1" || status.sound1 === "기쁨노래2") {
      return <GSound8in1 {...props} />;
    } else if (status.sound1 === "슬픔노래1" || status.sound1 === "슬픔노래2") {
      return <GSound8in3 {...props} />;
    } else if (status.sound1 === "긴장노래1" || status.sound1 === "긴장노래2") {
      return <GSound8in5 {...props} />;
    }
  };
  const showSound2 = () => {
    if (status.sound1 === "기쁨노래1" || status.sound1 === "기쁨노래2") {
      return <GSound8in2 {...props} />;
    } else if (status.sound1 === "슬픔노래1" || status.sound1 === "슬픔노래2") {
      return <GSound8in4 {...props} />;
    } else if (status.sound1 === "긴장노래1" || status.sound1 === "긴장노래2") {
      return <GSound8in6 {...props} />;
    }
  };

  return (
    <>
      <div className="wrap">
        <div className="card">
          <div className="card-front">해야만 하는 일을 해</div>
          <div className="card-back">{showSound1()}</div>
        </div>
      </div>
      <div className="wrap2">
        <div className="card2">
          <div className="card-front2">하고 싶은 일을 해</div>
          <div className="card-back2">{showSound2()}</div>
        </div>
      </div>
    </>
  );
};

const Dialog13 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "index/SMBOY_1004" });
    }, 1000);
  }, [dispatch]);
  return (
    <>
      <h3 className="dialog_oneline">새는 구슬프게 울기 시작했다.</h3>
    </>
  );
};
const Dialog14 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "index/SMBOY_1004" });
    }, 1000);
  }, [dispatch]);
  return (
    <>
      <h3 className="dialog_oneline">^^</h3>
    </>
  );
};

export default BirdGirl;
