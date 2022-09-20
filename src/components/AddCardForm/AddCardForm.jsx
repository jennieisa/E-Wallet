import {addCard} from '../CardList/cardListSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const AddCardForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {latestId} = useSelector((state) => state.cardList);
    const {userInput, setUserInput} = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        let cardnumberInput = document.querySelector('#cardnumber').value;
        let cardholderInput = document.querySelector('#cardholder').value;
        let validInput = document.querySelector('#valid').value;
        let ccvInput = document.querySelector('#ccv').value;
        let vendorInput = document.querySelector('#selectVendor').value;

        console.log(cardholderInput, cardnumberInput, validInput, ccvInput, vendorInput)
        
        dispatch(
            addCard({
                cardnumber: cardnumberInput,
                cardholder: cardholderInput,
                valid: validInput,
                vendor: vendorInput,
                ccv: ccvInput,
                active: false,
                id: latestId + 1,
            })
        )

        navigate('/cards');
    }

    const handleChange = (id) => {
        let inputs = document.querySelector(`#${id}`).value;
        document.querySelector(`#${id}Input`).textContent = inputs;

        
        console.log(inputs)
    }

    return (
        <section>
            <article>
                <p id="selectVendorInput">Vendor </p>
                <p id="cardnumberInput">Cardnumber {userInput}</p>
                <p id="cardholderInput">Cardholder {userInput}</p>
                <p id="validInput">Valid {userInput}</p>
                <p id="ccvInput">CCV</p>
                <p>active: false</p>
            </article>
            <form>
                <label htmlFor="cardnumber">CARDNUMBER</label>
                <input id="cardnumber" type="text" onChange={() => handleChange("cardnumber")}/>
                <label htmlFor="cardholder">CARDHOLDER</label>
                <input id="cardholder" type="text" onChange={() => handleChange("cardholder")}/>
                <label htmlFor="valid">VALID THRU</label>
                <input id="valid" type="text" onChange={() => handleChange("valid")}/>
                <label htmlFor="ccv">CCV</label>
                <input id="ccv" type="text" onChange={() => handleChange("ccv")}/>
                <label htmlFor="selectVendor">VENDOR</label>
                <select name="vendor" id="selectVendor" onChange={() => handleChange("selectVendor")}>
                    <option value="amex">AMEX</option>
                    <option value="mastercard">MASTERCARD</option>
                    <option value="visa">VISA</option>
                </select>
                <button onClick={(e) => handleSubmit(e)}>ADD CARD</button>
            </form>
        </section>
    )
}

export default AddCardForm;