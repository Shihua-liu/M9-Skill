import "./productcard.css"

    

const productcard = (props) => {

    const productcardclicked = () =>{
        props.oncardclicked(props.id)
    }
    

    return ( <li  onClick={productcardclicked} className="producten__item producten__item--gray">
    <img className="product__img" src={props.productimg} alt={props.name} />
    <div className="product__fade">
     <p className="producten__imgtext">{props.name}</p>
    </div>
    
 </li> );
}
 
export default productcard;