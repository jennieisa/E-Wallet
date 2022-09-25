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
            const [{name:{first, last}}] = action.payload.results;
            state.user = first.toUpperCase() + ' ' + last.toUpperCase();
            state.status = "Fetched data is done";
        },
        [getUser.pending]: (state, action) => {
            state.user = "Loading...";
        },
        [getUser.rejected]: (state, action) => {
            state.user = "Couldn't fetch data.";
        }
    }
});

export default userInfoSlice.reducer;