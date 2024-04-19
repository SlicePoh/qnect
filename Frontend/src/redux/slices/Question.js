import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';

import {IP} from '../../components/IPConfig'

export const getAllQuestions = createAsyncThunk('getAllQuestions',async ()=>{
    const response = await fetch(`${IP}/question`,{
        method: 'GET'
    });
    return response.json();
})
export const addQuestion = createAsyncThunk('addQuestion',async ()=>{
    const response= await fetch(`${IP}/question`,{
        method: 'POST'
    });
    return response.json();
})

const questionSlice = createSlice({
    name: "question",
    initialState: {
        question: null,
        status: "idle",
        error: null
    },
    // data: "",
    extraReducers: (builder)=>{
        builder
            .addCase(getAllQuestions.pending, (state)=>{
                state.status = 'loading';
            })
            .addCase(getAllQuestions.fulfilled, (state,action)=>{
                state.status = 'succeeded';
                state.question = action.payload;
            })
            .addCase(getAllQuestions.rejected, (state,action)=>{
                state.status = 'failed';
                state.error = action.error.message;
                console.log('Error getting questions from backend',state.error)
            })
            // .addCase(addQuestion.pending, (state)=>{
            //     state.status = 'loading';
            // })
            // .addCase(addQuestion.fulfilled, (state,action)=>{
            //     state.status = 'succeeded';
            //     state.quote = action.payload;
            // })
            // .addCase(addQuestion.rejected, (state,action)=>{
            //     state.status = 'failed';
            //     state.error = action.error.message;
            //     console.log('Error getting questions from backend',state.error)
            // })
    }
})

export default questionSlice.reducer;