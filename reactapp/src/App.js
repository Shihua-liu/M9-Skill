import Card1 from "./Card1"

import "./App.css";

const App = () => {
    const click = () =>{
        console.log("click!");
    }

    const random = () => {
        console.log( Math.random());
    }

    const som = () => {
        console.log (872 * 123);
    } 
    return(
        <>
            <Card1 muisclick={click} title="man im done"/>
            <Card1 muisclick={random} text="bruh"/>
            <Card1 muisclick={som} title="damn" text="bruf kek"/>
            
        </>
    
    );
}

export default App;