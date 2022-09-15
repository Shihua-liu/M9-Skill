import "./Card.css";

const Card1 = () => {
    const hallo = () => {
            console.log("ik ben kaart 1");
        }
    return(
        

        <article onClick={hallo}>
            <header>
                <h2>Eerste kaartje</h2>
            </header>  
            <section>
                blah blah blah
            </section>
        </article>
    );
}

export default Card1;