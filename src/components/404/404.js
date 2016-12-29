import React, { Component } from 'react';
import './404.css';

class NOTFOUND extends Component {
  constructor(){
    super();
    this.state={
      
    };
  }

  render() {
    return (
      <div className="About">
        <div>
          <h3>Select this number</h3>
          <div>
            Not Found
          </div>
        </div>
      </div>
    ); 
  }
}

export default NOTFOUND;
