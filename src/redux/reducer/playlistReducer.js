import playlistConstants from "../constants/playlistConstants";

const initialState = {
    requesting: {
        myUserPlaylists: false,
        playlist: false,
    },
    myUserPlaylists: {
        data: null,
        error: null,
    },
    playlist: {
        data: null,
        error: null,
    },
};

export default function playlistReducer(state = initialState, action) {
    switch(action.type) {
        case playlistConstants.GET_ALL_MY_USER_PLAYLISTS_REQUEST:
            return {
                ...state,
                requesting: {
                    ...(state.requesting) ? state.requesting : {},
                    myUserPlaylists: true,
                }
            };
        case playlistConstants.GET_ALL_MY_USER_PLAYLISTS_SUCCESS:
            const formatedData = action.data;
            return {
                ...state,
                requesting: {
                    ...(state.requesting) ? state.requesting : {},
                    myUserPlaylists: false,
                },
                myUserPlaylists: {
                    data: formatedData,
                    error: null,
                },
            };
        case playlistConstants.GET_ALL_MY_USER_PLAYLISTS_FAILURE:
            return {
                ...state,
                requesting: {
                    ...(state.requesting) ? state.requesting : {},
                    myUserPlaylists: false,
                },
                myUserPlaylists: {
                    error: action.error,
                },
            };
        case playlistConstants.GET_PLAYLIST_REQUEST:
            return {
                ...state,
                requesting: {
                    ...(state.requesting) ? state.requesting : {},
                    playlist: true,
                }
            };
        case playlistConstants.GET_PLAYLIST_SUCCESS:
            return {
                ...state,
                requesting: {
                    ...(state.requesting) ? state.requesting : {},
                    playlist: false,
                },
                playlist: {
                    data: action.data,
                    error: null,
                },
            };
        case playlistConstants.GET_PLAYLIST_FAILURE:
            return {
                ...state,
                requesting: {
                    ...(state.requesting) ? state.requesting : {},
                    playlist: false,
                },
                playlist: {
                    error: action.error,
                },
            };
        default:
            return state;
    }
}
