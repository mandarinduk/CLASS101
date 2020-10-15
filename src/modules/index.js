import { combineReducers } from "redux";
import MainClasses from "./MainClasses";
import MdClasses from "./MdClasses";
import OpenClasses from "./OpenClasses";

const rootReducer = combineReducers({
  allClasses: MainClasses,
  allMdClasses: MdClasses,
  allOpenClasses: OpenClasses,
});

export default rootReducer;
