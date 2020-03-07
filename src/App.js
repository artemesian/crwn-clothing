import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Header from './Components/Header/Header.js'
import HomePage from './Pages/HomePage/HomePage.js'
import ShopPage from './Pages/ShopPage/ShopPage.js'
import SignInSignUp from './Components/SignInSignUp/SignInSignUp.js'

import './App.css';

function App() {
  return (
    <div>
    <Header/>
	    <Switch>
	    	<Route exact path='/' component={HomePage}/>
	    	<Route path='/shop' component={ShopPage}/>
	    	<Route path='/signin' component={SignInSignUp}/>
	    </Switch>
    </div>
  );
}

export default App;
