import { useLocation } from "react-router-dom";

const Header = () => {
    let location = useLocation();

    return (
        <header>
            {location.pathname == '/cards' ?
                <h1>E-WALLET</h1> :
                <h1>ADD A NEW CARD</h1>
            }
        </header>
    )
}

export default Header;