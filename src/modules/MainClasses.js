// 액션 타입 정의
const GET_CLASSES = "MainClasses/GET_CLASSES";

// 액션 생성 함수 정의
export const getClasses = (data) => ({ type: GET_CLASSES, payload: data });

// 초기값 설정
const INITIAL_STATE = {
  classes: [],
};

// 리듀서
export default function mainClasses(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_CLASSES:
      return {
        ...state,
        classes: action.payload,
      };

    default:
      return state;
  }
}
