import React from 'react';
import './Developer.css';

class Developer extends React.Component
{
        constructor(props){
        super(props);
        this.state = { 
            open: false,
            gitLink: ""
        }
    }

    Open = () => {
        if (this.state.open === false) {
            this.setState({ open: true, gitLink: <a className="github" target="_blank" href="https://github.com/MercyCoder"> | GitHub</a> })
            console.log("HI")
        }
        else {
            this.setState({ open: false, gitLink: "" })
            console.log("BYE")      
        }
    }

    render(){
        return(
        <div className="dev" onClick={this.Open}>
        <div>Developer {this.state.gitLink}</div>
        </div>
        )
    }
}


export default Developer;