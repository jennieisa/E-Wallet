import {configureStore} from '@reduxjs/toolkit';
import cardListSlice from '../components/CardList/cardListSlice';

const store = configureStore({
    reducer: {
        cardList: cardListSlice,
    }
})

export default store;

