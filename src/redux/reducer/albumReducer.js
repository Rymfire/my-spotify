import albumConstants from "../constants/albumConstants";

const initialState = {
    requesting: false,
    result: null,
    error: null
};

export default function albumReducer(state = initialState, action) {
    switch (action.type) {
        case albumConstants.GET_ALBUM_REQUEST:
            return {
                ...state,
                requesting: true,
            };
        case albumConstants.GET_ALBUM_SUCCESS:
            return {
                ...state,
                requesting: false,
                result: action.data,
            };
        case albumConstants.GET_ALBUM_FAILURE:
            return {
                ...state,
                requesting: false,
                error: action.error,
            };
        default:
            return state;
    };
}
