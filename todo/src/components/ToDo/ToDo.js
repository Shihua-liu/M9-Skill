import React from "react";
import Item from "../Item/Item"
import tasksObject from "../data/task"
import Input from "../Input/Input"

import "./ToDo.css"

class ToDo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            tasks: [],
        }
    };

 
    componentDidMount(){
        this.setState({
            tasks: tasksObject.tasks,
        });
    }

    update = () =>{
        let tempArray = this.state.tasks;
        let combinedarray = tempArray.concat([
            // {
            //     name: "todo",
            //     done: true,
            //     id:10,
            // },
            
        ]);
            this.setState({
                tasks: combinedarray,
            });
    
    };

    inputPressedEnter = (InputFromInputComponent) => {
        let tobeadded = [
            {
                name: InputFromInputComponent,
                done: false,
                id: this.state.tasks.lenght + 1
            }
            
        ]
       let mergedarray = this.state.tasks.concat(tobeadded)
        this.setState({
            tasks: mergedarray,
        })
    }


    render(){
        let Items = this.state.tasks.map(task => {
            return <Item name={task.name} key={task.id}></Item>
        });

        return(
        <article onClick={this.update} className="todo">
            <header className="todo__header">
                <h1 className="todo__heading">Things to do:</h1>
            </header>
            <ul className="todo__list">
            {Items}
            </ul>
            <Input inputPressedEnter={this.inputPressedEnter} />
        </article>
        );
     };
    
} 

export default ToDo