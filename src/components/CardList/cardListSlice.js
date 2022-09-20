import {createSlice} from '@reduxjs/toolkit';

const cardListSlice = createSlice({
    name: "cardList",
    initialState: {
        cardsInfo: [
            {
                cardnumber: 1234567891012345,
                cardholder: "Jennie Isaksson",
                valid: "22/23",
                vendor: "amex",
                id: 1,
                active: false,
            },       
            {
                cardnumber: 1234567891012345,
                cardholder: "Jennie Isaksson",
                valid: "22/23",
                vendor: "amex",
                id: 2,
                active: true,
            },
        ],
        latestId: 2,
    },
    reducers: {
        addCard: (state, {payload}) => {
            state.cardsInfo.push(payload);
            state.latestId += 1;
        },
        deleteCard: (state, {payload}) => {
            state.cardsInfo = state.cardsInfo.filter((card) => card.id !== payload);
        },
        activateCard: (state, {payload}) => {
            state.cardsInfo.map((card) => {
                console.log(card)
                if(card.active === true) {
                    card.active = false;
                    console.log("find card")
                } else {
                    console.log("cant find")
                }
            })

            state.cardsInfo = state.cardsInfo.filter((card) => card.id === payload);
            state.cardsInfo.active = true;
        }
    }, 
    extraReducers: {
        //async actions
    }
})

export default cardListSlice.reducer;
export const {addCard, deleteCard, activateCard} = cardListSlice.actions;