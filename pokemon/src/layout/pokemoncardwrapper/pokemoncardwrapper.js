import "./pokemoncardwrapper.css"
import PokemonCard from "../../components/PokemonCard/PokemonCard"

// dit zijn alle pokemon kaarten met de informatie erin. deze stuurt het naar de pokemoncard.js

function pokemoncardwrapper(props) {
    return (
        <section className="pokemoncardwrapper">
            <PokemonCard
                name="Ponyta" //pokemon naam
                type={["Fire"]} //pokemon types
                img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png" //pokemon foto
                hp="50" // hp van de pokemon
                updatecounter={props.updatecounter} // dit is er om de countercard uptedaten, van de catchbutton 
            />
            <PokemonCard
                name="Scyther"
                type={["Bug", "Flying"]}
                img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png"
                hp="70"
                updatecounter={props.updatecounter}
            />
            <PokemonCard
                name="Arceus"
                type={["Normal"]}
                img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/493.png"
                hp="120"
                updatecounter={props.updatecounter}
            />
            <PokemonCard
                name="Gardevoir"
                type={["Psychic", "Fairy"]}
                img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/282.png"
                hp="68"
                updatecounter={props.updatecounter}
            />
        </section>

    )
}

export default pokemoncardwrapper