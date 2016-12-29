import React, { Component } from 'react';
import Bucket from './bucket/Bucket';
import _ from 'lodash';
import Helmet from "react-helmet";
import {Col,Grid,Row} from 'react-bootstrap';
class BucketHolder extends Component {
  constructor(){
    super();
    this.state={
      item1:[1,2,3,4,5],
      item2:[6,7,8,9,10]
    };
    this.moveToNextBucket = this.moveToNextBucket.bind(this);
  }

  moveToNextBucket(item,index){
    let item1 = _.cloneDeep(this.state.item1);
    let item2 = _.cloneDeep(this.state.item2);
    if(item1.indexOf(item) !== -1){
      item1.splice(index,1);
      item2.splice(index, 0, item);
    }else{
      item2.splice(index,1);
      item1.splice(index, 0, item);
    }
    item1 = _.sortBy(item1,(i)=> i);
    item2 = _.sortBy(item2,(i)=> i);
    this.setState({item1:item1,item2:item2});
  }
  render() {
    return (
      <div className="buket-container">
        <Helmet title="Bucket Sorting page" />
        <Grid>
          <Row>
              <Col md={6} mdPush={6} >
                <Bucket items={this.state.item1} moveToNextBucket={this.moveToNextBucket}/>
              </Col>
              <Col md={6} mdPull={6} >
                <Bucket items={this.state.item2} moveToNextBucket={this.moveToNextBucket}/>
              </Col>
            </Row>
          </Grid>
      </div>
    );
  }
}

export default BucketHolder;
