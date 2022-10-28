import "./PokemonCard.css"
import React from "react"

// pokemoncard is een react component
class PokemonCard extends React.Component {
    constructor(props) {
        super(props);
        // "start" met 0 hp, en zegt dat caugtorran nog false is, waardoor de attack en catch buttons er nog zijn
        this.state = { hp: 0, caughtorran: false, }
    }

    componentDidMount() {
        // haalt de hp van de pokemoncard prop in pokemoncardwrapper en zegt dat de hp verandert, dut moet updaten
        this.setState({ hp: this.props.hp })
    }

    attack = () => {
        // laat een random nummer kiezen tussen 31 en 1, wel een hele getal
        let random = Math.floor(Math.random() * (31 - 1) + 1)
        //random nummer haalt hij van de hp van de hoeveelheid dat de pokemon heeft en geeft hij terug 
        this.setState({
            hp: this.state.hp - random
        }, function () {
            if (this.state.hp <= 0) {
                this.setState({
                    hp: 0, caughtorran: true,
                    // als de hp 0 of lager is, halt hij de attack en catch button weg door naar true te zetten
                })
            }
        })
    }

    catch = () => {
        // catch button geclicked is, doet hij de buttons weg door de waarde op true te zetten en geeft hij een hoeveelheid % aan of je het wel of niet heb gevangen. als de % hoger is dan de "dice" is, vang je de pokemon en dan geeft hij het terug aan de App.js en doet de App.js +1 op de counter
        this.setState({ caughtorran: true });
        let damagepro = 100 - Math.floor(this.state.hp / this.props.hp * 100)
        let dice = Math.floor(Math.random() * (100 - 1) + 1)
        if (damagepro >= dice) {
            this.props.updatecounter();
        }
    }

    render() {
        // geeft de classe naam en de type door de array af te gaan in de type prop dat is doorgegeven van de pokemonwrapper
        let types = this.props.type.map(function (type) {
            return <span key={type} className={`pokemoncard__type pokemoncard__type--${type}`}>{type}</span>
        })
        let btn = null
        //buttons gaan weg door de waarde op 0 te zetten
        if (this.state.caughtorran === false) {
            //zolang de cauthorran false is, laat hij  de buttons zien 
            btn =
                <>
                    <button onClick={this.attack} className="pokemoncard__button pokemoncard__button--attack">attack</button>
                    <button onClick={this.catch} className="pokemoncard__button pokemoncard__button--catch">catch</button>
                </>
        }

        return (
            <article className="pokemoncard">
                <header className="pokemoncard__header">
                    {/* pokemon naam */}
                    <h2 className="pokemoncard__title">{this.props.name}</h2>
                    <div className="pokemoncard__labelwrapper">
                        {/* pokemontypes */}
                        {types}
                    </div>

                </header>
                <section className="pokemoncard__section">
                    <figure className="pokemoncard__figure">
                        {/* pokemon foto */}
                        <img src={this.props.img} alt="" className="pokemoncard__image" />
                    </figure>
                    <div className="pokemoncard__h3wrapper">
                        {/* pokemon hp */}
                        <h3 className="pokemoncard__hp">{this.state.hp}</h3>
                    </div>

                </section>
                <footer className="pokemoncard__footer">
                        {/* attack en catch button */}
                    {btn}
                </footer>

            </article>
        );
    }
}
export default PokemonCard;