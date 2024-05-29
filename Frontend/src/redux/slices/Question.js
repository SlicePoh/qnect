import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import {IP} from '../../components/IPConfig'

export const getAllQuestions = createAsyncThunk('getAllQuestions',async (token)=>{
    const response = await fetch(`${IP}/question`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    });
    return response.json();
})
export const getQuestion = createAsyncThunk('getQuestion',async (payload)=>{
    const {id,token}= payload;
    const response = await fetch(`${IP}/question/${id}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    });
    return response.json();
})
export const addQuestion = createAsyncThunk('addQuestion',async (payload)=>{
    const {data, token} = payload;
    const response= await fetch(`${IP}/question`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    });
    return response.json();
})
export const updateQuestion = createAsyncThunk('updateQuestion', async (payload) => {
    const { id, newData,token } = payload;
    const response = await fetch(`${IP}/question/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(newData)
    });
    return response.json();
});
export const updateQuestionComments = createAsyncThunk('updateQuestionComments', async (payload, thunkAPI) => {
    const { id, text,token } = payload;
    try {
        const response = await fetch(`${IP}/question/${id}/comments`, {
            method: 'PATCH',
            body: JSON.stringify(text),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        if (!response.ok) {
            throw new Error('Failed to update comments');
        }
        return await response.json();
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const deleteQuestion = createAsyncThunk('deleteQuestion', async (payload) => {
    const {id,token}= payload;
    const response = await fetch(`${IP}/question/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    });
    return response.json();
});

const questionSlice = createSlice({
    name: 'question',
    initialState: {
        question: [],
        status: "idle",
        error: null
    },
    // data: "",
    extraReducers: (builder)=>{
        builder
            .addCase(getAllQuestions.pending, (state)=>{
                state.status = 'loading';
                console.log(state.status);
            })
            .addCase(getAllQuestions.fulfilled, (state,action)=>{
                state.status = 'succeeded';
                state.question = action.payload;
                console.log(state.question,'and its',state.status);
            })
            .addCase(getAllQuestions.rejected, (state,action)=>{
                state.status = 'failed';
                state.error = action.error.message;
                console.log('Error getting questions from backend',state.error)
            })
            // get a question
            .addCase(getQuestion.pending, (state)=>{
                state.status = 'loading';
            })
            .addCase(getQuestion.fulfilled, (state,action)=>{
                state.status = 'succeeded';
                state.question = action.payload;
                console.log(state.Question,'and its',state.status);
            })
            .addCase(getQuestion.rejected, (state,action)=>{
                state.status = 'failed';
                state.error = action.error.message;
                console.log('Error getting questions from backend',state.error)
            }) 
            // post a question
            .addCase(addQuestion.pending, (state)=>{
                state.status = 'loading';
            })
            .addCase(addQuestion.fulfilled, (state,action)=>{
                state.status = 'succeeded';
                state.question = action.payload;
                console.log(state.question,'added successfully');
            })
            .addCase(addQuestion.rejected, (state,action)=>{
                state.status = 'failed';
                state.error = action.error.message;
                console.log('Error posting Question to backend',state.error)
            }) 
            // update question
            .addCase(updateQuestion.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateQuestion.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.question = action.payload;
                console.log('Question edited successfully');
            })
            .addCase(updateQuestion.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
                console.log('Error editing question:', state.error);
            })

            // update question comments
            .addCase(updateQuestionComments.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateQuestionComments.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.question = action.payload;
                console.log('Question comments updated successfully');
            })
            .addCase(updateQuestionComments.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
                console.log('Error updating question comments:', state.error);
            })

            // delete question
            .addCase(deleteQuestion.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteQuestion.fulfilled, (state,action) => {
                state.status = 'succeeded';
                state.question=action.payload;
                console.log('Question deleted successfully');
            })
            .addCase(deleteQuestion.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
                console.log('Error deleting question:', state.error);
            });
           
    }
})

export default questionSlice.reducer;