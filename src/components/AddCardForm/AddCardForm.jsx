
const AddCardForm = () => {

    return (
        <section>
            <article>
                <p>Vendor: </p>
                <p>Cardnumber: </p>
                <p>Cardholder:</p>
                <p>Valid: </p>
                <p>active:</p>
            </article>
            <form>
                <label htmlFor="cardNumber">CARDNUMBER</label>
                <input id="cardNumber" type="text" />
                <label htmlFor="cardholder">CARDHOLDER</label>
                <input id="cardholder" type="text" />
                <label htmlFor="valid">VALID THRU</label>
                <input id="valid" type="text" />
                <label htmlFor="ccv">CCV</label>
                <input id="ccv" type="text" />
                <label htmlFor="selectVendor">VENDOR</label>
                <select name="vendor" id="selectVendor">
                    <option value="amex">AMEX</option>
                    <option value="mastercard">MASTERCARD</option>
                    <option value="visa">VISA</option>
                </select>
                <button>ADD CARD</button>
            </form>
        </section>
    )
}

export default AddCardForm;