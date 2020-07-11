import React from 'react';
import Data from '../../data.json';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          hour: new Date().getHours(),
          minutes: new Date().getMinutes(),
          seconds: new Date().getSeconds()
        };
    }
    componentDidMount() {
      document.getElementById('identifier').innerHTML = "#"+Data.source;
      this.intervalID = setInterval(
        () => this.tick(),
        1000
      );
    }
    componentWillUnmount() {
      clearInterval(this.intervalID);
    }

    addZero(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    }

    tick() {
      this.setState({
        hour: new Date().getHours(),
        minutes: new Date().getMinutes(),
        seconds: new Date().getSeconds()
      });
    }
    
    render() {
      return (
        <div id="frame-topbar">
            <p id="time">{ this.addZero(this.state.hour) }:{ this.addZero(this.state.minutes) }:{ this.addZero(this.state.seconds) }</p>
            <p id="identifier">#23</p>
            <div className="icons">
                <i className="large material-icons">https</i>
                <i className="large material-icons">battery_full</i>
            </div>
        </div>
      );
    }
}

export default Footer;