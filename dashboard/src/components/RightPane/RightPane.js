import "./RightPane.css"
import Productcard from "../productcard/productcard";
const RightPane = ({ headertext, buttonsymbol, buttontext, productCards, onButtonclick, }) => {

    let addproduct = () =>{
        onButtonclick();
    }

    let oncardclicked= (idfromcard) =>{
        console.log("kaart id" + idfromcard)
    }

    let productcardsTobeRenderd = productCards.map(product => {
        if (product.name === "placeholder") {
            return (
                <li key={product.id} className="producten__item">
                    <button onClick={addproduct} className="producten__button">{buttonsymbol || "*"}</button>
                    <p className="producten__text">{buttontext || "Lorem Ipsum"}</p>
                </li>
            );
        }

        return (
            <Productcard oncardclicked={oncardclicked} key={product.id} id={product.id} name={product.name} productimg={product.img}/>
        );

    });

    return (
        <section className="product__wrapper">
            <header className="header">
                <h1 className="header__h1">{headertext || "placeholder"}</h1>
            </header>
            <ul className="producten">
                {productcardsTobeRenderd}
            </ul>
        </section>
    )
}

export default RightPane