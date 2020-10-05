// 액션 타입 정의
const GET_MD_CLASSES = "MdClasses/GET_MD_CLASSES";

// 액션 생성 함수 정의
export const getMdClasses = (data) => ({ type: GET_MD_CLASSES, payload: data });

// 초기값 설정
const INITIAL_STATE = {
  mdClasses: [],
};

// 리듀서
export default function mdClasses(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_MD_CLASSES:
      return {
        ...state,
        mdClasses: action.payload,
      };

    default:
      return state;
  }
}

export const getAllMdClasses = (dispatch) => {
  //   fetch(`http://10.58.4.19:8002/products/recommend`);
  fetch(`http://localhost:3000/Data/mdClassesMOCK.json`)
    .then((res) => res.json())
    .then((res) => {
      dispatch(getMdClasses(res.data));
    });
};
