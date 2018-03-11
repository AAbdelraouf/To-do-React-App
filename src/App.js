import React, { Component } from 'react';
import fire from './fire';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', arrayOfValues:[] }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    fire.database().ref('React App').push(this.state.value );
    this.setState({ value:'' });
    event.preventDefault();
  }

  componentWillMount(){
    let messagesRef = fire.database().ref('React App').orderByKey().limitToLast(100);
      messagesRef.on('child_added', snapshot => {
        let message = { text: snapshot.val(), id: snapshot.key };
        var pushOnthatArray = this.state.arrayOfValues
        pushOnthatArray.push(message)
        this.setState({ arrayOfValues: pushOnthatArray });
    })
  }
  render() {
    return (
      <div>
        <h1 style={welcomeTextStyle} >Welcome to React To-DOs</h1>
      <form onSubmit={this.handleSubmit} style={formStyle} >
        <input style={inputStyle} type="text" placeholder="Enter note here" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Submit" style={submitButton} />
      </form>
      <p>{this.state.arrayOfValues.map((orgainzeNotes)=> <ul style={liStyling} key={orgainzeNotes.id} >{orgainzeNotes.text}</ul>)}</p>
      </div>
    );
  }
} 
 
export default App;

const welcomeTextStyle={
  color:'lightgreen',
  position:'relative',
  marginTop:'5%',
  left:'32%'
}

const formStyle={
  width:'50%',
  position:'relative',
  left:'7%',
  marginTop:'10%',
  color: 'green',
  display: 'inline-block',
  fontsize: '32px',
  
}

const inputStyle = {
  fontSize:'20px',
  width:'70%',
  position:'relative',
  left:'37.8%',
  height:'40px',
  border: '1px solid green',
  textAlign: 'left',
}

const submitButton={
  width:'10%',
  color:'green',
  fontWeight:'bold',
  position:'relative',
  bottom:'4px',
  left:'37.6%',
  height:'44px',
  border: '1px solid green',
  backgroundColor:'lightgreen'
}

const liStyling={
  position:'relative',
  left:'26%',
  width:'38.6%',
  color:'green',
  border: '1px solid lightgreen',
  marginTop:'10px',
  padding:'10px'
}
