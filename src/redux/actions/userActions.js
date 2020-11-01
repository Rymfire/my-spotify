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
            type: userConstants.GET_MY_USER_FAILURE,
            error
        }
    }
}

const myTop = {
    request: () => {
        return {
            type: userConstants.GET_TOP_REQUEST,
        }
    },
    success: (data) => {
        return {
            type: userConstants.GET_TOP_SUCCESS,
            data
        }
    },
    failure: (error) => {
        return {
            type: userConstants.GET_TOP_FAILURE,
            error
        }
    }
}

const user = {
    request: () => {
        return {
            type: userConstants.GET_USER_REQUEST,
        }
    },
    success: (data) => {
        return {
            type: userConstants.GET_USER_SUCCESS,
            data
        }
    },
    failure: (error) => {
        return {
            type: userConstants.GET_USER_FAILURE,
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

function getMyTop() {
    return (dispatch, getState) => {
        const {tokens} = getState();
        dispatch (myTop.request());
        spotify.getTop(tokens.tokens).then(
            res => myTop.success(res),
            error => myTop.failure(error),
        )
    }
}

function getUser(uid) {
    return (dispatch, getState) => {
        const {tokens, user} = getState();
        dispatch(user.request());
        spotify.getUser(tokens.tokens, uid).then(
            res => dispatch(user.success(res.data)),
            error => dispatch(user.failure(error))
        )
    }
}

export default userActions;
