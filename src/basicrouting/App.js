import React from 'react';
import './index.css'
import Routers from './Routers';
import Products from './Products';
import ProductDetails from './Product-details'
import { Route, Switch, Redirect } from 'react-router-dom';
import Headercomponent from './Headercomponent';

const App = () => {
  return (
    <div>
      <Headercomponent />
      <main>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/Routers' />
          </Route>
          <Route path="/Routers"><Routers /></Route>
          <Route path="/Products"><Products /></Route>
          <Route path="/Products/:p1"><ProductDetails /></Route>
        </Switch>
      </main>
    </div>
  )
}

export default App
