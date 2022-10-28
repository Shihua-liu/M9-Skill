import "./App.css"
import React from "react"
import Pokemoncardwrapper from "../../layout/pokemoncardwrapper/pokemoncardwrapper"
import Countercard from "../../components/countercard/countercard"
class App extends React.Component {
    constructor() {
        super();
        this.state = { counter: 0 }
        // zegt dat de counter 0 is omdat je 0 pokemons heb gevangen
    }
    updatecounter = () => {
        // als je 1 heb gevangen geeft de pokemoncard het door naar hier, en geeft het + 1
        this.setState({counter: this.state.counter + 1});
    }
    render() {
        return (
            <main className="main">
                {/* geeft door dat de counter 0 is, totdat er 1 gevangen is */}
                <Pokemoncardwrapper updatecounter={this.updatecounter} />
                {/* geeft door aan de counter hoeveel er gevangen is */}
                <Countercard counter = {this.state.counter}/>
            </main>

        )
    }

}

export default App