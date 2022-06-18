import axios from 'axios';

export const getDiary = id => {
    return axios.get(`api/character_diary/user/${id}`)
};

export const addCharacterToDiary = data => {
    return axios.post('api/character_diary', data)
};

export const removeCharacterFromDiary = id => {
    return axios.delete(`api/character_diary/${id}`)
}