import userConstants from "../constants/userConstants";

const initialState = {

};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case userConstants.GET_MY_USER_REQUEST:
            return {
                requesting: {
                    myUser: true,
                }
            };
        case userConstants.GET_MY_USER_SUCCESS:
            return {
                requesting: {
                    myUser: false
                },
                myUser: {...action.data, ...{error: null}},
            };
        case userConstants.GET_MY_USER_FAILURE:
            return {
                requesting: {
                    myUser: false,
                },
                myUser: {
                    error: action.error,
                }
            };
        default:
            return state;
    }
}
