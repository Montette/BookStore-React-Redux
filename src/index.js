import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import Router from './components/Router/Router';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import store from './store/store';
import {loadBooks} from './actions/actions';

// store.dispatch(loadBooks())

ReactDOM.render(
<Provider store={store}>
    <Router/>
</Provider>,
document.getElementById('root')
);
registerServiceWorker();
