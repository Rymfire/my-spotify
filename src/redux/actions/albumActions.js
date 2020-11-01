import albumConstants from "../constants/albumConstants";
import {spotify} from "../services/spotify";
import tokensActions from "./tokensActions";

const albumActions = {
    getAlbum,
};

const album = {
    request: () => {
        return {
            type: albumConstants.GET_ALBUM_REQUEST,
        };
    },
    success: (data) => {
        return {
            type: albumConstants.GET_ALBUM_SUCCESS,
            data,
        };
    },
    failure: (error) => {
        return {
            type: albumConstants.GET_ALBUM_FAILURE,
            error,
        };
    },
}

function getAlbum(uid) {
    return (dispatch, getState) => {
        dispatch(tokensActions.getAccessToken()).then(() => {
            const {tokens} = getState();
            dispatch(album.request());
            spotify.getAlbum(tokens.tokens, uid).then(
                res => dispatch(album.success(res.data)),
                error => dispatch(album.failure(error)),
            );
        });
    }
}

export default albumActions;
