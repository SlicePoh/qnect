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
export const addAnswer = createAsyncThunk('addAnswers',async ()=>{
    const response= await fetch(`${IP}/answer`,{
        method: 'POST'
    });
    return response.json();
})

const answerSlice = createSlice({
    name: "answer",
    initialState: {
        answer: null,
        status: 'idle',
        error: null
    },
    // data: "",
    extraReducers: (builder)=>{
        builder
            .addCase(getAllAnswers.pending, (state)=>{
                state.status = 'loading';
            })
            .addCase(getAllAnswers.fulfilled, (state,action)=>{
                state.status = 'succeeded';
                state.answer = action.payload;
            })
            .addCase(getAllAnswers.rejected, (state,action)=>{
                state.status = 'failed';
                state.error = action.error.message;
                console.log('Error getting answers from backend',state.error)
            })  
            // .addCase(addAnswer.pending, (state)=>{
            //     state.status = 'loading';
            // })
            // .addCase(addAnswer.fulfilled, (state,action)=>{
            //     state.status = 'succeeded';
            //     state.quote = action.payload;
            // })
            // .addCase(addAnswer.rejected, (state,action)=>{
            //     state.status = 'failed';
            //     state.error = action.error.message;
            //     console.log('Error posting answer to backend',state.error)
            // })  
    }
})

export default answerSlice.reducer;