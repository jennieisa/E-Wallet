import Header from '../components/Header/Header';
import CardList from '../components/CardList/CardList';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const CardsPage = () => {
    //const dispatch = useDispatch();

    return (
        <div>
            <Header />
            <CardList />
        </div>
    )
}

export default CardsPage;