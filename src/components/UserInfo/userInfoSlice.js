import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk("userInfo/getUser", async () => {
    return fetch(`https://randomuser.me/api/`)
        .then((response) => response.json());
});

const userInfoSlice = createSlice({
    name: "userInfo",
    initialState: {
        user: null,
        status: "No data",
    },
    reducers: {
        //actions
    }, 
    extraReducers: {
        //async actions
        [getUser.fulfilled]: (state, action) => {
            console.log(action.payload);
            state.user = action.payload;
            state.status = "Fetched data is done";
        }
    }
});

export default userInfoSlice.reducer;