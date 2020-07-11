import React from 'react';
import { TwitterAlert } from '../Alert/Alert';
export const About = class About extends React.Component {
    
}
export const ConsoleCommands = (props) => {
    let str = props.split(" ");
    let command = str[0];
    if ( command === "alert-message" ) DrawAlertMessage(props);
    if ( command === "alert-twitter" ) DrawAlertTwitter(props);
};
const DrawAlertTwitter = (args, data) => {
    console.log("DrawAlertTwitter:" + args);
    TwitterAlert()
};
const DrawAlertMessage = (args) => {
    let pos = args.search("`");
    let res = args.slice(pos); res = res.replace(/`/g, '');
    let data = JSON.parse(res);
    console.log(pos, data);
    document.getElementById('alert-content').style.display = "block";
};