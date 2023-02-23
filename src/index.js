import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
// import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

// 초기값 설정
// textLine 은 대화 상태를 관리하기 위한 프로퍼티
// moodSelect 는 스토리라인 상태를 관리하기 위한 프로퍼티
// userInfoArr 는 유저데이터를 위한 프로퍼티
const initialState = {
  textLine: 1,
  moodSelect: 1,
  userInfoArr: [],
};

// 액션 명 설정
const happMood = "HAPPY_MOOD";
const sadMood = "SAD_MOOD";
const thrillMood = "THRILL_MOOD";
const NNextBtn1 = "NNAME_NEXT1";
// reducer 설정
function reducer(state = initialState, action) {
  switch (action.type) {
    case happMood: {
      return {
        ...state,
        moodSelect: 100,
      };
    }
    case sadMood: {
      return {
        ...state,
        moodSelect: 200,
      };
    }
    case thrillMood: {
      return {
        ...state,
        moodSelect: 300,
      };
    }
    case NNextBtn1: {
      return {
        ...state,
        moodSelect: 2,
      };
    }
    default: {
      return state;
    }
  }
}

// Store 선언
let store = createStore(reducer);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
