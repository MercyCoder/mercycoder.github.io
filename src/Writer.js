import React from 'react';
import './Writer.css';

class Writer extends React.Component
{
        constructor(props){
        super(props);
        this.state = { 
            open: false,
            passage: ""
        }
    }

    Open = () => {
        if (this.state.open === false) {
            this.setState({ open: true, passage: "| For each the thought of nothing was what broke them." })
            console.log("HI")
        }
        else {
            this.setState({ open: false, passage: "" })
            console.log("BYE")      
        }
    }

    render(){
        return(
        <div className="dev" onClick={this.Open}>
        <div>Writer {this.state.passage}</div>
        </div>
        )
    }
}


export default Writer;