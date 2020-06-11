import React from 'react';
import './Developer.css';

class Player extends React.Component
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
            this.setState({ open: true, gitLink: " ----------------------------------------------> <if (!joke) {this.inside = joke}" })
        }
        else {
            this.setState({ open: false, gitLink: "" })
        }
    }

    render(){
        return(
        <div className="dev" onClick={this.Open}>
        <div>Comedian {this.state.gitLink}</div>
        </div>
        )
    }
}


export default Player;