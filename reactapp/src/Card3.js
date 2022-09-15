import "./Card.css";

const Card3 = () => {
    const hallo = () => {
        console.log("ik ben kaart 3");
    }

    return(
        <article onClick={hallo}>
            <header>
                <h2>derde kaartje</h2>
            </header>  
            <section>
                blah blah blah
            </section>
        </article>
    );
}

export default Card3;