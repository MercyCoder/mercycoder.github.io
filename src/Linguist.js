import React from "react";
import "./Linguist.css";

class Linguist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      gitLink: ""
    };
  }

  Open = () => {
    if (this.state.open === false) {
      this.setState({
        open: true,
        gitLink: (
          <span>
            <span className="space">From sentence structures of sign language</span>
            <div className="asl">
              to how old world languages influence computer programming––
            </div>
            <div className="asl">I am fascinated by how words work.</div>
            <div className="asl">
              In American Sign Language there is a superlative that is usually
              signed too fast for hearing people to see.
            </div>
            <div className="asl">
              In programming we use the word <em>await.</em>
            </div>
          </span>
        )
      });
    } else {
      this.setState({ open: false, gitLink: "" });
    }
  };

  render() {
    return (
      <div className="dev" onClick={this.Open}>
        <div>Linguist {this.state.gitLink}</div>
      </div>
    );
  }
}

export default Linguist;
