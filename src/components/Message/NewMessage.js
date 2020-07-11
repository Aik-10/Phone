import React from 'react';

class NewMessage extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            inputchars: 0,
            inputmaxchar: 250,
            messageNumber: '',
            messageNumberBool: false,
            messageMessage: '',
        };
        this.handleNumber = this.handleNumber.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
      return (
        <div id="message-new">
            <div className="header">
                <p>New Message</p>
                <i onClick={() => this.handleClick('close')} aria-label="Close" data-balloon-pos="left" className="large material-icons">close</i>
            </div>
            <input value={this.state.messageNumber} onChange={this.handleNumber} type="tel" pattern="[64][0-9]{9}" required="" maxLength="10" aria-required="true" id="messagemsgnumber" placeholder="4011084312" />
            <textarea autoComplete='off' spellCheck='false' autoCorrect='off' value={this.state.messageMessage} id="messageinput" maxLength={ this.state.inputmaxchar } onChange={this.handleNumber} placeholder="Message"></textarea>
            <p className="message-error"></p>
            <span id="characters-textarea">{ this.state.inputchars } / { this.state.inputmaxchar }</span>
            <div onClick={() => this.handleSubmit()} aria-label="Send Message" data-balloon-pos="left" className="bottom" id="new-massage-send">
                <p>SEND</p><i  className="large material-icons">send</i>
            </div>
        </div>
      );
    }
    handleClick(event) {
        if (event === 'close') document.getElementById("message-new").style.display = 'none';
    }
    handleSubmit(event) {

        let number = document.getElementById("messagemsgnumber").value;
        let message = document.getElementById("messageinput").innerHTML;
        console.log('number: ' + number + ", Message: "+ message);
        this.cleanNewMessage();
    }

    cleanNewMessage() {
        document.getElementById("messagemsgnumber").value = "";
        document.getElementById("messageinput").value = "";
        document.getElementById("messagemsgnumber").style.borderColor = "white";
        document.getElementById("message-new").style.display = "none";
        document.getElementById('new-massage-send').style.visibility = 'hidden';
        this.setState({messageMessage: ''});
        this.setState({messageNumber: ''});
        this.setState({messageNumberBool: false});
    }
    handleNumber(event) {
        if (event.target.id === "messagemsgnumber") {
            this.setState({messageNumber: event.target.value});
            if ((event.target.value).length === 10 ){
                document.getElementById("messagemsgnumber").style.borderColor = "green";
                this.setState({messageNumberBool: true });
            }else {
                document.getElementById("messagemsgnumber").style.borderColor = "red";
                this.setState({messageNumberBool: false });
            }
        }else if(event.target.id === "messageinput") {
            this.setState({messageMessage: event.target.value});
            document.getElementById('characters-textarea').innerHTML = (event.target.value).length + " / 250";   
        }
        if ( (document.getElementById('messageinput').value).length > 0 && (document.getElementById('messagemsgnumber').value).length === 10) {
            document.getElementById('new-massage-send').style.visibility = 'visible';
        }else {
            document.getElementById('new-massage-send').style.visibility = 'hidden';
        }
    }
}

export default NewMessage;