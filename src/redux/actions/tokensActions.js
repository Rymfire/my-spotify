import {spotify} from "../services/spotify";
import tokensConstants from "../constants/tokensConstants";

const tokensActions = {
    getAuthorizationCode: getAuthorizationCode,
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

function getAuthorizationCode() {
    return (dispatch, getState) => {
        console.log(dispatch);
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

export default tokensActions;
