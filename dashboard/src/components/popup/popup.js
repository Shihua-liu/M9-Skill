import React from "react";
import "./popup.css"

class popup extends React.Component {

    constructor(props) {
        super(props);
        this.state = { input: "" }
    }

    componentDidMount(){
       
        this.setState({ input: this.props.cardclicked.name})
        
        
    }

    input = (event) => {
        this.setState({input: event.target.value})
    }
    updateproducts = () =>{
        if(this.state.input !== ""){
            this.props.addbuttonclicked(this.state.input)
        }
        
    }

    render() {
        return (
            <article className="popup">
                <div className="popup__wrapper">
                    <label htmlFor="name" className="popup__label">Naam:</label>
                    <input onChange={this.input} value={this.state.input} type="text" className="popup__input" id="name" />
                </div>

                <button onClick={this.updateproducts} className="popup__button">Voeg toe</button>
            </article>

        );
    }
}

export default popup;
