import "./App.css"

import React from "react"
import { Route, Switch } from "react-router-dom"

import Intro from "../Intro/Intro";
import Outro from "../Outro/Outro";
import Questionsrouter from "../questionsrouter/questionsrouter";




class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { Qena: [] }
    }
    onLast = (newQena) => {
        this.setState ({ Qena: newQena }) 
    }
    render() {


        return (
            <>
                <Switch >
                    <Route path="/vraag/:number">
                        <Questionsrouter onLast={this.onLast}></Questionsrouter>
                    </Route>
                    <Route path="/outro">
                        <Outro Qena={this.state.Qena}></Outro>
                    </Route>
                    <Route path="/">
                        <Intro></Intro>
                    </Route>

                </Switch>
            </>
        );
    }
}

export default App;