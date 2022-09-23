const Card = ({card, user}) => {
    console.log(card, user)
    return (
        <article>
            <p>Vendor: {card.vendor}</p>
            <p>Cardnumber: {card.cardnumber}</p>
            <p>Cardholder: {user}</p>
            <p>Valid: {card.valid}</p>
            <p>active: {`${card.active}`}</p>
        </article>
    )
}

export default Card;