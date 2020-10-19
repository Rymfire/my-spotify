import {tokenConstants} from "../constants";

const initialStates = {
    accessToken: null,
}

export default function tokenReducer(state = initialStates, action) {
    switch (action.type) {
        case tokenConstants.SET_TOKEN:
        return {
            ...state,
            accessToken: action.token,
        }
    }
}
