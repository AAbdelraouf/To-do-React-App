import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import fire from './fire';
import SaveValueToFirebase from './SaveValueToFirebase'

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
    var changeColor = document.getElementById('ulId')
    // Using findDOMnode method //
    ReactDOM.findDOMNode(changeColor).style.color = 'green'
    // Push data to firebase //
    fire.database().ref('React App').push(this.state.value );
    this.setState({ value:'' });
    // Usinf ref method //
    ReactDOM.findDOMNode(this.refs.myInput).focus();
    event.preventDefault();
  }


  // Pull data from firebase before the component mounts //
  componentWillMount(){
    let messagesRef = fire.database().ref('React App').orderByKey().limitToLast(100);
      messagesRef.on('child_added', snapshot => {
        let message = { text: snapshot.val(), id: snapshot.key };
        var pushOnthatArray = this.state.arrayOfValues
        pushOnthatArray.push(message)
        this.setState({ arrayOfValues: pushOnthatArray });  
    })}


  render() {
    return (
      <div>
        <h1 id="ulId" style={welcomeTextStyle} >Welcome to React To-DOs</h1>
      <form onSubmit={this.handleSubmit} style={formStyle} >
        <input ref = "myInput" style={inputStyle} type="text" placeholder="Enter note here" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Submit" style={submitButton} />
      </form>
       <SaveValueToFirebase SaveData={this.state.arrayOfValues.map((orgainzeNotes)=> <ul style={liStyling} key={orgainzeNotes.id} >{orgainzeNotes.text}</ul>)}/> 
       {/* <SaveValueToFirebase SaveDate={this.state.arrayOfValues} /> */}
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

// import React, { Component } from 'react';
// import ReactDOM from 'react-dom'


// class App extends Component{

// constructor(props){
//   super(props);
//   this.state={
//     inputValue:'',
//     arrayOfValues:[]
//   }
// }


// handleInputValue(ebent){
// this.setState({ inputValue: ebent.target.value })};

// handSubmit(event){
//   var arrayFromState = this.state.arrayOfValues
//   arrayFromState.push(this.state.inputValue)
//   this.setState({
//     inputValue:'',
//     arrayOfValues:arrayFromState
//   })
//   ReactDOM.findDOMNode(this.refs.inputBox).focus()
//   event.preventDefault();
// }

//   render(){
//     return (
//       <div>
//         <form>
//           <input type="text" ref ='inputBox' value={this.state.inputValue} onChange={this.handleInputValue.bind(this)}  />
//           <input type="submit" value="Submit" onClick={this.handSubmit.bind(this)} />
//         </form>
//               <SecondCompo  dataFromSecondCompo = {this.state.arrayOfValues.map((i,e)=> <li key={e}>{i}</li> )} />
        
//         </div>
//     )
//   }
// }




// class SecondCompo extends React.Component {
//   clickFromChildComponent(){
//     alert('You clicked me')
//   }
//   constructor(props) {
//     super(props);
//     this.state = {  }
//   }
//   render() { 
//     return ( <div><h1>{this.props.dataFromSecondCompo}</h1></div> )
//   }
// }


// export default App;



