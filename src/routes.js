import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import New from './pages/simulacao';
import Detalhe from './pages/Home/detalhe-simulacao';

export default function Routes(){
    return(
        <BrowserRouter>
          <Switch>
              <Route path="/" exact component={Login}/>
              <Route path="/home" component={Home}/>  
              <Route path="/new" component={New} />                
              <Route path="/detalhe/:id" component={Detalhe} />          
          </Switch>
        </BrowserRouter>
    )
}