import {spotify} from "../services/spotify";
import tokensConstants from "../constants/tokensConstants";

const tokensActions = {
    getAuthorizationCode: getAuthorizationCode,
    getAccessToken: getAccessToken,
}

const authorizationCode = {
    request: () => {
        return {
            type: tokensConstants.GET_AUTHORIZATION_CODE_REQUEST,
        };
    },
    success: (authorizationCode) => {
        return {
            type: tokensConstants.GET_AUTHORIZATION_CODE_SUCCESS,
            authorizationCode
        };
    },
    failure: (error) => {
        return {
            type: tokensConstants.GET_AUTHORIZATION_CODE_FAILURE,
            error,
        };
    },
}

const accessToken = {
    request: () => {
        return {
            type: tokensConstants.GET_ACCESS_TOKEN_REQUEST
        }
    },
    success: (data) => {
        return {
            type: tokensConstants.GET_ACCESS_TOKEN_SUCCESS,
            data
        }
    },
    failure: (error) => {
        return {
            type: tokensConstants.GET_ACCESS_TOKEN_FAILURE,
            error
        }
    }
}

function getAuthorizationCode() {
    return (dispatch, getState) => {
        dispatch(authorizationCode.request());
        spotify.getAuthorizationCode()
            .then(
                res => {
                    dispatch(authorizationCode.success(res.code));
                },
                error => {
                    dispatch(authorizationCode.failure(error));
                }
            );
    }
}

function getAccessToken() {
    return (dispatch, getState) => {
        const {tokens} = getState();
        dispatch(accessToken.request());
        if (!tokens.tokens.access_token) {
            spotify.getAccessTokenWithAuthorizationCode(tokens.authorization_code.code).then(
                res => {
                    dispatch(accessToken.success(res.data));
                },
                err => {
                    dispatch(accessToken.failure(err));
                }
            );
        } else {
            spotify.getAccessTokenWithRefreshToken(tokens.tokens.refresh_token).then(
                res => {
                    dispatch(accessToken.success(res.data));
                },
                err => {
                    dispatch(accessToken.failure(err));
                }
            );
        }
    }
}

export default tokensActions;
