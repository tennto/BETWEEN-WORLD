import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sound5in2 from "../Boymusic/Sound5in2";
import Sound5in1 from "../Boymusic/Sound5in1";
import "../../css/Chapter2.css";
import "../../css/HappyText.css";

const SnowManBoy = () => {
  let [nextBtn, setNextBtn] = useState(1);
  let [changeBox, setChangeBox] = useState(0);
  const textFlow = () => {
    if (nextBtn === 1) {
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
      setTimeout(() => {
        setChangeBox(1);
      }, 10);
      return <Dialog10 />;
    }
  };

  return (
    <div className="CP3_UPPER">
      {textFlow()}
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

const Dialog1 = () => {
  return (
    <>
      <p className="dialog_oneline">...</p>
    </>
  );
};
const Dialog2 = () => {
  return (
    <>
      <p className="dialog_oneline">추워 ...</p>
    </>
  );
};

const Dialog3 = () => {
  return (
    <>
      <p className="dialog_oneline">...</p>
    </>
  );
};
const Dialog4 = () => {
  const status = useSelector((state) => state);
  return (
    <>
      <p className="dialog_oneline">
        있잖아, {status.userName}아 부탁 하나만 들어줄래?{" "}
      </p>
    </>
  );
};

const Dialog5 = () => {
  return (
    <>
      <p className="dialog_oneline">한 번 만이라도,</p>
    </>
  );
};

const Dialog6 = () => {
  return (
    <>
      <p className="dialog_oneline">따뜻하게 있고 싶어</p>
    </>
  );
};

const Dialog7 = () => {
  return (
    <>
      <p className="dialog_oneline">그러니까, 모닥불 좀 켜줄래?</p>
    </>
  );
};
const Dialog8 = () => {
  return (
    <>
      <p className="dialog_oneline">제발, 부탁이야..</p>
    </>
  );
};

const Dialog9 = (props) => {
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
        <Sound5in2 {...props} />
      </div>
      <div
        className="hover1"
        onMouseOut={() => {
          setVisible(1);
        }}
      >
        {" "}
        <Sound5in1 {...props} />
      </div>
      {isHovering2()}
      {isHovering()}
    </>
  );
};

const Dialog10 = () => {
  return (
    <>
      <p className="dialog_oneline">아... 아..</p>
    </>
  );
};

export default SnowManBoy;
