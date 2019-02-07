import * as actions from '../actions'

const authState = {
    user: {
        displayName: null,
        email: null,
        emailVerified: null,
        isAnonymous: null,
        phoneNumber: null,
        photoURL: null,
        uid: null,
    },
}

export const auth = (state = authState, action) => {
    switch (action.type) {
        case actions.SET_USER:
            return Object.assign({}, state, {
                user: action.user,
            })
        default:
            return state
    }
}
