import {createSlice} from '@reduxjs/toolkit';

const cardListSlice = createSlice({
    name: "cardList",
    initialState: {
        cardsInfo: [
            {
                cardnumber: 1234567891012345,
                cardholder: "Jennie Isaksson",
                valid: "22/23",
                vendor: "AMEX",
                active: false,
            },       
            {
                cardnumber: 1234567891012345,
                cardholder: "Jennie Isaksson",
                valid: "22/23",
                vendor: "AMEX",
                active: true,
            },
            {
                cardnumber: 1234567891012345,
                cardholder: "Jennie Isaksson",
                valid: "22/23",
                vendor: "AMEX",
                active: false,
            },
            {
                cardnumber: 1234567891012345,
                cardholder: "Jennie Isaksson",
                valid: "22/23",
                vendor: "AMEX",
                active: false,
            },
        ],
    },
    reducers: {
        //actions
    }, 
    extraReducers: {
        //async actions
    }
})

export default cardListSlice.reducer;