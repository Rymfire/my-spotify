import {spotify} from "../services/spotify";

const userActions = {
    getMyUser,
};

function getMyUser() {
    return (dispatch, getState) => {
        const {tokens} = getState();
        console.log(tokens.tokens);
        spotify.getMyUser(tokens.tokens).then(
            res => console.log(res)
        )
    }
}

export default userActions;
