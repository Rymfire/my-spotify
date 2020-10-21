import {spotify} from "../services/spotify";

const tokenActions = {
    signIn: SignIn,
}

function SignIn() {
    return (dispatch, getState) => {
        const state = getState();
        spotify.SignIn()
            .then(
                res => {
                    dispatch({type: 'SET_TOKEN', res})
                },
                error => {
                    dispatch({type: 'SET_TOKEN_ERROR', error});
                }
            );
    }
}

export default tokenActions;
