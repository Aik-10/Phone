import React from 'react';
import Data from '../../data.json';
import 'balloon-css';
import 'materialize-css';

import MessageBody from './MessageComponents';
import NewMessage from './NewMessage';
import MessageContact from './MessageContact';

class Messages extends React.Component {

    render() {
        return (
            <div id="Messages" className="Messages">
                <div className="messages">
                    <p id="message-title">Messages</p>
                    <i onClick={() => this.handleClick('back')} aria-label="Back" data-balloon-pos="left" className="normal material-icons">arrow_back</i>
                    <i onClick={() => this.handleClick('call')} aria-label="Call" data-balloon-pos="left" id="profile-buttons" className="large material-icons">call</i>
                    <i onClick={() => this.handleClick('write-message')} aria-label="New Message" data-balloon-pos="left" className="large material-icons">message</i>
                </div>
                <div className="input">
                    <i aria-label="Seacrh words" data-balloon-pos="right" onClick={() => this.handleClick('search')} className="large material-icons">search</i>
                    <input autoComplete='off' spellCheck='false' autoCorrect='off' onChange={this.Search} type="text" id="search-message" placeholder="Search" />
                </div>
                <div id="message-container">
                    { Data.messages.map((data, i) => {        
                        return (<MessageBody readed={data.readed} key={i} number={data.number} contact={data.contact} message={data.message} />); 
                    })}
                </div>
                <div id="profile-message">
                    <MessageContact title="Lentokone Fucl" number="0404184323" />
                </div>
                <NewMessage />
            </div>
        );
    }

    Search(event){
        let filter = ""
        if ( event !== "" ){
            filter = event.target.value.toLowerCase();
        }
        let nodes = document.getElementsByClassName('message');
        for (let i = 0; i < nodes.length; i++) {
            if (nodes[i].innerText.toLowerCase().includes(filter)) {
            nodes[i].style.display = "block";
            } else {
            nodes[i].style.display = "none";
            }
        }
    }

    handleClick(event) {
        if (event === 'search') document.getElementById("search-message").focus();
        if (event === 'write-message') {
            document.getElementById("message-new").style.display = 'block';
            document.getElementById("messagemsgnumber").focus();
        }
    }
}

export default Messages;