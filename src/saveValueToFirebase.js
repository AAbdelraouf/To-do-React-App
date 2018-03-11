import React, { Component } from 'react';
import App from './App'
import fire from './fire'
class saveValueTpFirebase extends Component{
    render(){
        return(
            <div><h1> Hello {this.props.saveData.map((i)=> <li key={i}>{i}</li> )}</h1></div>
        )   
    }
}
export default saveValueTpFirebase;