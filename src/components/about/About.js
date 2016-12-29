import React, { Component } from 'react';
import './About.css';

class About extends Component {
  constructor(){
    super();
    this.state={
      inputNumber:[1,2,3,4,5],
      outputNumber:[]
    };
  }

  unselectNumber(number){
    if(this.state.outputNumber.indexOf(number)>=0){
      this.setState({inputNumber: this.state.inputNumber.concat(number)});
      this.state.outputNumber.splice(this.state.outputNumber.indexOf(number),1)
      this.setState({outputNumber: this.state.outputNumber});
    }

  }

  selectNumber(number){
    let numbers=this.state.inputNumber;
    let indexOfNumber=numbers.indexOf(number);
    
    this.setState({outputNumber: this.state.outputNumber.concat(number)});
    numbers.splice(indexOfNumber,1);
    this.setState({inputNumber: numbers});
  }

  inputNumberMapper(key,value){
    return(
          <span className="selectNumber" key={key} onClick={()=>this.selectNumber(value)}>
      {value}
      </span>
      );
  }

   outputNumberMapper(key,value){
    return(
          <span className="selectNumber" key={key} onClick={()=>this.unselectNumber(value)}>
      {value}
      </span>
      );
  }

  render() {
    return (
      <div className="About">
        <div>
          <h3>Select this number</h3>
          <div>
             {this.state.inputNumber.map((num,index)=>this.inputNumberMapper(index,num))}
          </div>
        </div>
        <div className="result">
          <h3>Results</h3>
          <div>
            {this.state.outputNumber.map((num, index)=>this.outputNumberMapper(index,num))}
          </div>
        </div>
      </div>
    ); 
  }
}

export default About;
