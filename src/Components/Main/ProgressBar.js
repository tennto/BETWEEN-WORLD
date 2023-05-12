import styled from "styled-components";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./Main.css";

const ProgressBar = () => {
  const [count, setCount] = useState(0);

  const status = useSelector((state) => state);

  const add_count = () => {
    if (status.moodSelect === 0) {
      setCount(0);
      console.log(count + "입니다");
    } else if (status.moodSelect === 1 || status.moodSelect === 2) {
      setCount(count + 1);
      console.log(count + "입니다");
    } else if (status.moodSelect === 6) {
      setCount(count + 1);
      console.log(count + "입니다");
    } else if (status.moodSelect === 7) {
      setCount(count + 1);
      console.log(count + "입니다");
    } else if (status.moodSelect === 1000) {
      setCount(count + 1);
      console.log(count + "입니다");
    } else if (
      status.moodSelect === 1010 ||
      status.moodSelect === 1020 ||
      status.moodSelect === 1030
    ) {
      setCount(count + 1);
      console.log(count + "입니다");
    } else if (status.moodSelect === 1040) {
      setCount(count + 1);
      console.log(count + "입니다");
    } else if (status.moodSelect === 1050) {
      setCount(count + 1);
      console.log(count + "입니다");
    } else if (status.moodSelect === 1060) {
      setCount(count + 1);
      console.log(count + "입니다");
    } else if (status.moodSelect === 1070) {
      setCount(count + 1);
      console.log(count + "입니다");
    } else if (status.moodSelect === 1080 || status.aniselect === 1090) {
      setCount(count + 1);
      console.log(count + "입니다");
    }
  };

  useEffect(() => {
    add_count();
  }, [status.moodSelect]);

  return (
    <div className="ContainerPro">
      <Progress width={(count / 10) * 100 + "%"} />
      <div className="Dot"></div>
      <br />
    </div>
  );
};

export default ProgressBar;

const Progress = styled.div`
  background-color: gray;
  width: ${(props) => props.width};
  height: 100%;
  transition: width 5s;
  border-radius: 20px;
`;
