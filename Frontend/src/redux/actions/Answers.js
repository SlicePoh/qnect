import { GetAnswer, AddAnswer, DeleteAnswer,UpdateAnswer, SearchAnswer } from "../action-types/Answers"

export const getAnswer=(data)=>{
    return{
        type: GetAnswer,
        data,
    }
}
export const addAnswer=(data)=>{
    return{
        type: AddAnswer,
        data,
    }
}
export const delAnswer=(data)=>{
    return{
        type: DeleteAnswer,
        data,
    }
}
export const updateAnswer=(data)=>{
    return{
        type: UpdateAnswer,
        data,
    }
}
export const searchAnswer=(query)=>{
    return{
        type: SearchAnswer,
        query,
    }
}



// import {
//     ADD_ANSWER_FAILURE,
//     ADD_ANSWER_REQUEST,
//     ADD_ANSWER_SUCCESS,
//     DELETE_ANSWER_FAILURE,
//     DELETE_ANSWER_REQUEST,
//     DELETE_ANSWER_SUCCESS,
//     GET_ALL_ANSWERS_FAILURE,
//   GET_ALL_ANSWERS_REQUEST,
//   GET_ALL_ANSWERS_SUCCESS,
//   GET_SINGLE_ANSWER_FAILURE,
//   GET_SINGLE_ANSWER_REQUEST,
//   GET_SINGLE_ANSWER_SUCCESS,
//   UPDATE_ANSWER_FAILURE,
//   UPDATE_ANSWER_REQUEST,
//   UPDATE_ANSWER_SUCCESS,
// } from "../action-types/Answers";
// import axios from 'axios';
// // GET all Answers
// export const getAllAnswers = () => async (dispatch) => {
//   dispatch({ type: GET_ALL_ANSWERS_REQUEST });
//   try {
//     const response = await axios.get("/api/answers");
//     dispatch({
//       type: GET_ALL_ANSWERS_SUCCESS,
//       payload: response.data.data.answer,
//     });
//   } catch (error) {
//     dispatch({
//       type: GET_ALL_ANSWERS_FAILURE,
//       payload: error.response.data.error,
//     });
//   }
// };

// // GET Single Answer
// export const GETSingleAnswer = (id) => async (dispatch) => {
//   dispatch({ type: GET_SINGLE_ANSWER_REQUEST });
//   try {
//     const response = await axios.get(`/api/answers/${id}`);
//     dispatch({
//       type: GET_SINGLE_ANSWER_SUCCESS,
//       payload: response.data.data.answer,
//     });
//   } catch (error) {
//     dispatch({
//       type: GET_SINGLE_ANSWER_FAILURE,
//       payload: error.response.data.error,
//     });
//   }
// };

// // Add Answer
// export const addAnswer = (answerData) => async (dispatch) => {
//   dispatch({ type: ADD_ANSWER_REQUEST });
//   try {
//     const response = await axios.post("/api/answers", answerData);
//     dispatch({
//       type: ADD_ANSWER_SUCCESS,
//       payload: response.data.data.answer,
//     });
//   } catch (error) {
//     dispatch({
//       type: ADD_ANSWER_FAILURE,
//       payload: error.response.data.error,
//     });
//   }
// };

// // Delete Answer
// export const deleteAnswer = (id) => async (dispatch) => {
//   dispatch({ type: DELETE_ANSWER_REQUEST });
//   try {
//     await axios.delete(`/api/answers/${id}`);
//     dispatch({
//       type: DELETE_ANSWER_SUCCESS,
//       payload: id,
//     });
//   } catch (error) {
//     dispatch({
//       type: DELETE_ANSWER_FAILURE,
//       payload: error.response.data.error,
//     });
//   }
// };

// // Update Answer
// export const updateAnswer = (id, answerData) => async (dispatch) => {
//   dispatch({ type: UPDATE_ANSWER_REQUEST });
//   try {
//     const response = await axios.patch(`/api/answers/${id}`, answerData);
//     dispatch({
//       type: UPDATE_ANSWER_SUCCESS,
//       payload: response.data.data.answer,
//     });
//   } catch (error) {
//     dispatch({
//       type: UPDATE_ANSWER_FAILURE,
//       payload: error.response.data.error,
//     });
//   }
// };
