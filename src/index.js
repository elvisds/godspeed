import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './includes/css/bootstrap.min.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Router, Route, browserHistory } from 'react-router'

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
        </Route>
    </Router>, document.getElementById('root'));
registerServiceWorker();
