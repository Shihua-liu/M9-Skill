import React from "react"



class Item extends React.Component{
    constructor(props){
        super(props);
        this.className = "";
        this.state = {done: this.props.done}
    }    

    onItemClick = () =>{
        this.setState({done: !this.state.done});
        
    }
    render(){
        if(this.state.done){
            this.className = "muziek__item muziek__item--done"
        }
        else{
            this.className = "muziek__item"
        }
        
        return(
            <li onClick={this.onItemClick} className={this.className}>{this.props.name}</li>
        )
    }
           
}

export default Item;