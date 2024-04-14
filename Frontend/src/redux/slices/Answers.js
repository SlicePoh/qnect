import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllAnswers = createAsyncThunk('getAllAnswers',async ()=>{
    const response= await axios.get('/api/v1/answer');
    return response;
})
export const addAnswer = createAsyncThunk('addAnswers',async ()=>{
    const response= await axios.post('/api/v1/answer');
    return response;
})

const answerSlice = createSlice({
    name: "answer",
    initialState: false,
    data: null,
    extraReducers: (builder)=>{
        builder.addCase(getAllAnswers.pending, (state,action)=>{
            state.isLoading= true;
        });
        builder.addCase(getAllAnswers.fulfilled, (state,action)=>{
            state.isLoading= false;
            state.data=action.payload;
        });
        builder.addCase(getAllAnswers.rejected, (state,action)=>{
            state.isError= true;
            console.log("Error getting answers from backend",action.payload)
        });
        
    }
})

export default answerSlice.reducer;