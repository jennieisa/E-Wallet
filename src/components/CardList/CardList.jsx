import Card from '../Card/Card';

const CardList = () => {

    return (
        <>
            <section>
                <ul>
                    <Card />
                    <Card />
                </ul>
            </section>
            <section>
                <button>ADD A NEW CARD</button>
            </section>
        </>
    )
}

export default CardList;