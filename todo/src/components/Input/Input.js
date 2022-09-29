import React from "react"
import "./Input.css"

class Input extends React.Component{
    constructor(props){
        super(props);
        this.state = {inputValue: ""}
    }

    update = (event) =>{
       
        this.setState({inputValue: event.target.value})
    }

    enter = (event) =>{
        if(event.keyCode === 13){
            this.props.inputPressedEnter(this.state.inputValue);
        }
    }


// als we met ducumenget element of query werken in react is de component uncontrolled
    render(){
        return(
            <input onKeyUp={this.enter} onChange={this.update} value={this.state.inputValue} className="input" type="text" placeholder="Toevoegen" />
        )
    }
    
}

export default Input