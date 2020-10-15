// 액션 타입 정의
const GET_OPEN_CLASSES = "OpenClasses/GET_OPEN_CLASSES";

// 액션 생성 함수 정의
export const getOpenClasses = (data) => ({
  type: GET_OPEN_CLASSES,
  payload: data,
});

// 초기값 설정
const INITIAL_STATE = {
  openClasses: [],
};

// 리듀서
export default function openClasses(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_OPEN_CLASSES:
      return {
        ...state,
        openClasses: action.payload,
      };

    default:
      return state;
  }
}
