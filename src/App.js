import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Header from './Components/Header/Header.js'
import './App.css';
import HomePage from './Pages/HomePage/HomePage.js'
import ShopPage from './Pages/ShopPage/ShopPage.js'

function App() {
  return (
    <div>
    <Header/>
	    <Switch>
	    	<Route exact path='/' component={HomePage}/>
	    	<Route path='/shop' component={ShopPage}/>
	    </Switch>
    </div>
  );
}

export default App;
