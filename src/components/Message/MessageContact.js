import React from 'react';
// import Data from '../../data.json';
import 'balloon-css';

const MsgComponent = {
    Message: function Message(props) {
        return (
            <div className={props.type+"-message"}>
                <p>{ props.time }</p>
                <p className="msg">{ props.message }</p>
            </div>
        );
    },
    MessageHeader: function MessageFooter(props) {
        return (
            <div className="header">
                <i className='large material-icons'>person</i>
                <p>{ props.title }</p>
                <span aria-label="Copy" data-balloon-pos="down">{ props.number }</span>
            </div>
        );
    },
    MessageFooter: function MessageFooter(props) {
        return (
            <div className="footer">
                <input placeholder="Message" />
                <i onClick={() => this.handleClick('send')} aria-label="Send" data-balloon-pos="left" className="large material-icons">send</i>
            </div>
        );
    }
}

function MessageBody(props) {
    return (
        <div id="message">
            <MsgComponent.MessageHeader title={ props.title } number={props.number} />
            <div className="message-thread" id="message-thread">
                {/* { Data.messages.map((data, i) => {        
                    return (<MsgComponent.Message type="sended" time={data.time} message={data.message} />); 
                })} */}
            </div>
            <MsgComponent.MessageFooter />
        </div>
    );
}

export default MessageBody;