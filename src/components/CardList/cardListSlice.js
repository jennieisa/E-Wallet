import {createSlice} from '@reduxjs/toolkit';

const cardListSlice = createSlice({
    name: "cardList",
    initialState: {
        cardsInfo: [
            {
                cardnumber: 1234567891012345,
                valid: "22/23",
                vendor: "amex",
                id: 1,
                active: true,
            },       
        ],
        latestId: 2,
        amountCards: 1,
    },
    reducers: {
        toManyCards: (state, {payload}) => {
            if (state.amountCards === 3) {
                return true;
            } else {
                return false;
            }
        },
        addCard: (state, {payload}) => {
            state.cardsInfo.push(payload);
            state.latestId += 1;
            state.amountCards += 1;
        },
        deleteCard: (state, {payload}) => {
            state.cardsInfo.splice(payload, 1);
            state.amountCards -= 1;
        },
        activateCard: (state, {payload}) => {
            state.cardsInfo = state.cardsInfo.map((card) => {
                if (card.active === true) {
                    card.active = false;
                    return card;
                } else if (card.id === payload.id) {
                    card.active = true;
                    return card;
                } else {
                    return card;
                }
                
            })
        }
    }, 
})

export default cardListSlice.reducer;
export const {addCard, deleteCard, activateCard} = cardListSlice.actions;