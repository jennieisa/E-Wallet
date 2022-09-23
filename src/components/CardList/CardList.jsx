import Card from "../Card/Card";
import { activateCard } from "./cardListSlice";
import { deleteCard } from "./cardListSlice";
import styles from './cardList.module.css';

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

const CardList = () => {
    const cards = useSelector((state) => state.cardList.cardsInfo);
    const user = useSelector((state) =>  state.userInfo.user);
    console.log(user)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <section className={styles.cardList}>
            <p>ACTIVE CARD</p>
            {cards.map((card, index) => (
                card.active === true && 
                    <Card key={index} card={card} user={user} />
            ))}
            <section>
                <p>INACTIVATE CARDS</p>
                <ul className={styles.inactiveCardList}>
                {cards.map((card, index) => (
                    card.active === false && 
                        <li key={index}>
                            <Card card={card} user={user}/>
                            <button onClick={() => dispatch(activateCard(card))}>ACTIVATE CARD</button>
                            <button onClick={() => dispatch(deleteCard(index))}>DELETE CARD</button>
                        </li>
                ))}
                </ul>
                <button onClick={() => navigate('/addcard', {state: {user}})}>ADD A NEW CARD</button>
            </section>
        </section>
    )
}

export default CardList;