import tokensConstants from "../constants/tokensConstants";

const initialState = {
    authorization_code: {
        code: null,
        error: null,
    },
    tokens: {
        access_token: null,
        token_type: 'Bearer',
        validity: null,
        refresh_token: null,
        error: null,
    },
    requesting: {
        authorization_code: false,
        access_token: false,
    }
}

export default function tokensReducer(state = initialState, action) {
    switch (action.type) {
        case tokensConstants.GET_AUTHORIZATION_CODE_REQUEST:
            return {
                ...state,
                requesting: {
                    ...(state.requesting) ? state.requesting : {},
                    authorization_code: true,
                },
                authorization_code: {
                    error: null,
                }
            }
        case tokensConstants.GET_AUTHORIZATION_CODE_SUCCESS:
            return {
                ...state,
                requesting: {
                    ...(state.requesting) ? state.requesting : {},
                    authorization_code: false,
                },
                authorization_code: {
                    code: action.authorizationCode,
                    error: null,
                },
            }
        case tokensConstants.GET_AUTHORIZATION_CODE_FAILURE:
            return {
                ...state,
                requesting: {
                    ...(state.requesting) ? state.requesting : {},
                    authorization_code: false,
                },
                authorization_code: {
                    error: action.error,
                }
            }
        case tokensConstants.GET_ACCESS_TOKEN_REQUEST:
            return {
                ...state,
                requesting: {
                    ...(state.requesting) ? state.requesting : {},
                    access_token: true,
                },
                tokens: {
                    ...state.tokens,
                    error: null,
                }
            }
        case tokensConstants.GET_ACCESS_TOKEN_SUCCESS:
            const date = new Date();
            return {
                ...state,
                requesting: {
                    ...(state.requesting) ? state.requesting : {},
                    access_token: false,
                },
                tokens: {
                    access_token: action.data.access_token,
                    token_type: action.data.token_type,
                    validity: date.valueOf() + (action.data.expires_in * 1000),
                    refresh_token: (action.data.refresh_token) ? action.data.refresh_token : state.tokens.refresh_token,
                }
            }
        case tokensConstants.GET_ACCESS_TOKEN_FAILURE:
            return {
                ...state,
                requesting: {
                    ...(state.requesting) ? state.requesting : {},
                    access_token: false
                },
                tokens: {
                    error: action.error,
                }
            }
        case tokensConstants.LOGOUT:
            return initialState;
        default:
            return state;
    }
}
