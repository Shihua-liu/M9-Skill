import "./RightPane.css"
import Placeholder from "../placeholder/placeholder";
import Productcard from "../productcard/productcard";
const RightPane = ({ headertext, buttonsymbol, buttontext, productCards, onButtonclick, onproductcardclicked}) => {


    let oncardclicked= (idfromcard) =>{
        
        onproductcardclicked(idfromcard)
    }

    let productcardsTobeRenderd = productCards.map(product => {
        if (product.name === "placeholder") {
            return <Placeholder id={product.id} oncardclicked={oncardclicked} buttonsymbol="+"  buttontext="voeg product toe" />
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