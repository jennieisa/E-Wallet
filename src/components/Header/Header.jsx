import styles from './header.module.css';

import { useLocation } from "react-router-dom";

const Header = () => {
    let location = useLocation();

    return (
        <header>
            {location.pathname === '/cards' ?
                <h1 className={styles.heading}>E-WALLET</h1> :
                <h1 className={styles.heading}>ADD A NEW CARD</h1>
            }
        </header>
    )
}

export default Header;