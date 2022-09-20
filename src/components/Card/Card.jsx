const Card = ({card}) => {
    console.log(card)
    return (
        <article>
            <p>Vendor: {card.vendor}</p>
            <p>Cardnumber: {card.cardnumber}</p>
            <p>Cardholder: {card.cardholder}</p>
            <p>Valid: {card.valid}</p>
            <p>active: {`${card.active}`}</p>
        </article>
    )
}

export default Card;