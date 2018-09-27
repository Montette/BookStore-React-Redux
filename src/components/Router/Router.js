import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import AdminPanel from '../AdminPanel/AdminPanel';
import PageNotFound from '../PageNotFound/PageNotFound';
import App from '../../containers/App';


const Router = (props) => {
    
    return (
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
    );
}

export default Router;