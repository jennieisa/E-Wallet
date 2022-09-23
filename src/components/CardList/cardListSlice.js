import {createSlice} from '@reduxjs/toolkit';

const cardListSlice = createSlice({
    name: "cardList",
    initialState: {
        cardsInfo: [
            {
                cardnumber: 1234567891012345,
                cardholder: "Jennie Isaksson 1",
                valid: "22/23",
                vendor: "amex",
                id: 1,
                active: false,
            },       
            {
                cardnumber: 1234567891012345,
                cardholder: "Jennie Isaksson 2",
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
            state.cardsInfo.splice(payload, 1);
        },
        activateCard: (state, {payload}) => {
            state.cardsInfo = state.cardsInfo.map((card) => {
                if (card.active === true) {
                    card.active = false;
                    return card;
                } else if (card.id === payload.id) {
                    card.active = true;
                    return card;
                }
                
            })
        }
    }, 
    extraReducers: {
        //async actions
    }
})

export default cardListSlice.reducer;
export const {addCard, deleteCard, activateCard} = cardListSlice.actions;