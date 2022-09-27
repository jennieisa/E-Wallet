import styles from './card.module.css';

import { GiRobber, GiGoldBar, GiLifeBuoy} from 'react-icons/gi';
import { MdContactless } from 'react-icons/md';
import {FcSimCardChip} from 'react-icons/fc';

const Card = ({card, user}) => {
    return (
        <article className={styles.card}>
            <section className={styles.cardSection}>
                <p><MdContactless size={35}/></p>
                <p>{
                    card.vendor === "ROBBER" ?
                    <GiRobber size={35}/> 
                    : card.vendor === "GOLD" ? 
                    <GiGoldBar size={35}/>
                    : <GiLifeBuoy size={35}/>
                    }
                </p>
            </section>
            <section className={styles.cardSection}>
                <FcSimCardChip size={50}/>
                <p className={styles.cardnumber}>{card.cardnumber}</p>
            </section>
            <section className={styles.cardSection}>
                <p className={styles.cardTextHeading}>CARDHOLDER NAME</p>
                <p className={styles.cardTextHeading}>VALID THRU</p>
            </section>
            <section className={styles.cardSection}>
                <p className={styles.cardTextInfo}>{user}</p>
                <p className={styles.cardTextInfo}>{card.valid}</p>
            </section>
        </article>
    )
}

export default Card;