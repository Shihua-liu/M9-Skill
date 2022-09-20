import "./Card.css"

const Card = (props) => {
    let cardImage = <img src={"/images/" + props.image} alt=""/>

    if(props.image === undefined){
        cardImage = <img src={"/images/koffie1.jpg"} alt=""/>;
    }

    return(
        <article class="card">
            <figure class="card__figure">
                {cardImage}
                
            </figure>
            <section class="card__div">
                <p>{props.text || "dummy text"}</p>
            </section>
        </article>
    );
}

export default Card;