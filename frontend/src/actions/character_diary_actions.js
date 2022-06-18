import * as APIUtil from '../util/character_diary_api_util';

export const RECEIVE_NEW_ENTRY = 'RECEIVE_NEW_ENTRY';
export const RECEIVE_USER_DIARY = 'RECEIVE_USER_DIARY';
export const REMOVE_ENTRY = 'REMOVE_ENTRY';

export const removeEntry = (entry) => ({
    type: REMOVE_ENTRY,
    entry
})

export const receiveNewEntry = (entry) => ({
    type: RECEIVE_NEW_ENTRY,
    entry
});

export const receiveUserDiary = (diary) => ({
    type: RECEIVE_USER_DIARY,
    diary
});

export const removeEntryFromDiary = id => dispatch => (
    APIUtil.removeCharacterFromDiary(id)
        .then((entry) => dispatch(removeEntry(entry.data)))
        .catch(err => console.log(err))
);

export const addEntryToDiary = entry => dispatch => (
    APIUtil.addCharacterToDiary(entry)
        .then(entry => dispatch(receiveNewEntry(entry.data)))
        .catch(err => console.log(err))
);

export const getUserDiary = id => dispatch => (
    APIUtil.getDiary(id)
        .then(diary => dispatch(receiveUserDiary(diary.data)))
        .catch(err => console.log(err))
);