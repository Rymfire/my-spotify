import {spotify} from "../services/spotify";
import userConstants from "../constants/userConstants";

const userActions = {
    getMyUser,
};

const myUser = {
    request: () => {
        return {
            type: userConstants.GET_MY_USER_REQUEST,
        }
    },
    success: (data) => {
        return {
            type: userConstants.GET_MY_USER_SUCCESS,
            data
        }
    },
    failure: (error) => {
        return {
            type:userConstants.GET_MY_USER_FAILURE,
            error
        }
    }
}

function getMyUser() {
    return (dispatch, getState) => {
        const {tokens} = getState();
        dispatch(myUser.request());
        spotify.getMyUser(tokens.tokens).then(
            res => dispatch(myUser.success(res.data)),
            error => dispatch(myUser.failure(error))
        )
    }
}

export default userActions;
