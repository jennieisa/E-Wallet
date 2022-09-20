import Card from "../Card/Card";

import { useSelector } from "react-redux";

const CardList = () => {
    const cards = useSelector((state) => state.cardList.cardsInfo);
    console.log(cards);

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
                        <li>
                            <Card key={index} card={card}/>
                        </li>
                ))}
                </ul>
                <button>ADD A NEW CARD</button>
            </section>
        </section>
    )
}

export default CardList;