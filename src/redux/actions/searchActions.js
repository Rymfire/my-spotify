import playlistConstants from "../constants/playlistConstants";
import {spotify} from "../services/spotify";
import searchConstants from "../constants/searchConstants";

const searchActions = {

};

const album = {
    request: () => {
        return {
            type: searchConstants.SEARCH_ALBUM_REQUEST,
        };
    },
    success: (data) => {
        return {
            type: searchConstants.SEARCH_ALBUM_SUCCESS,
            data,
        };
    },
    failure: (error) => {
        return {
            type: searchConstants.SEARCH_ALBUM_FAILURE,
            error,
        }
    }
}

const artist = {
    request: () => {
        return {
            type: searchConstants.SEARCH_ARTIST_REQUEST,
        };
    },
    success: (data) => {
        return {
            type: searchConstants.SEARCH_ARTIST_SUCCESS,
            data,
        };
    },
    failure: (error) => {
        return {
            type: searchConstants.SEARCH_ARTIST_FAILURE,
            error,
        }
    }
}

const playlist = {
    request: () => {
        return {
            type: searchConstants.SEARCH_PLAYLIST_REQUEST,
        };
    },
    success: (data) => {
        return {
            type: searchConstants.SEARCH_PLAYLIST_SUCCESS,
            data,
        };
    },
    failure: (error) => {
        return {
            type: searchConstants.SEARCH_PLAYLIST_FAILURE,
            error,
        }
    }
}

const track = {
    request: () => {
        return {
            type: searchConstants.SEARCH_TRACK_REQUEST,
        };
    },
    success: (data) => {
        return {
            type: searchConstants.SEARCH_TRACK_SUCCESS,
            data,
        };
    },
    failure: (error) => {
        return {
            type: searchConstants.SEARCH_TRACK_FAILURE,
            error,
        }
    }
}

function searchAlbum(query) {
    return (dispatch, getState) => {
        const {tokens} = getState();
        spotify.search(tokens.tokens, query, {type: 'album'}).then(
            res => dispatch(album.success(res)),
            error => dispatch(album.failure(error)),
        )
    };
}

function searchArtist(query) {
    return (dispatch, getState) => {
        const {tokens} = getState();
        spotify.search(tokens.tokens, query, {type: 'artist'}).then(
            res => dispatch(artist.success(res)),
            error => dispatch(artist.failure(error)),
        )
    };
}

function searchPlaylist(query) {
    return (dispatch, getState) => {
        const {tokens} = getState();
        spotify.search(tokens.tokens, query, {type: 'playlist'}).then(
            res => dispatch(playlist.success(res)),
            error => dispatch(playlist.failure(error)),
        )
    };
}

function searchTrack(query) {
    return (dispatch, getState) => {
        const {tokens} = getState();
        spotify.search(tokens.tokens, query, {type: 'track'}).then(
            res => dispatch(track.success(res)),
            error => dispatch(track.failure(error)),
        )
    };
}

export default searchActions;

