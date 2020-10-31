import albumConstants from "../constants/albumConstants";
import {spotify} from "../services/spotify";

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
        const {tokens} = getState();
        dispatch(album.request());
        spotify.getAlbum(tokens.tokens, uid).then(
            res => dispatch(album.success(res.data)),
            error => dispatch(album.failure(error)),
        );
    };
}

export default albumActions;
