import { RECEIVE_CURRENT_USER, 
    RECEIVE_USER_LOGOUT, 
    RECEIVE_USER_SIGN_UP } from '../actions/session_actions';

const initialState = {
isAuthenticated: false,
user: {}
};

const sessionApiReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
        return {
        ...state,
        isAuthenticated: !!action.currentUser,
        user: action.currentUser
        };
        case RECEIVE_USER_LOGOUT:
        return {
        isAuthenticated: false,
        user: undefined
        };
        case RECEIVE_USER_SIGN_UP:
        return {
        ...state,
        isSignedUp: true
        }
        default:
        return state;
    }
}

export default sessionApiReducer;