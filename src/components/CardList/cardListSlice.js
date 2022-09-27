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
            },        
        ],
        latestId: 1,
        amountCards: 1,
    },
    reducers: {
        addCard: (state, {payload}) => {
            if(state.amountCards < 4) {
                state.cardsInfo.push(payload);
                state.latestId += 1;
                state.amountCards += 1;
            } else if (state.amountCards >= 3) {
                return;
            }
        },
        deleteCard: (state, {payload}) => {
            state.cardsInfo.splice(payload, 1);
            state.amountCards -= 1;
        },
        activateCard: (state, {payload}) => {
            state.cardsInfo = state.cardsInfo.map((card) => {
                if(card.active === true) {
                    card.active = false;
                } else if (card.id === payload.id) {
                    card.active = true;
                }
                return card;
            })
        }
    }, 
})

export default cardListSlice.reducer;
export const {addCard, deleteCard, activateCard} = cardListSlice.actions;