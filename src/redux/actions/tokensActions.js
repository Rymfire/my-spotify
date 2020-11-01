import {spotify} from "../services/spotify";
import tokensConstants from "../constants/tokensConstants";

const tokensActions = {
    getAuthorizationCode,
    getAccessToken,
    getAuthorizationCodeAndAccessToken,
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
        return spotify.getAuthorizationCode()
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
        const date = new Date();
        if (!tokens.tokens.access_token) {
            dispatch(accessToken.request());
            return spotify.getAccessTokenWithAuthorizationCode(tokens.authorization_code.code).then(
                res => {
                    dispatch(accessToken.success(res.data));
                },
                err => {
                    dispatch(accessToken.failure(err));
                }
            );
        } else if (tokens.tokens.validity < date.valueOf()) {
            dispatch(accessToken.request());
            return spotify.getAccessTokenWithRefreshToken(tokens.tokens.refresh_token).then(
                res => {
                    dispatch(accessToken.success(res.data));
                },
                err => {
                    dispatch(accessToken.failure(err));
                }
            );
        } else {
            return new Promise((resolve, reject) => {resolve({status: 200})});
        }
    }
}

function getAuthorizationCodeAndAccessToken() {
    return (dispatch) =>
        dispatch(getAuthorizationCode()).then(() => dispatch(getAccessToken()));
}

export default tokensActions;
