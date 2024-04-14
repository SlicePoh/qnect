import { GetAnswer, AddAnswer, DeleteAnswer,UpdateAnswer, SearchAnswer } from "../action-types/Answers";

// Import axios to make HTTP requests
import axios from 'axios';

// Action creators for asynchronous operations
export const getAnswer = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('http://localhost:7000/api/v1/answer/');
            dispatch({ type: GetAnswer, data: response.data.data.answer });
        } catch (error) {
            // Handle error
        }
    };
};
export const addAnswer = (answerData) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('/api/answer', answerData);
            dispatch({ type: AddAnswer, data: response.data.data.answer });
        } catch (error) {
            // Handle error
        }
    };
};

export const deleteAnswer = (id) => {
    return async (dispatch) => {
        try {
            await axios.delete(`/api/answer/${id}`);
            dispatch({ type: DeleteAnswer, id });
        } catch (error) {
            // Handle error
        }
    };
};

export const editAnswer = (id, updatedData) => {
    return async (dispatch) => {
        try {
            const response = await axios.patch(`/api/answer/${id}`, updatedData);
            dispatch({ type: UpdateAnswer, data: response.data.data.answer });
        } catch (error) {
            // Handle error
        }
    };
};

export const searchAnswer = (query) => {
    return { type: SearchAnswer, query };
};

// Redux reducer
const initialState = {
    answerList: [],
    query: "",
};

export const answerReducer = (state = initialState, action) => {
    switch (action.type) {
        case GetAnswer:
            return {
                ...state,
                answerList: action.data,
            };
        case AddAnswer:
            return {
                ...state,
                answerList: [...state.answerList, action.data],
            };
        // case DeleteAnswer:
        //     return {
        //         ...state,
        //         answerList: state.answerList.filter((item) => item._id !== action.id),
        //     };
        // case UpdateAnswer:
        //     return {
        //         ...state,
        //         answerList: state.answerList.map((item) =>
        //             item._id === action.data._id ? action.data : item
        //         ),
        //     };
        // case SearchAnswer:
        //     return {
        //         ...state,
        //         query: action.query,
        //     };
        default:
            return state;
    }
};





// const initialList=()=>{
//     const list=localStorage.getItem("transaction-list")
//     let transactions=[];
//     if(list){
//         transactions=JSON.parse(list)
//     }
//     return transactions
// }
// const initialState={
//     answerList: initialList(),
//     query: "",
// }
// export const AnswerReducer= (state=initialState,action)=>{
//     switch(action.type){
//         case GetAnswer:{      
//             return{
//                 ...state,
//                 answerList:[action.data],
//             };
//         }
//         case AddAnswer:{
//             localStorage.setItem("transaction-list", JSON.stringify([...state.answerList, action.data]))
//             return{
//                 ...state,
//                 answerList:[...state.answerList, action.data],
//             };
//         }
//         case DeleteAnswer:{
//             const {data} = action;
//             const updatedList=state.answerList.filter(
//                 (item)=>item.createdAt!==data.createdAt
//             )
//             localStorage.setItem("transaction-list", JSON.stringify(updatedList))
//             return{
//                 ...state,
//                 answerList: updatedList,
//             };
//         }
//         case EditAnswer:{
//             const {data} = action;
//             const updatedList=state.answerList.filter(
//                 (item)=>item.createdAt!==data.createdAt
//             )
//             localStorage.setItem("transaction-list", JSON.stringify(updatedList))
//             return{
//                 ...state,
//                 answerList: updatedList,
//             };
//         }
//         case SearchAnswer:{
//             const {query}=action;
//             return {
//                 ...state,
//                 query,
//             }
//         }
//         default:
//             return state
//     }
// };



// reducers/answerReducer.js

// import {
//     GET_ALL_ANSWERS_REQUEST,
//     GET_ALL_ANSWERS_SUCCESS,
//     GET_ALL_ANSWERS_FAILURE,
//     GET_SINGLE_ANSWER_REQUEST,
//     GET_SINGLE_ANSWER_SUCCESS,
//     GET_SINGLE_ANSWER_FAILURE,
//     ADD_ANSWER_REQUEST,
//     ADD_ANSWER_SUCCESS,
//     ADD_ANSWER_FAILURE,
//     DELETE_ANSWER_REQUEST,
//     DELETE_ANSWER_SUCCESS,
//     DELETE_ANSWER_FAILURE,
//     UPDATE_ANSWER_REQUEST,
//     UPDATE_ANSWER_SUCCESS,
//     UPDATE_ANSWER_FAILURE
// } from '../action-types/Answers.js'

// const initialState = {
//     answers: [],
//     isLoading: false,
//     error: null
// };

// const answerReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case GET_ALL_ANSWERS_REQUEST:
//         case GET_SINGLE_ANSWER_REQUEST:
//         case ADD_ANSWER_REQUEST:
//         case DELETE_ANSWER_REQUEST:
//         case UPDATE_ANSWER_REQUEST:
//             return {
//                 ...state,
//                 isLoading: true,
//                 error: null
//             };
//         case GET_ALL_ANSWERS_SUCCESS:
//             return {
//                 ...state,
//                 isLoading: false,
//                 answers: action.payload
//             };
//         case GET_SINGLE_ANSWER_SUCCESS:
//             return {
//                 ...state,
//                 isLoading: false,
//                 answers: [action.payload]
//             };
//         case ADD_ANSWER_SUCCESS:
//             return {
//                 ...state,
//                 isLoading: false,
//                 answers: [...state.answers, action.payload]
//             };
//         case DELETE_ANSWER_SUCCESS:
//             return {
//                 ...state,
//                 isLoading: false,
//                 answers: state.answers.filter(answer => answer._id !== action.payload)
//             };
//         case UPDATE_ANSWER_SUCCESS:
//             return {
//                 ...state,
//                 isLoading: false,
//                 answers: state.answers.map(answer =>
//                     answer._id === action.payload._id ? action.payload : answer
//                 )
//             };
//         case GET_ALL_ANSWERS_FAILURE:
//         case GET_SINGLE_ANSWER_FAILURE:
//         case ADD_ANSWER_FAILURE:
//         case DELETE_ANSWER_FAILURE:
//         case UPDATE_ANSWER_FAILURE:
//             return {
//                 ...state,
//                 isLoading: false,
//                 error: action.payload
//             };
//         default:
//             return state;
//     }
// };

// export default answerReducer;
