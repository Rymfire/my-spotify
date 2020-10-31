import artistConstants from "../constants/artistConstants";

const initialState = {

};

export default function artistReducer(state = initialState, action) {
    switch (action.type) {
        case artistConstants.GET_ARTIST_REQUEST:
            return {
                ...state,
                requesting: true,
            }
        case artistConstants.GET_ARTIST_SUCCESS:
            return {
                ...state,
                requesting: false,
                data: action.data,
            }
        case artistConstants.GET_ARTIST_FAILURE:
            return {
                ...state,
                requesting: false,
                error: action.error,
            }
        default:
            return state;
    }
}
