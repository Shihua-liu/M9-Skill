import "./Card.css";

const Card1 = (props) => {
    console.log(props);
    return(

        <article onClick={props.muisclick}>
            <header>
                <h2>{props.title || "mijn eigen titel"}</h2>
            </header>  
            <section>
                <p>{props.text || "kekw"}</p>
            </section>
        </article>
    );
}

export default Card1;