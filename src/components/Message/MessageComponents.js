import React from 'react';
import 'balloon-css';

const MyComponents = {
    Message: function Message(props) {
        return (
            <div data-title={props.title} id="message" className='message'>
                <i className='large material-icons'>person</i>
                <div className='msg-content'>
                    <p>{props.title}</p>
                    {/* <i class='normal material-icons'>reply</i> */}
                    <span data-balloon-length='medium' aria-label={props.message} data-balloon-pos='down' id='msg-message'>{props.messageParse}</span>
                </div>
            </div>
        );
    },
    MessageUnreaded: function MessageUnreaded(props) {
        return (
          <div id="message" className='message unreaded' style={{ background: '#505567' }}>
              <i className='large material-icons'>person</i>
              <div className='msg-content'>
                  <p>{props.title}</p>
                  {/* <i class='normal material-icons'>reply</i> */}
                  <span data-balloon-length='medium' aria-label={props.message} data-balloon-pos='down' id='msg-message'>{props.messageParse}</span>
              </div>
          </div> 
        );
    }
}

function MessageBody(props) {
    let parseMSG, Contact = props.number;
    if (props.contact !== "") Contact = props.contact;
    if ((props.message).length > 20) {
        parseMSG = (props.message).substring(0, 20);
    }else {
        parseMSG = props.message;
    }
    if (props.readed === false) {
        return <MyComponents.Message title={ Contact } message={props.message} messageParse={ parseMSG } />;
    }else {
        return <MyComponents.MessageUnreaded title={ Contact } message={props.message} messageParse={ parseMSG } />;
    }
}

function LoadMessages(event) {
    console.log(event.target)
}

export default MessageBody;