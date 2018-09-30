import {createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from "redux";
// import adminPanelReducer from './AdminPanelReducer';
import reduxThunk from "redux-thunk";
// import reducers from './index';
import rootReducer from '../reducers/rootReducer';

// import dataReducer from "../reducers/dataReducer";
// import adminPanelReducer from '../reducers/AdminPanelReducer';


// const rootReducer = combineReducers({
//     dataReducer,
//     adminPanelReducer
//   });

// const store = createStore(rootReducer, applyMiddleware(reduxThunk));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(reduxThunk)));
export default store;


// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()