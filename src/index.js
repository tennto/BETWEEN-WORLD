/* eslint-disable */

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
// userName 은 유저닉네임을 위한 프로퍼티

const initialState = {
  textLine: 1,
  btnReset: 0,
  moodSelect: 1,
  aniSelect: 1,
  cardSelect: 1,
  add: 1,
  userName: "",
  sound1: "",
  sound2: "",
  sound3: "",
  sound4: "",
  sound5: "",
  sound6: "",
  sound7: "",
  sound8: "",
};

export const setName = (name) => {
  return { type: SET_NAME, name };
};
export const cardSelect = (card) => {
  return { type: SET_CARD, card };
};

export const setSound1 = (sound1) => {
  return { type: SET_SOUND1, sound1 };
};
export const setSound2 = (sound2) => {
  return { type: SET_SOUND2, sound2 };
};
export const setSound3 = (sound3) => {
  return { type: SET_SOUND3, sound3 };
};
export const setSound4 = (sound4) => {
  return { type: SET_SOUND4, sound4 };
};
export const setSound5 = (sound5) => {
  return { type: SET_SOUND5, sound5 };
};
export const setSound6 = (sound6) => {
  return { type: SET_SOUND6, sound6 };
};
export const setSound7 = (sound7) => {
  return { type: SET_SOUND7, sound7 };
};
export const setSound8 = (sound8) => {
  return { type: SET_SOUND8, sound8 };
};
// 선택지 액션 - 남자버전
const HAPPY_MOOD = "index/HAPPY_MOOD";
const SAD_MOOD = "index/SAD_MOOD";
const THRILL_MOOD = "index/THRILL_MOOD";
const CS = "index/CS";
const SOM = "index/SOM";
const MOOD_SELECT = "index/MOOD_SELECT";
const RTR_1040 = "index/RTR_1040";
const CK_1050 = "index/CK_1050";
const BIRD_1060 = "index/BIRD_1060";
const BELL_1070 = "index/BELL_1070";
const BELLYES_1080 = "index/BELLYES_1080";
const BELLNO_1090 = "index/BELLNO_1090";
const SOMANI = "index/SOMANI";
const MOODAnime = "index/MOODAnime";
//
const RTRAnimeMF = "index/RTRAnimeMF";
const RTRAnimeMH = "index/RTRAnimeMH";
const RTRAnimeMS = "index/RTRAnimeMS";
const RTRAnimeMT = "index/RTRAnimeMT";
const RTRAnimeSF = "index/RTRAnimeSF";
const RTRAnimeSH = "index/RTRAnimeSH";
const RTRAnimeSS = "index/RTRAnimeSS";
const RTRAnimeST = "index/RTRAnimeST";
//
const CKAnimeMF = "index/CKAnimeMF";
const CKAnimeMH = "index/CKAnimeMH";
const CKAnimeMS = "index/CKAnimeMS";
const CKAnimeMT = "index/CKAnimeMT";
const CKAnimeSF = "index/CKAnimeSF";
const CKAnimeSH = "index/CKAnimeSH";
const CKAnimeSS = "index/CKAnimeSS";
const CKAnimeST = "index/CKAnimeST";
//
const BIRDAnimeMF = "index/BIRDAnimeMF";
const BIRDAnimeMH = "index/BIRDAnimeMH";
const BIRDAnimeMS = "index/BIRDAnimeMS";
const BIRDAnimeMT = "index/BIRDAnimeMT";
const BIRDAnimeSF = "index/BIRDAnimeSF";
const BIRDAnimeSH = "index/BIRDAnimeSH";
const BIRDAnimeSS = "index/BIRDAnimeSS";
const BIRDAnimeST = "index/BIRDAnimeST";
//
const BELLAnimeF = "index/BELLAnimeF";
const BELLYESAnime = "index/BELLYESAnime";
const BELLNOAnime = "index/BELLNOAnime";

// 챕터 2번 멜로디선택 컴포넌트 노출 용
const STORY_NO2 = "index/STORY_NO2";
const STORY_NO3 = "index/STORY_NO3";
// #1 애니메이션 / 텍스트 동기화 용
const PLUS_STATE1 = "index/PLUS_STATE1";
const PLUS_STATE2 = "index/PLUS_STATE2";
const PLUS_STATE3 = "index/PLUS_STATE3";
const PLUS_STATE4 = "index/PLUS_STATE4";
// 유저 이름 저장
const SET_NAME = "index/SET_NAME";
const SET_CARD = "index/SET_CARD";
// 유저 사운드 저장
const SET_SOUND1 = "index/SET_SOUND1";
const SET_SOUND2 = "index/SET_SOUND2";
const SET_SOUND3 = "index/SET_SOUND3";
const SET_SOUND4 = "index/SET_SOUND4";
const SET_SOUND5 = "index/SET_SOUND5";
const SET_SOUND6 = "index/SET_SOUND6";
const SET_SOUND7 = "index/SET_SOUND7";
const SET_SOUND8 = "index/SET_SOUND8";

// reducer 설정
function reducer(state = initialState, action) {
  switch (action.type) {
    case CS: {
      return {
        ...state,
        moodSelect: 6,
      };
    }
    case SOM: {
      return {
        ...state,
        moodSelect: 7,
      };
    }
    case MOOD_SELECT: {
      return {
        ...state,
        moodSelect: 1000,
      };
    }
    case HAPPY_MOOD: {
      return {
        ...state,
        moodSelect: 1010,
      };
    }
    case SAD_MOOD: {
      return {
        ...state,
        moodSelect: 1020,
      };
    }
    case THRILL_MOOD: {
      return {
        ...state,
        moodSelect: 1030,
      };
    }
    ///////
    case RTR_1040: {
      return {
        ...state,
        moodSelect: 1040,
      };
    }
    //////
    case CK_1050: {
      return {
        ...state,
        moodSelect: 1050,
      };
    }
    ///////
    case BIRD_1060: {
      return {
        ...state,
        moodSelect: 1060,
      };
    }
    ///////
    case BELL_1070: {
      return {
        ...state,
        moodSelect: 1070,
      };
    }
    case BELLYES_1080: {
      return {
        ...state,
        moodSelect: 1080,
      };
    }
    case BELLNO_1090: {
      return {
        ...state,
        moodSelect: 1090,
      };
    }
    ///////

    case SOMANI: {
      return {
        ...state,
        aniSelect: 1010,
      };
    }
    case MOODAnime: {
      return {
        ...state,
        aniSelect: 1000,
      };
    }
    /// RainTaeRu Animation /////////////////////////////////////////////////////////////////////
    case RTRAnimeMF: {
      return {
        ...state,
        aniSelect: 1040,
      };
    }
    case RTRAnimeMH: {
      return {
        ...state,
        aniSelect: 1041,
      };
    }
    case RTRAnimeMS: {
      return {
        ...state,
        aniSelect: 1042,
      };
    }
    case RTRAnimeMT: {
      return {
        ...state,
        aniSelect: 1043,
      };
    }
    case RTRAnimeSF: {
      return {
        ...state,
        aniSelect: 1045,
      };
    }
    case RTRAnimeSH: {
      return {
        ...state,
        aniSelect: 1046,
      };
    }
    case RTRAnimeSS: {
      return {
        ...state,
        aniSelect: 1047,
      };
    }
    case RTRAnimeST: {
      return {
        ...state,
        aniSelect: 1048,
      };
    }
    /// Crickat Animation /////////////////////////////////////////////////////////////////////
    case CKAnimeMF: {
      return {
        ...state,
        aniSelect: 1050,
      };
    }
    case CKAnimeMH: {
      return {
        ...state,
        aniSelect: 1051,
      };
    }
    case CKAnimeMS: {
      return {
        ...state,
        aniSelect: 1052,
      };
    }
    case CKAnimeMT: {
      return {
        ...state,
        aniSelect: 1053,
      };
    }
    case CKAnimeSF: {
      return {
        ...state,
        aniSelect: 1055,
      };
    }
    case CKAnimeSH: {
      return {
        ...state,
        aniSelect: 1056,
      };
    }
    case CKAnimeSS: {
      return {
        ...state,
        aniSelect: 1057,
      };
    }
    case CKAnimeST: {
      return {
        ...state,
        aniSelect: 1058,
      };
    }
    /// Bird Animation /////////////////////////////////////////////////////////////////////
    case BIRDAnimeMF: {
      return {
        ...state,
        aniSelect: 1060,
      };
    }
    case BIRDAnimeMH: {
      return {
        ...state,
        aniSelect: 1061,
      };
    }
    case BIRDAnimeMS: {
      return {
        ...state,
        aniSelect: 1062,
      };
    }
    case BIRDAnimeMT: {
      return {
        ...state,
        aniSelect: 1063,
      };
    }
    case BIRDAnimeSF: {
      return {
        ...state,
        aniSelect: 1065,
      };
    }
    case BIRDAnimeSH: {
      return {
        ...state,
        aniSelect: 1066,
      };
    }
    case BIRDAnimeSS: {
      return {
        ...state,
        aniSelect: 1067,
      };
    }
    case BIRDAnimeST: {
      return {
        ...state,
        aniSelect: 1068,
      };
    }
    case BELLAnimeF: {
      return {
        ...state,
        aniSelect: 1070,
      };
    }
    case BELLYESAnime: {
      return {
        ...state,
        aniSelect: 1080,
      };
    }
    case BELLNOAnime: {
      return {
        ...state,
        aniSelect: 1090,
      };
    }
    ///////
    case STORY_NO2: {
      return {
        ...state,
        moodSelect: 6,
      };
    }
    case STORY_NO3: {
      return {
        ...state,
        moodSelect: 7,
      };
    }
    // #1 - 애니메이션 변경 1번
    case PLUS_STATE1: {
      return {
        ...state,
        moodSelect: 2,
      };
    }
    // #1 - 애니메이션 변경 2번
    case PLUS_STATE2: {
      return {
        ...state,
        moodSelect: 3,
      };
    }
    case PLUS_STATE3: {
      return {
        ...state,
        moodSelect: 4,
      };
    }
    case PLUS_STATE4: {
      return {
        ...state,
        moodSelect: 5,
      };
    }
    case SET_NAME: {
      return { ...state, userName: action.name };
    }
    case SET_CARD: {
      return { ...state, cardSelect: action.card };
    }
    //사운드 저장
    case SET_SOUND1: {
      return { ...state, sound1: action.sound1 };
    }
    case SET_SOUND2: {
      return { ...state, sound2: action.sound2 };
    }
    case SET_SOUND3: {
      return { ...state, sound3: action.sound3 };
    }
    case SET_SOUND4: {
      return { ...state, sound4: action.sound4 };
    }
    case SET_SOUND5: {
      return { ...state, sound5: action.sound5 };
    }
    case SET_SOUND6: {
      return { ...state, sound6: action.sound6 };
    }
    case SET_SOUND7: {
      return { ...state, sound7: action.sound7 };
    }
    case SET_SOUND8: {
      return { ...state, sound8: action.sound8 };
    }
    // 남자 행복 분기 시작

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
