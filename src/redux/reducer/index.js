import {combineReducers} from "redux";
import tokensReducer from "./tokensReducer";

const rootReducer = combineReducers({tokens: tokensReducer});

export default rootReducer;
