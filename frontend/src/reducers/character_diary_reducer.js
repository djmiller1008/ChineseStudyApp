import { 
    RECEIVE_NEW_ENTRY,
    RECEIVE_USER_DIARY,
    REMOVE_ENTRY
} from "../actions/character_diary_actions";   

const characterDiaryReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_NEW_ENTRY:
            return Object.assign({}, state, {[Object.keys(state).length]: action.entry});
        case RECEIVE_USER_DIARY:
            return Object.assign({}, action.diary);
        case REMOVE_ENTRY:
            const tmpState = Object.assign({}, state);
            const nextState = Object.values(tmpState).filter(entry => JSON.stringify(entry) !== JSON.stringify(action.entry));
            return nextState;
        default:
            return state;
    }
};

export default characterDiaryReducer;

