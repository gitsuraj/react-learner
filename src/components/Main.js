import React, { Component } from 'react';
import {Link} from 'react-router';
import {Navbar} from 'react-bootstrap';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">React Learner</a>
            </Navbar.Brand>
          </Navbar.Header>
          <ul className="nav navbar-nav">
            <li role="presentation"><Link to="/">Home</Link></li>
            <li role="presentation"><Link to="/about">About</Link></li>
            <li role="presentation"><Link to="/bucket">Bucket</Link></li>
            <li role="presentation"><Link to="/books">Books</Link></li>
          </ul>
        </Navbar>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Main;
