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
        case userConstants.GET_TOP_REQUEST:
            return {
                ...state,
                requesting: {
                    ...(state.requesting ? state.requesting : {}),
                    myTop: true,
                }
            };
        case userConstants.GET_TOP_SUCCESS:
            return {
                ...state,
                requesting: {
                    ...(state.requesting ? state.requesting : {}),
                    myTop: false,
                },
                myTop: {
                    result: action.data,
                    error: null,
                },
            }
        case userConstants.GET_TOP_FAILURE:
            return {
                ...state,
                requesting: {
                    ...(state.requesting ? state.requesting : {}),
                    myTop: false,
                },
                myTop: {
                    error: action.error,
                }
            }
        default:
            return state;
    }
}
