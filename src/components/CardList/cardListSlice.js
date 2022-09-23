import {createSlice} from '@reduxjs/toolkit';

const cardListSlice = createSlice({
    name: "cardList",
    initialState: {
        cardsInfo: [
            {
                cardnumber: 1234567891012345,
                valid: "22/23",
                vendor: "ROBBER",
                id: 1,
                active: true,
            },        {
                cardnumber: 99999999999999,
                valid: "22/23",
                vendor: "GOLD",
                id: 1,
                active: false,
            },    
        ],
        latestId: 2,
        amountCards: 1,
    },
    reducers: {
        addCard: (state, {payload}) => {
            if(state.amountCards < 3) {
                state.cardsInfo.push(payload);
                state.latestId += 1;
                state.amountCards += 1;
            } else {
                return;
            }
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