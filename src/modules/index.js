import { combineReducers } from "redux";
import MainClasses from "./MainClasses";
import MdClasses from "./MdClasses";

const rootReducer = combineReducers({
  allClasses: MainClasses,
  allMdClasses: MdClasses,
});

export default rootReducer;
