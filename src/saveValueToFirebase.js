import React, { Component } from 'react';
// import ReactDom from 'react-dom'
import App from './App'
import fire from './fire'

class SaveValueToFirebase extends React.Component{
    render(){
        return(
            <div><h1>{this.props.SaveData}</h1></div>
        )   
    }
}
export default SaveValueToFirebase;
