import "./RightPane.css"

const RightPane = ({ headertext, buttonsymbol, buttontext, productCards, onButtonclick }) => {

    let addproduct = () =>{
        onButtonclick();
    }

    let productcardsTobeRenderd = productCards.map(product => {
        if (product.name === "placeholder") {
            return (
                <li className="producten__item">
                    <button onClick={addproduct} className="producten__button">{buttonsymbol || "*"}</button>
                    <p className="producten__text">{buttontext || "Lorem Ipsum"}</p>
                </li>
            );
        }
        return (<li className="producten__item">
           <img className="product__img" src={product.img} alt={product.name} />
           <div className="product__fade">
            <p className="producten__imgtext">{product.name}</p>
           </div>
           
        </li>);

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