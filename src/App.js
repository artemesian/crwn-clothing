import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Header from './Components/Header/Header.js'
import HomePage from './Pages/HomePage/HomePage.js'
import ShopPage from './Pages/ShopPage/ShopPage.js'
import SignInSignUp from './Components/SignInSignUp/SignInSignUp.js'
import { auth, createUserProfileDocument } from './Firebase/firebase.js';

import './App.css';

export default class App extends React.Component {
	constructor() {
		super();

		this.state = {
			currentUser: null
		}
	}
	unSubscribeFromAuth = null 

	componentDidMount() {
		this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				
				userRef.onSnapshot( snapShot => {
					this.setState({
						currentUser: {
							id: snapShot.id,
							...snapShot.data()
						}
					})
				})
			} else {
				this.setState({currentUser: null})
			}
	
		})
	}

	componentWillUnmount() {
		this.unSubscribeFromAuth()
	}

	render() {
		return (
			<div>
			<Header currentUser={this.state.currentUser} />
			<Switch>
				<Route exact path='/' component={HomePage}/>
				<Route path='/shop' component={ShopPage}/>
				<Route path='/signin' component={SignInSignUp}/>
			</Switch>
			</div>
			);
	}
}
