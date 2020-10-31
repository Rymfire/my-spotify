import searchConstants from "../constants/searchConstants";

const initialState = {

};

export default function searchReducer(state = initialState, action) {
    switch (action.type) {
        case searchConstants.SEARCH_ALBUM_REQUEST:
            return {
                ...state,
                album: {
                    ...(state.album ? state.album : {}),
                    requesting: true,
                }
            }
        case searchConstants.SEARCH_ALBUM_SUCCESS:
            return {
                ...state,
                album: {
                    requesting: false,
                    result: action.data,
                }
            }
        case searchConstants.SEARCH_ALBUM_FAILURE:
            return {
                ...state,
                album: {
                    requesting: false,
                    error: action.error,
                }
            }

        case searchConstants.SEARCH_ARTIST_REQUEST:
            return {
                ...state,
                artist: {
                    ...(state.artist ? state.artist : {}),
                    requesting: true,
                }
            }
        case searchConstants.SEARCH_ARTIST_SUCCESS:
            return {
                ...state,
                artist: {
                    requesting: false,
                    result: action.data,
                }
            }
        case searchConstants.SEARCH_ARTIST_FAILURE:
            return {
                ...state,
                artist: {
                    requesting: false,
                    error: action.error,
                }
            }

        case searchConstants.SEARCH_PLAYLIST_REQUEST:
            return {
                ...state,
                playlist: {
                    ...(state.playlist ? state.playlist : {}),
                    requesting: true,
                }
            }
        case searchConstants.SEARCH_PLAYLIST_SUCCESS:
            return {
                ...state,
                playlist: {
                    requesting: false,
                    result: action.data,
                }
            }
        case searchConstants.SEARCH_PLAYLIST_FAILURE:
            return {
                ...state,
                playlist: {
                    requesting: false,
                    error: action.error,
                }
            }

        case searchConstants.SEARCH_TRACK_REQUEST:
            return {
                ...state,
                track: {
                    ...(state.track ? state.track : {}),
                    requesting: true,
                }
            }
        case searchConstants.SEARCH_TRACK_SUCCESS:
            return {
                ...state,
                track: {
                    requesting: false,
                    result: action.data,
                }
            }
        case searchConstants.SEARCH_TRACK_FAILURE:
            return {
                ...state,
                track: {
                    requesting: false,
                    error: action.error,
                }
            }
        default:
            return state;
    }

}
