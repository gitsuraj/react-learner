import React from 'react';
import App from './components/app/App';
import About from './components/about/About';
import NOTFOUND from './components/404/404';
import Books from './components/Books/Books';
import Main from './components/Main'
import BucketHolder from './components/bucketHolder/BucketHolder'
import {Route, Router, IndexRoute} from 'react-router';


const Routes=(props)=>(
	<Router {...props}>
		<Route path="/" component={Main}>
			<IndexRoute component={App} />
			<Route path="about" component={About} />
			<Route path="bucket" component={BucketHolder} />
			<Route path="books" component={Books} />
			<Route path="*" component={NOTFOUND} />
		</Route>
	</Router>
	);

export default Routes;
