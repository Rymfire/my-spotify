import userConstants from "../constants/userConstants";

const initialState = {

};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case userConstants.GET_MY_USER_REQUEST:
            return {
                ...state,
                requesting: {
                    ...(state.requesting ? state.requesting : {}),
                    myUser: true,
                }
            };
        case userConstants.GET_MY_USER_SUCCESS:
            return {
                ...state,
                requesting: {
                    ...(state.requesting ? state.requesting : {}),
                    myUser: false
                },
                myUser: {...action.data, ...{error: null}},
            };
        case userConstants.GET_MY_USER_FAILURE:
            return {
                ...state,
                requesting: {
                    ...(state.requesting ? state.requesting : {}),
                    myUser: false,
                },
                myUser: {
                    error: action.error,
                }
            };
        case userConstants.GET_TOP_ARTISTS_REQUEST:
            return {
                ...state,
                requesting: {
                    ...(state.requesting ? state.requesting : {}),
                    topArtists: true,
                }
            };
        case userConstants.GET_TOP_ARTISTS_SUCCESS:
            return {
                ...state,
                requesting: {
                    ...(state.requesting ? state.requesting : {}),
                    topArtists: false,
                },
                topArtists: {
                    result: action.data,
                    error: null,
                },
            };
        case userConstants.GET_TOP_ARTISTS_FAILURE:
            return {
                ...state,
                requesting: {
                    ...(state.requesting ? state.requesting : {}),
                    topArtists: false,
                },
                topArtists: {
                    error: action.error,
                }
            };
        case userConstants.GET_TOP_TRACKS_REQUEST:
            return {
                ...state,
                requesting: {
                    ...(state.requesting ? state.requesting : {}),
                    topTracks: true,
                }
            };
        case userConstants.GET_TOP_TRACKS_SUCCESS:
            return {
                ...state,
                requesting: {
                    ...(state.requesting ? state.requesting : {}),
                    topTracks: false,
                },
                topTracks: {
                    result: action.data,
                    error: null,
                },
            };
        case userConstants.GET_TOP_TRACKS_FAILURE:
            return {
                ...state,
                requesting: {
                    ...(state.requesting ? state.requesting : {}),
                    topTracks: false,
                },
                topTracks: {
                    error: action.error,
                }
            };
        case userConstants.GET_MY_PLAYLISTS_REQUEST:
            return {
                ...state,
                requesting: {
                    ...(state.requesting ? state.requesting : {}),
                    myPlaylists: true,
                }
            };
        case userConstants.GET_MY_PLAYLISTS_SUCCESS:
            return {
                ...state,
                requesting: {
                    ...(state.requesting ? state.requesting : {}),
                    myPlaylists: false,
                },
                myPlaylists: {
                    result: action.data,
                    error: null,
                },
            };
        case userConstants.GET_MY_PLAYLISTS_FAILURE:
            return {
                ...state,
                requesting: {
                    ...(state.requesting ? state.requesting : {}),
                    myPlaylists: false,
                },
                myPlaylists: {
                    error: action.error,
                }
            };
        default:
            return state;
    }
}
