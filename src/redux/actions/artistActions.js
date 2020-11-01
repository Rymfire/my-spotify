import {spotify} from "../services/spotify";
import artistConstants from "../constants/artistConstants";
import tokensActions from "./tokensActions";

const artistActions = {
    getArtist,
    getArtistAlbum,
};

const artist = {
    request: () => {
        return {
            type: artistConstants.GET_ARTIST_REQUEST,
        }
    },
    success: (data) => {
        return {
            type: artistConstants.GET_ARTIST_SUCCESS,
            data
        }
    },
    failure: (error) => {
        return {
            type:artistConstants.GET_ARTIST_FAILURE,
            error
        }
    }
}

const artistAlbum = {
    request: () => {
        return {
            type: artistConstants.GET_ARTIST_ALBUM_REQUEST,
        }
    },
    success: (data) => {
        return {
            type: artistConstants.GET_ARTIST_ALBUM_SUCCESS,
            data
        }
    },
    failure: (error) => {
        return {
            type:artistConstants.GET_ARTIST_ALBUM_FAILURE,
            error
        }
    }
}

function getArtist(uid) {
    return (dispatch, getState) => {
        dispatch(tokensActions.getAccessToken()).then(() => {
            const {tokens} = getState();
            dispatch(artist.request())
            spotify.getArtist(tokens.tokens, uid).then(
                res => dispatch(artist.success(res.data)),
                error => dispatch(artist.failure(error))
            );
        });
    }
}

function getArtistAlbum(uid) {
    return (dispatch, getState) => {
        dispatch(tokensActions.getAccessToken()).then(() => {
            const {tokens} = getState();
            dispatch(artistAlbum.request())
            spotify.getArtistAlbum(tokens.tokens, uid).then(
                res => dispatch(artistAlbum.success(res.data)),
                error => dispatch(artistAlbum.failure(error))
            );
        });
    }
}

export default artistActions;
