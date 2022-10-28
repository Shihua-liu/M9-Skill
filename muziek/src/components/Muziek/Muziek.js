import React from "react";
import Item from "../Item/Item"
import lijst from "../data/Muzieklijst"
import Input from "../Input/Input"

import "./Muziek.css"

class Muzieklijst extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            muziek: [],
        }
    };

 
    componentDidMount(){
        this.setState({
            muziek: lijst.muziek,
        });
    }

    update = () =>{
        let tempArray = this.state.muziek;
        let combinedarray = tempArray.concat([
            // {
            //     name: "todo",
            //     done: true,
            //     id:10,
            // },
            
        ]);
            this.setState({
                muziek: combinedarray,
            });
    
    };

    inputPressedEnter = (InputFromInputComponent) => {
        let tobeadded = [
            {
                name: InputFromInputComponent,
                done: false,
                id: this.state.muziek.lenght + 1
            }
            
        ]
       let mergedarray = this.state.muziek.concat(tobeadded)
        this.setState({
            muziek: mergedarray,
        })
    }


    render(){
        let Items = this.state.muziek.map(task => {
            return <Item name={task.name} key={task.id}></Item>
        });

        return(
        <article onClick={this.update} className="muziek">
            <header className="muziek__header">
                <h1 className="muziek__heading">{this.props.text}</h1>
            </header>
            <ul className="muziek__list">
            {Items}
            </ul>
            <Input inputPressedEnter={this.inputPressedEnter} />
        </article>
        );
     };
    
} 

export default Muzieklijst