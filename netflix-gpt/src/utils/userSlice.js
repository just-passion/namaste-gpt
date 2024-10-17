import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers:{
        //As soon as we log in 
        addUser: (state, action) => {
            return action.payload; //when this is return then initialState becomes action.payload
        },

        //When user signs out
        removeUser: (state, action) => {
            return null;
        }
    }
})

export const { addUser, removeUser} = userSlice.actions
export default userSlice.reducer //import this in appStore 