import React from 'react'
import Routers from './Routers';
import Products from './Products';
import ProductDetails from './Product-details'
import { Route } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Route exact path="/Routers"><Routers /></Route>
            <Route exact path="/Products"><Products /></Route>
            <Route exact path="/Products/:p1"><ProductDetails /></Route>
        </div>
    )
}

export default Home;
