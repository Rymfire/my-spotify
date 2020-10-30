import {combineReducers} from "redux";
import tokensReducer from "./tokensReducer";
import userReducer from "./userReducer";
import playlistReducer from "./playlistReducer";

const rootReducer = combineReducers({tokens: tokensReducer, user: userReducer, playlist: playlistReducer});

export default rootReducer;
