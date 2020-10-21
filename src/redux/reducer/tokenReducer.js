export default function tokenReducer(state = null, action) {
    switch (action.type) {
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.res.code,
            }
        case 'SET_TOKEN_ERROR':
            return {
                ...state,
                error: (action.error) ? `Une erreur s'est produite` : null,
            }
        default:
            return state;
    }
}
