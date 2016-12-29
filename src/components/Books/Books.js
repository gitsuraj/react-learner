import React, { Component } from 'react';
import {Col,Grid,Row,ListGroup,ListGroupItem} from 'react-bootstrap';
import {get} from "../../utils/httpUtils"
import _ from 'lodash';

class Books extends Component {
  constructor(){
    super();
    this.state={
      books : []
    };
  }

  renderBooksListing(book,key){
    return(
      <ListGroupItem key={key} >{book.title}</ListGroupItem>
    );
  }

  noBookFound(){
    return(
      <ListGroupItem>No Book Found</ListGroupItem>
    )
  }

  componentDidMount(){
    get('/books.json').then(response=>{
      this.setState({books:response.data});
    }).catch(error=>{
      console.log("error",error);
    });
  }

  render() {
    return (
      <div className="Books">
        <Grid>
          <Row>
            <Col md={12}>
              <h3>Listing of Books</h3>
              <ListGroup>
                {_.isEmpty(this.state.books)?this.noBookFound(): this.state.books.map((book,key)=>this.renderBooksListing(book,key))}
              </ListGroup>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Books;
