import Card from "../Card/Card";

import { useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom';

const CardList = () => {
    const cards = useSelector((state) => state.cardList.cardsInfo);
    console.log(cards);

    const navigate = useNavigate();

    return (
        <section>
            <p>ACTIVE CARD</p>
            {cards.map((card, index) => (
                card.active === true && 
                    <Card key={index} card={card}/>
            ))}
            <section>
                <p>INACTIVATE CARDS</p>
                <ul>
                {cards.map((card, index) => (
                    card.active === false &&
                        <li key={index}>
                            <Card card={card}/>
                        </li>
                ))}
                </ul>
                <button onClick={() => navigate('/addcard')}>ADD A NEW CARD</button>
            </section>
        </section>
    )
}

export default CardList;