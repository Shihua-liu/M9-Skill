import "./Card.css";

const Card2 = () => {
    const hallo = () => {
        console.log("ik ben kaart 2");
    }
    return(
        <article onClick={hallo}>
            <header>
                <h2>tweede kaartje</h2>
            </header>  
            <section>
                blah blah blah
            </section>
        </article>
    );
}

export default Card2;