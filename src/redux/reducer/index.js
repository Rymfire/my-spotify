import {combineReducers} from "redux";
import tokensReducer from "./tokensReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({tokens: tokensReducer, user: userReducer});

export default rootReducer;
