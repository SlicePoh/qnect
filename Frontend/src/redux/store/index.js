
import {combineReducers,legacy_createStore as createStore} from 'redux'
import { answerReducer } from "../reducers/Answers";
const reducer=combineReducers({
    // users: userReducer,
    // questions: questionReducer,
    answers: answerReducer,
})
const initialState={};
const store =createStore(reducer,initialState)

export default store;