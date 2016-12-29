import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './routes';
import {browserHistory} from 'react-router';

import './resources/css/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render(
  <Routes history={browserHistory} />,
  document.getElementById('root')
);
