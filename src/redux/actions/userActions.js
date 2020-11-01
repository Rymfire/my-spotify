import {spotify} from "../services/spotify";
import userConstants from "../constants/userConstants";
import tokensActions from "./tokensActions";

const userActions = {
    getMyUser,
    getAllTop,
    getUser,
    getUserPlaylists,
};

const myUser = {
    request: () => {
        return {
            type: userConstants.GET_MY_USER_REQUEST,
        }
    },
    success: (data) => {
        return {
            type: userConstants.GET_MY_USER_SUCCESS,
            data
        }
    },
    failure: (error) => {
        return {
            type: userConstants.GET_MY_USER_FAILURE,
            error
        }
    }
}

const topArtist = {
    request: () => {
        return {
            type: userConstants.GET_TOP_ARTISTS_REQUEST,
        }
    },
    success: (data) => {
        return {
            type: userConstants.GET_TOP_ARTISTS_SUCCESS,
            data
        }
    },
    failure: (error) => {
        return {
            type: userConstants.GET_TOP_ARTISTS_FAILURE,
            error
        }
    }
}

const topTracks = {
    request: () => {
        return {
            type: userConstants.GET_TOP_TRACKS_REQUEST,
        }
    },
    success: (data) => {
        return {
            type: userConstants.GET_TOP_TRACKS_SUCCESS,
            data
        }
    },
    failure: (error) => {
        return {
            type: userConstants.GET_TOP_TRACKS_FAILURE,
            error
        }
    }
}

const user = {
    request: () => {
        return {
            type: userConstants.GET_USER_REQUEST,
        }
    },
    success: (data) => {
        return {
            type: userConstants.GET_USER_SUCCESS,
            data
        }
    },
    failure: (error) => {
        return {
            type: userConstants.GET_USER_FAILURE,
            error
        }
    }
}

const playlists = {
    request: () => {
        return {
            type: userConstants.GET_MY_PLAYLISTS_REQUEST,
        }
    },
    success: (data) => {
        return {
            type: userConstants.GET_MY_PLAYLISTS_SUCCESS,
            data
        }
    },
    failure: (error) => {
        return {
            type: userConstants.GET_MY_PLAYLISTS_FAILURE,
            error
        }
    }
}

const userPlaylists = {
    request: () => {
        return {
            type: userConstants.GET_USER_PLAYLISTS_REQUEST,
        }
    },
    success: (data) => {
        return {
            type: userConstants.GET_USER_PLAYLISTS_SUCCESS,
            data
        }
    },
    failure: (error) => {
        return {
            type: userConstants.GET_USER_PLAYLISTS_FAILURE,
            error
        }
    }
}

function getMyUser() {
    return (dispatch, getState) => {
        dispatch(tokensActions.getAccessToken()).then(() => {
            const {tokens} = getState();
            dispatch(myUser.request());
            spotify.getMyUser(tokens.tokens).then(
                res => dispatch(myUser.success(res.data)),
                error => dispatch(myUser.failure(error))
            )
        });
    }
}

function getTopArtists() {
    return (dispatch, getState) => {
        dispatch(tokensActions.getAccessToken()).then(() => {
            const {tokens} = getState();
            dispatch(topArtist.request());
            spotify.getTopArtists(tokens.tokens).then(
                res => dispatch(topArtist.success(res.data)),
                error => dispatch(topArtist.failure(error)),
            )
        });
    }
}

function getTopTracks() {
    return (dispatch, getState) => {
        dispatch(tokensActions.getAccessToken()).then(() => {
            const {tokens} = getState();
            dispatch(topTracks.request());
            spotify.getTopTracks(tokens.tokens).then(
                res => dispatch(topTracks.success(res.data)),
                error => dispatch(topTracks.failure(error)),
            )
        });
    }
}

function getAllTop() {
    return (dispatch, getState) => {
        dispatch(getTopArtists());
        dispatch(getTopTracks());
        dispatch(getMyPlaylists());
    }
}

function getUser(uid) {
    return (dispatch, getState) => {
        dispatch(tokensActions.getAccessToken()).then(() => {
            const {tokens} = getState();
            dispatch(user.request());
            spotify.getUser(tokens.tokens, uid).then(
                res => dispatch(user.success(res.data)),
                error => dispatch(user.failure(error))
            )
        });
    }
}

function getMyPlaylists() {
    return (dispatch, getState) => {
        dispatch(tokensActions.getAccessToken()).then(() => {
            const {tokens} = getState();
            dispatch(playlists.request());
            spotify.getMyPlaylists(tokens.tokens).then(
                res => dispatch(playlists.success(res.data)),
                error => dispatch(playlists.failure(error))
            )
        });
    }
}

function getUserPlaylists(uid) {
    return (dispatch, getState) => {
        dispatch(tokensActions.getAccessToken()).then(() => {
            const {tokens} = getState();
            dispatch(userPlaylists.request());
            spotify.getUserPlaylists(tokens.tokens, uid).then(
                res => dispatch(userPlaylists.success(res.data)),
                error => dispatch(userPlaylists.failure(error))
            )
        });
    }
}

export default userActions;
