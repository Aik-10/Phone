import React from 'react';
import Data from '../../data.json';

class Footer extends React.Component {
    componentDidMount() {
        if ( Data.notification === false ) {
            document.getElementById('notifications-icon').innerHTML = "notifications_off";
        }else {
            document.getElementById('notifications-icon').innerHTML = "notifications";
        }

        if ( Data.theme === false ) {
            document.getElementById('theme-icon').innerHTML = "brightness_2";
        }else {
            document.getElementById('theme-icon').innerHTML = "brightness_6";
        }

        if ( Data.audio === false ) {
            document.getElementById('volume-icon').innerHTML = "volume_off";
        }else {
            document.getElementById('volume-icon').innerHTML = "volume_up";
        }
    }
    render() {
      return (
        <div id="frame-bottom-buttons">
            <i onClick={() => this.handleClick("notifications-icon")} id="notifications-icon" className="normal material-icons">notifications</i>
            <i onClick={() => this.handleClick("theme-icon")} id="theme-icon" className="normal material-icons">brightness_6</i>
            <i onClick={() => this.handleClick("home")} className="large material-icons">panorama_fish_eye</i>
            <i onClick={() => this.handleClick("rotate")} className="normal material-icons">screen_rotation</i>
            <i onClick={() => this.handleClick("volume-icon")} id="volume-icon" className="normal material-icons">volume_off</i>
        </div>
      );
    }
    handleClick(e) {
        if (e === 'notifications-icon'){
            if (document.getElementById('notifications-icon').innerHTML === 'notifications'){
                document.getElementById('notifications-icon').innerHTML = "notifications_off";
                Data.notification = false;
            }else {
                document.getElementById('notifications-icon').innerHTML = "notifications";
                Data.notification = true;
            }
        }
        if (e === 'theme-icon'){
            if (document.getElementById('theme-icon').innerHTML === 'brightness_6'){
                document.getElementById('theme-icon').innerHTML = "brightness_2";
                Data.theme = false;
            }else {
                document.getElementById('theme-icon').innerHTML = "brightness_6";
                Data.theme = true;
            }
        }
        if (e === 'volume-icon'){
            if (document.getElementById('volume-icon').innerHTML === 'volume_off'){
                document.getElementById('volume-icon').innerHTML = "volume_up";
                Data.theme = false;
            }else {
                document.getElementById('volume-icon').innerHTML = "volume_off";
                Data.theme = true;
            }
        }

        if ( e === 'rotate') {
            console.log("Pirkka ROTATE");
        }
        if ( e === 'home') {
            document.getElementById('Home').style.display = "block";
            document.getElementById('Messages').style.display = "none";
            document.getElementById('frame-wallpaper').style.background = null;
        }
    }
}

export default Footer;