import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GSound4in2 from "../Girlmusic/GSound4in2";
import GSound4in1 from "../Girlmusic/GSound4in1";
import "../../css/Chapter2.css";
import "../../css/HappyText.css";

const SeaOrMountainGirl = () => {
  let [nextBtn, setNextBtn] = useState(0);
  let [changeBox, setChangeBox] = useState(0);

  const DialogFlow = () => {
    if (nextBtn === 0) {
      return <Dialog0 />;
    } else if (nextBtn === 1) {
      return <Dialog1 />;
    } else if (nextBtn === 2) {
      setTimeout(() => {
        setChangeBox(1);
      }, 10);
      return <Dialog2 nextBtn={nextBtn} setNextBtn={setNextBtn} />;
    } else if (nextBtn === 3) {
      return <Dialog3 />;
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
      <h3 className="dialog_oneline">
        지혜로운 자는 바다를 좋아하고,어진이는 산을 좋아한다고 했다.
      </h3>
    </>
  );
};

const Dialog1 = () => {
  return (
    <>
      <h3 className="dialog_oneline">너는 어느 쪽?</h3>
    </>
  );
};

const Dialog2 = (props) => {
  const status = useSelector((state) => state);
  const dispatch = useDispatch();
  let [nextBtn, setNextBtn] = useState(0);
  const [visible, setVisible] = useState(1);
  const [visible2, setVisible2] = useState(1);

  const isHovering = () => {
    if (visible === 1) {
      return (
        <div
          className="hover2"
          onClick={() => {
            setVisible(0);
          }}
        >
          음악 1(앞면)
        </div>
      );
    } else {
      return "";
    }
  };

  const isHovering2 = () => {
    if (visible2 === 1) {
      return (
        <div
          className="selec_2"
          onClick={() => {
            setVisible2(0);
          }}
        >
          음악 2 (앞면)
        </div>
      );
    } else {
      return "";
    }
  };
  return (
    <>
      <div
        className="selec_1"
        onMouseOut={() => {
          setVisible2(1);
        }}
      >
        {" "}
        <GSound4in2 {...props} />
      </div>
      <div
        className="hover1"
        onMouseOut={() => {
          setVisible(1);
        }}
      >
        {" "}
        <GSound4in1 {...props} />
      </div>
      {isHovering2()}
      {isHovering()}
    </>
  );
};

const Dialog3 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "index/SMGIRL_1404" });
    }, 1000);
  }, [dispatch]);
  return (
    <>
      <h3 className="dialog_oneline">...</h3>
    </>
  );
};

export default SeaOrMountainGirl;
