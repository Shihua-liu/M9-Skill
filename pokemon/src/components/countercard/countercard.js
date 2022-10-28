import "./countercard.css"

function countercard({counter}) {
    return (
        // count de hoeveelheid dat het vangt
        <section className="countercard">
            <h2 className="countercard__h2">{counter}</h2>
        </section>
    )
}

export default countercard