import "./LeftPane.css"

const LeftPane = ({ navitems, btntxt }) => {

    let toberendered = navitems.map(object => {

        let msg = null
        if (object.msg > 0) {
            msg = <div className="nav__msg">{object.msg}</div>
        }
        return (
            <li key={object.name} className="nav__li">
                <a href="" className="nav__a">{object.name}{msg}</a>
                
            </li>
        )
    })
    return (

        <section className="dashboard__wrapper">
            <nav className="nav">
                <ul className="nav__ul">
                    {toberendered}
                </ul>

            </nav>
            <button className="nav__btn">{btntxt || "Do it LMAO"}</button>
        </section>


    )
}

export default LeftPane