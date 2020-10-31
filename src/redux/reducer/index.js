import {combineReducers} from "redux";
import tokensReducer from "./tokensReducer";
import userReducer from "./userReducer";
import playlistReducer from "./playlistReducer";
import artistReducer from "./artistReducer";
import searchReducer from "./searchReducer";
import albumReducer from "./albumReducer";

const rootReducer = combineReducers({
    tokens: tokensReducer,
    user: userReducer,
    playlist: playlistReducer,
    artist: artistReducer,
    album: albumReducer,
    search: searchReducer,
});

export default rootReducer;
