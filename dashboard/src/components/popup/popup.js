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
    addproducts = () =>{
        if(this.state.input !== ""){
            this.props.addbuttonclicked(this.state.input)
        }
        
    }

    editproducts = () =>{
        this.props.editbuttonclicked(this.state.input)
    }

    render() {
        let button = <button onClick={this.addproducts} className="popup__button">Voeg toe</button>
            if(this.props.editmode === true){
                button = <button onClick={this.editproducts} className="popup__button">Edit</button>
            }
        return (
            <article className="popup">
                <div className="popup__wrapper">
                    <label htmlFor="name" className="popup__label">Naam:</label>
                    <input onChange={this.input} value={this.state.input} type="text" className="popup__input" id="name" />

                    
                </div>

                {button}
            </article>

        );
    }
}

export default popup;
