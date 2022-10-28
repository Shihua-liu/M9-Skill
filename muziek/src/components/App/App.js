import "./App.css"

import Muzieklijst from "../Muziek/Muziek"

const App = () =>{


    return(
        <>
            <Muzieklijst text="phonk"/>
            <Muzieklijst text="rap"/>
            <Muzieklijst text="jazz"/>
            <Muzieklijst text="rock"/>
            <Muzieklijst text="metal"/>
        </>
    );
}

export default App;