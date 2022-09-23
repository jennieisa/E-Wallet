import {addCard} from '../CardList/cardListSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { GiRobber, GiGoldBar, GiLifeBuoy} from 'react-icons/gi';
import { MdContactless } from 'react-icons/md';
import {FcSimCardChip} from 'react-icons/fc';

import cardStyle from '../Card/card.module.css';
import styles from './addCardForm.module.css';
import cardListStyle from '../CardList/cardList.module.css';

const AddCardForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {latestId} = useSelector((state) => state.cardList);
    const user = useSelector((state) => state.userInfo.user);
    console.log(user)
    const {userInput} = useState();

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
        <section className={styles.pageWrapper}>
            <article className={cardStyle.card}>
            <section className={cardStyle.cardSection}>
                <p><MdContactless size={35}/></p>
                <p id="selectVendorInput">
                <GiRobber size={35}/> 
                </p>
            </section>
            <section className={cardStyle.cardSection}>
                <FcSimCardChip size={50}/>
                <p id="cardnumberInput" className={cardStyle.cardnumber}>xxxx xxxx xxxx xxxx {userInput}</p>
            </section>
            <section className={cardStyle.cardSection}>
                <p className={cardStyle.cardTextHeading}>CARDHOLDER NAME</p>
                <p className={cardStyle.cardTextHeading}>VALID THRU</p>
            </section>
            <section className={cardStyle.cardSection}>
                <p className={cardStyle.cardTextInfo}>{user}</p>
                <p id="validInput" className={cardStyle.cardTextInfo}>xx/xx {userInput}</p>
            </section>
            </article>
            <form className={styles.addCardForm}>
                <label htmlFor="cardnumber">CARDNUMBER</label>
                <input className={styles.formField} id="cardnumber" type="text" onChange={() => handleChange("cardnumber")}/>
                <label htmlFor="cardholder">CARDHOLDER</label>
                <input className={styles.formField} id="cardholder" type="text" value={user && user} readOnly/>
                <label htmlFor="valid">VALID THRU</label>
                <input className={styles.formField} id="valid" type="text" onChange={() => handleChange("valid")}/>
                <label htmlFor="ccv">CCV</label>
                <input className={styles.formField} id="ccv" type="text" />
                <label htmlFor="selectVendor">VENDOR</label>
                <select className={styles.formField} name="vendor" id="selectVendor" onChange={() => handleChange("selectVendor")}>
                    <option value="ROBBER">ROBBER</option>
                    <option value="GOLD">GOLD</option>
                    <option value="LIFE-SAVER">LIFE-SAVER</option>
                </select>
                <button className={`${cardListStyle.btn} ${styles.addCardBtn}`} onClick={(e) => handleSubmit(e)}>ADD CARD</button>
            </form>
        </section>
    )
}

export default AddCardForm;