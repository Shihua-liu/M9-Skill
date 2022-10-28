const placeholder = (props) =>{

    const placeholderclicked = () =>{
        props.oncardclicked(props.id)
    }
    return (
        <li className="producten__item">
                    <button onClick={placeholderclicked} className="producten__button">{props.buttonsymbol || "*"}</button>
                    <p className="producten__text">{props.buttontext || "Lorem Ipsum"}</p>
                </li>
    )
}

export default placeholder