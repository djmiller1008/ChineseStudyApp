import { 
    RECEIVE_NEW_ENTRY,
    RECEIVE_USER_DIARY
} from "../actions/character_diary_actions";   

const characterDiaryReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_NEW_ENTRY:
            return Object.assign({}, state, action.entry);
        case RECEIVE_USER_DIARY:
            return Object.assign({}, action.diary);
        default:
            return state;
    }
};

export default characterDiaryReducer;

