import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import {IP} from '../../components/IPConfig'
import axios from 'axios'

export const getAllUsers = createAsyncThunk('getAllUsers',async ()=>{
    const response = await fetch(`${IP}/user`,{
        method: 'GET'
    });
    return response.json();
})
export const getUser = createAsyncThunk('getUser',async (id)=>{
    const response = await fetch(`${IP}/user/${id}`,{
        method: 'GET'
    });
    return response.json();
})
export const addUser = createAsyncThunk('addUser',async ()=>{
    const response= await fetch(`${IP}/user`,{
        method: 'POST',
        
    });
    return response.json();
})
export const updateUser = createAsyncThunk('updateUser', async (payload) => {
    const { id, newData } = payload;
    const response = await fetch(`${IP}/user/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${user.token}`
        },
        body: JSON.stringify(newData)
    });
    return response.json();
});

export const deleteUser = createAsyncThunk('deleteUser', async (id) => {
    const response = await fetch(`${IP}/user/${id}`, {
        method: 'DELETE'
    });
    return response.json();
});
export const signupUser=createAsyncThunk('signup', async (payload,  { rejectWithValue })=>{
    
    try {
        const response = axios.post(`${IP}/user/signup`,payload);
        console.log(response.data);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});
export const loginUser = createAsyncThunk('login', async (payload,  { rejectWithValue }) => {
    try {
        const response = await axios.post(`${IP}/user/login`, payload);
        console.log(response.data);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});
const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        status: "idle",
        error: null,
        curr: ""
    },
    // data: "",
    extraReducers: (builder)=>{
        builder
            .addCase(getAllUsers.pending, (state)=>{
                state.status = 'loading';
                console.log(state.status);
            })
            .addCase(getAllUsers.fulfilled, (state,action)=>{
                state.status = 'succeeded';
                state.user = action.payload;
                console.log(state.user,'and its',state.status);
            })
            .addCase(getAllUsers.rejected, (state,action)=>{
                state.status = 'failed';
                state.error = action.error.message;
                console.log('Error getting users from backend',state.error)
            })
             // get an user
             .addCase(getUser.pending, (state)=>{
                state.status = 'loading';
            })
            .addCase(getUser.fulfilled, (state,action)=>{
                state.status = 'succeeded';
                state.user = action.payload;
                console.log(state.user,'and its',state.status);
            })
            .addCase(getUser.rejected, (state,action)=>{
                state.status = 'failed';
                state.error = action.error.message;
                console.log('Error getting Users from backend',state.error)
            }) 
            // post an user
            .addCase(addUser.pending, (state)=>{
                state.status = 'loading';
            })
            .addCase(addUser.fulfilled, (state,action)=>{
                state.status = 'succeeded';
                state.user = action.payload;
                console.log(state.user,'added successfully');
            })
            .addCase(addUser.rejected, (state,action)=>{
                state.status = 'failed';
                state.error = action.error.message;
                console.log('Error posting User to backend',state.error)
            }) 
            // update User
            .addCase(updateUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload;
                console.log('User edited successfully');
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
                console.log('Error editing User:', state.error);
            })
            // delete User
            .addCase(deleteUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteUser.fulfilled, (state) => {
                state.status = 'succeeded';
                console.log('User deleted successfully');
            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
                console.log('Error deleting User:', state.error);
            })
            //sign up user
            .addCase(signupUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(signupUser.fulfilled, (state,action) => {
                state.status = 'succeeded';
                state.curr = action.payload;
                console.log('User signed up successfully',state.curr);
            })
            .addCase(signupUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
                console.log('Error signing up User:', state.error);
            })
            // log in user
            .addCase(loginUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loginUser.fulfilled, (state,action) => {
                state.status = 'succeeded';
                state.curr = action.payload;
                console.log('User logged in successfully',state.curr);
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
                console.log('Error logging in User:', state.error);
            });
    }
})

export default userSlice.reducer;