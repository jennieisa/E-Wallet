const AddCardForm = () => {
    return (
        <form>
            <label htmlFor="cardNrInput">CARD NUMBER</label>
            <input id="cardNrInput" type="text"/>
            <label htmlFor="cardholderInput">CARDHOLDER NAME</label>
            <input id="cardholderInput" type="text"/>
            <section>
                <label htmlFor="validInput">VALID THRU</label>
                <input id="validInput" type="text" />
                <label htmlFor="ccvInput">CCV</label>
                <input id="ccvInput" type="text" />
            </section>
            <label htmlFor="">VENDOR</label>
            <section>
                <option value="amex">AMEX</option>
                <option value="mastercard">MASTERCARD</option>
                <option value="visa">VISA</option>
                <button>ADD CARD</button>
            </section>
        </form>
    )
}

export default AddCardForm;