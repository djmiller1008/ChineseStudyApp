import { combineReducers } from "redux";
import characterDiaryReducer from "./character_diary_reducer";
import errorsReducer from "./errors_reducer";
import sessionReducer from "./session_api_reducer";


const rootReducer = combineReducers({
    session: sessionReducer,
    errors: errorsReducer,
    diary: characterDiaryReducer
});

export default rootReducer;