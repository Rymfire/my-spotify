import {spotify} from "../services/spotify";
import userConstants from "../constants/userConstants";
import artistConstants from "../constants/artistConstants";

const artistActions = {

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

function getArtist(uid) {
    return (dispatch, getState) => {
        const {tokens} = getState();
        dispatch(artist.request())
        spotify.getArtist(tokens.tokens, uid).then(
            res => dispatch(artist.success(res)),
            error => dispatch(artist.failure(error))
        );
    }
}

export default artistActions;
