import React from 'react';
import { ConsoleCommands } from './Handler/Handler';

class Console extends React.Component {
  _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      ConsoleCommands(document.getElementById('consoleInput').value);
      document.getElementById('consoleInput').value = "";
    }
  }
  render() {
    return (
      <div className="console">
        <input type="text" id="consoleInput" onKeyDown={this._handleKeyDown}  placeholder="Console"/>
      </div>
    );
  }
}

export default Console;