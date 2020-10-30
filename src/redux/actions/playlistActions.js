import {spotify} from "../services/spotify";
import playlistConstants from "../constants/playlistConstants";

const playlistActions = {
    getAllMyUserPlaylists,
}

const myUserPlaylists = {
    request: () => {
        return {
            type: playlistConstants.GET_ALL_MY_USER_PLAYLISTS_REQUEST,
        };
    },
    success: (data) => {
        return {
            type: playlistConstants.GET_ALL_MY_USER_PLAYLISTS_SUCCESS,
            data,
        };
    },
    failure: (error) => {
        return {
            type: playlistConstants.GET_ALL_MY_USER_PLAYLISTS_FAILURE,
            error,
        }
    }
}

function getAllMyUserPlaylists() {
    return (dispatch, getState) => {
        const state = getState();
        const tokens = state.tokens.tokens;

        dispatch(myUserPlaylists.request());
        spotify.getAllMyUserPlaylists(tokens).then(
            res => dispatch(myUserPlaylists.success(res.data)),
            error => dispatch(myUserPlaylists.failure(error))
        );
    }
}

export default playlistActions;
