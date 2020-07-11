import React from 'react';
export const Alert = class Alert extends React.Component {
  render() {
    return (
      <div id="alert-content">
        <div className="header">
          <i aria-label="Todey 17.24" data-balloon-pos="right" className="large material-icons">error</i>
          <h6 aria-label="Open" data-balloon-pos="down" className="large material-icons icons">TWITTER</h6>
          <i onClick={this.handleClick} aria-label="Close" data-balloon-pos="left" className="large material-icons close">close</i>
        </div>
        <p></p>
      </div>
    );
  }
  handleClick(props){
    document.getElementById('alert-content').style.display = "none";
    console.log("props.target.closed");
  }
}

export const TwitterAlert = (props) => {
  console.log("TimeMs");
};


