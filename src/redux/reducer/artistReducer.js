import artistConstants from "../constants/artistConstants";

const initialState = {
    requesting: {
        artist: false,
        albums: false,
    },
    artist: {},
    albums: {},
};

export default function artistReducer(state = initialState, action) {
    switch (action.type) {
        case artistConstants.GET_ARTIST_REQUEST:
            return {
                ...state,
                requesting: {
                    ...(state.requesting) ? state.requesting : {},
                    artist: true,
                },
            }
        case artistConstants.GET_ARTIST_SUCCESS:
            return {
                ...state,
                requesting: {
                    ...(state.requesting) ? state.requesting : {},
                    artist: false,
                },
                data: action.data,
            }
        case artistConstants.GET_ARTIST_FAILURE:
            return {
                ...state,
                requesting: {
                    ...(state.requesting) ? state.requesting : {},
                    artist: false,
                },
                error: action.error,
            };
        case artistConstants.GET_ARTIST_ALBUM_REQUEST:
            return {
                ...state,
                requesting: {
                    ...(state.requesting) ? state.requesting : {},
                    albums: true,
                },
            }
        case artistConstants.GET_ARTIST_ALBUM_SUCCESS:
            return {
                ...state,
                requesting: {
                    ...(state.requesting) ? state.requesting : {},
                    s: false,
                },
                albums: action.data,
            }
        case artistConstants.GET_ARTIST_ALBUM_FAILURE:
            return {
                ...state,
                requesting: {
                    ...(state.requesting) ? state.requesting : {},
                    albums: false,
                },
                error: action.error,
            }
        default:
            return state;
    }
}
