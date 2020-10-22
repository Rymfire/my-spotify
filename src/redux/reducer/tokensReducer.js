import tokensConstants from "../constants/tokensConstants";

export default function tokensReducer(state = null, action) {
    switch (action.type) {
        case tokensConstants.GET_AUTHORIZATION_CODE_REQUEST:
            return {
                ...state,
                requesting: {
                    authorization_code: true,
                },
                authorization_code: {
                    error: null,
                }
            }
        case tokensConstants.GET_AUTHORIZATION_CODE_SUCCESS:
            return {
                ...state,
                authorization_code: {
                    code: action.authorizationCode,
                    error: null,
                },
            }
        case tokensConstants.GET_AUTHORIZATION_CODE_FAILURE:
            return {
                ...state,
                authorization_code: {
                    error: action.error,
                }
            }
        default:
            return state;
    }
}
