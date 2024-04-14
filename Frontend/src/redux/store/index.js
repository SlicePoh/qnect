
import {combineReducers,legacy_createStore as createStore, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import {answerReducer} from "../reducers/Answers.js";

import {configureStore} from '@reduxjs/toolkit';
//import answerReducer from '../slices/Answers'

// Combine reducers
const reducer = combineReducers({
    // users: userReducer,
    // questions: questionReducer,
    answers: answerReducer,
});

// Apply Redux Thunk middleware
const middleware = applyMiddleware(thunk);

// Initial state
const initialState = {};

// Create store with reducers, initial state, and middleware

export const store = createStore(reducer, initialState, middleware);
// export const store = configureStore({
//     reducer: {
//         answer: answerReducer,
//     },
// });


