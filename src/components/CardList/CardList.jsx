import Card from "../Card/Card";
import { activateCard } from "./cardListSlice";
import { deleteCard } from "./cardListSlice";
import styles from './cardList.module.css';

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

const CardList = () => {
    const cards = useSelector((state) => state.cardList.cardsInfo);
    const user = useSelector((state) =>  state.userInfo.user);
    const amountOfCards = useSelector((state) => state.cardList.amountCards);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = () => {
        if(amountOfCards === 3) {
            alert("You can not have more than 3 cards in your Wallet.");
        } else {
            navigate('/addcard', {state: {user}})
        }
    }

    return (
        <section className={styles.cardList}>
            <h2 className={styles.cardHeading}>ACTIVE CARD</h2>
            {cards.map((card, index) => (
                card.active === true && 
                    <Card key={index} card={card} user={user}/>
            ))}
            <section>
                <h2 className={styles.cardHeading}>INACTIVE CARDS</h2>
                <ul className={styles.inactiveCardList}>
                {cards.map((card, index) => (
                    card.active === false && 
                        <li key={index} >
                            <Card card={card} user={user}/>
                            <button className={`${styles.activateBtn} ${styles.btn}`} onClick={() => dispatch(activateCard(card))}>ACTIVATE CARD</button>
                            <button className={`${styles.deleteBtn} ${styles.btn}`} onClick={() => dispatch(deleteCard(index))}>DELETE CARD</button>
                        </li>
                ))}
                </ul>
                <button className={styles.btn} onClick={() => handleClick()}>ADD A NEW CARD</button>
            </section>
        </section>
    )
}

export default CardList;