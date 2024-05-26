import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import {IP} from '../../components/IPConfig'

export const getAllAnswers = createAsyncThunk('getAllAnswers',async ()=>{
    const response = await fetch(`${IP}/answer`,{
        method: 'GET'
    });
    return response.json();
})
export const getAnswer = createAsyncThunk('getAnswer',async (id)=>{
    const response = await fetch(`${IP}/answer/${id}`,{
        method: 'GET'
    });
    return response.json();
})
export const addAnswer = createAsyncThunk('addAnswer',async (data)=>{
    const response = await fetch(`${IP}/answer`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
})
export const updateAnswer = createAsyncThunk('updateAnswer', async (payload) => {
    const { id, newData } = payload;
    const response = await fetch(`${IP}/answer/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newData)
    });
    return response.json();
});

export const deleteAnswer = createAsyncThunk('deleteAnswer', async (id) => {
    const response = await fetch(`${IP}/answer/${id}`, {
        method: 'DELETE'
    });
    return response.json();
});

const answerSlice = createSlice({
    name: 'answer',
    initialState: {
        answers: [],
        status: 'idle',
        error: null
    },
    extraReducers: (builder)=>{
        builder
            // get all answers
            .addCase(getAllAnswers.pending, (state)=>{
                state.status = 'loading';
            })
            .addCase(getAllAnswers.fulfilled, (state,action)=>{
                state.status = 'succeeded';
                state.answers = action.payload;
                console.log(state.answers,'and its',state.status);
            })
            .addCase(getAllAnswers.rejected, (state,action)=>{
                state.status = 'failed';
                state.error = action.error.message;
                console.log('Error getting answers from backend',state.error)
            })  
            // getAnswer
            .addCase(getAnswer.pending, (state)=>{
                state.status = 'loading';
            })
            .addCase(getAnswer.fulfilled, (state,action)=>{
                state.status = 'succeeded';
                state.answers.push(action.payload);
                console.log(state.answers,'and its',state.status);
            })
            .addCase(getAnswer.rejected, (state,action)=>{
                state.status = 'failed';
                state.error = action.error.message;
                console.log('Error getting answers from backend',state.error)
            }) 
            // post an answer
            .addCase(addAnswer.pending, (state)=>{
                state.status = 'loading';
            })
            .addCase(addAnswer.fulfilled, (state,action)=>{
                state.status = 'succeeded';
                state.answers= action.payload;
                console.log(state.answers,'added successfully');
            })
            .addCase(addAnswer.rejected, (state,action)=>{
                state.status = 'failed';
                state.error = action.error.message;
                console.log('Error posting answer to backend',state.error)
            }) 
            // update answer
            .addCase(updateAnswer.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateAnswer.fulfilled, (state, action) => {
                state.status = 'succeeded';
                const updatedAnswer = action.payload;
                state.answers = state.answers.map(answer => 
                    answer._id === updatedAnswer._id ? updatedAnswer : answer
                );
                console.log('Answer patched successfully');
            })
            .addCase(updateAnswer.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
                console.log('Error patching answer:', state.error);
            })
            // delete answer
            .addCase(deleteAnswer.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteAnswer.fulfilled, (state,action) => {
                state.status = 'succeeded';
                state.answers = action.payload;
                console.log('Answer deleted successfully');
            })
            .addCase(deleteAnswer.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
                console.log('Error deleting answer:', state.error);
            }); 
    }
})

export default answerSlice.reducer;