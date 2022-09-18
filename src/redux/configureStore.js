import {configureStore} from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        cards: cardsSlice,
        user: userSlice,
    }
})

export default store;