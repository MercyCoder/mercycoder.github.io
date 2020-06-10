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
    let asl = <span className="asl"> HII</span>;
    if (this.state.open === false) {
      this.setState({ open: true, gitLink: asl });
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
