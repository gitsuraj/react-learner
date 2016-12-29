import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      celsius:0
    };
    this.handleChange=this.handleChange.bind(this);
  }
  handleChange(e){
    this.setState({celsius: e.target.value});
  }
  checkBoil(prevState){
    if (prevState<100) {
      return(<span>not</span>)
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React Temperature converter</h2>
        </div>
        <div className="App-intro">
          <input type="number" onChange={this.handleChange} value={this.state.value}/>
          <Check temp={this.state.value}/>
        </div>
      </div>
    );
  }
}

class Check extends Component{
  render(){
    if(this.props.temp<100){
      return(<p>Water will not boil</p>);
    }
    return(<p>Water will boil</p>)
  }

}

export default App;
