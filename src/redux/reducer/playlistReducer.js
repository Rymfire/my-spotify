import playlistConstants from "../constants/playlistConstants";

const initialState = {

};

export default function playlistReducer(state = initialState, action) {
    switch(action.type) {
        case playlistConstants.GET_ALL_MY_USER_PLAYLISTS_REQUEST:
            return {
                ...state,
                requesting: {
                    myUserPlaylists: true,
                }
            }
        case playlistConstants.GET_ALL_MY_USER_PLAYLISTS_SUCCESS:
            const formatedData = action.data;
            return {
                ...state,
                requesting: {
                    myUserPlaylists: false,
                },
                myUserPlaylists: {
                    data: formatedData,
                    error: null,
                },
            }
        case playlistConstants.GET_ALL_MY_USER_PLAYLISTS_FAILURE:
            return {
                ...state,
                requesting: {
                    myUserPlaylists: false,
                },
                myUserPlaylists: {
                    error: action.error,
                },
            }
        default:
            return state;
    }
}
