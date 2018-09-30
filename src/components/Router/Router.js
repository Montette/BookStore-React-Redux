import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import AdminPanel from '../AdminPanel/AdminPanel';
import PageNotFound from '../PageNotFound/PageNotFound';
import App from '../../containers/App';
// import {Provider} from 'react-redux';
// import store from '../../store/store';


const Router = (props) => {
    
    return (
        // <Provider store={store}>
            <BrowserRouter>
            <div>
            <Header/>
            <Switch>
                <Route exact path='/' component={App}/>
                <Route path='/admin' component={AdminPanel}/>   
                <Route  component={PageNotFound}/>  
            </Switch>   
            </div>
        </BrowserRouter> 
    //   </Provider>
    );
}

export default Router;