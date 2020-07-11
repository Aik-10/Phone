import React from 'react';
import 'balloon-css';

/* Sites */
import App from './App';
import Messages from './Message/Messages';

/* Component */
import { Alert } from './Alert/Alert';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            default: 'Messages',
        };
    }
    componentDidMount() {
        if (this.state.default !== 'Home'){
            document.getElementById('frame-wallpaper').style.background = 'rgb(44,49,66)';
        }
        document.getElementById(this.state.default).style.display = "block";
    }

    render() {
        return (
            <div id="frame-content">
                <Alert />
                <App />
                <Messages />
            </div>
        );
    }
}

export default Content;