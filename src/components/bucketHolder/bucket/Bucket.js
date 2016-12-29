import React, { Component } from 'react';
import { ListGroup,ListGroupItem } from 'react-bootstrap';
class Bucket extends Component {
  constructor(){
    super();
    this.renderBucketItem = this.renderBucketItem.bind(this);
  }

  renderBucketItem (item,key){
    return(
      <ListGroupItem key={key} onClick={()=>this.props.moveToNextBucket(item,key)}>{item}</ListGroupItem>
    );
  }
  render() {
    return (
      <div className="buket-element">
        <ListGroup>
          {this.props.items && this.props.items.map((item,key)=>this.renderBucketItem(item,key))}
        </ListGroup>
      </div>
    );
  }
}

export default Bucket;
