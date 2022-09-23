import {configureStore} from '@reduxjs/toolkit';
import cardListSlice from '../components/CardList/cardListSlice';
import userInfoSlice from '../components/UserInfo/userInfoSlice';

const store = configureStore({
    reducer: {
        cardList: cardListSlice,
        userInfo: userInfoSlice,
    }
})

export default store;

