import "./Header.css"

const Header = (props) =>{
    return(
        <header class="header">
            <h1 class="header__h1">{props.BigTitle || "Default big title"}</h1>
            <h2 class="header__h2">{props.SmallTitle || "Default small title"}</h2>
            <button class="header__btn">{props.BtnText || "Button text"}</button>
        </header>
    );
}

export default Header;