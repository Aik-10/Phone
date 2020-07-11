import React from 'react';
import 'balloon-css';

class App extends React.Component {
  render() {
    return (
      <div id="Home" className="Home">
        <i aria-label="Contacts" data-balloon-pos="up-right" className="large material-icons">contacts</i>
        <i aria-label="Settings" data-balloon-pos="up" className="large material-icons">settings</i>
        <i onClick={() => this.handleClick('Messages')} aria-label="Messages" data-balloon-pos="up" className="large material-icons">message</i>
        <i aria-label="Mobile Bank" data-balloon-pos="up-left" className="large material-icons">monetization_on</i>
        <i aria-label="Radio" data-balloon-pos="up-right" className="large material-icons">music_note</i>
        <i aria-label="Calls" data-balloon-pos="up" className="large material-icons">local_phone</i>
      </div>
    );
  }

  handleClick(a) {
    if (a === 'Messages'){
      document.getElementById('Home').style.display = "none";
      document.getElementById('Messages').style.display = "block";
      document.getElementById('frame-wallpaper').style.background = 'rgb(44,49,66)';
    }
  }
}

export default App;