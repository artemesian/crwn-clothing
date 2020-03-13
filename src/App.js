import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './Components/Header/Header.js'
import HomePage from './Pages/HomePage/HomePage.js'
import ShopPage from './Pages/ShopPage/ShopPage.js'
import SignInSignUp from './Components/SignInSignUp/SignInSignUp.js'
import { auth, createUserProfileDocument } from './Firebase/firebase.js';
import { setCurrentUser } from './Redux/user/user-actions.js';
import './App.css';

class App extends React.Component {
	unSubscribeFromAuth = null 

	componentDidMount() {
		const { setCurrentUser } = this.props;

		this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				
				userRef.onSnapshot( snapShot => {
					setCurrentUser({
							id: snapShot.id,
							...snapShot.data()
					})
				})
			} else {
				setCurrentUser(userAuth)
			}
	
		})
	}

	componentWillUnmount() {
		this.unSubscribeFromAuth()
	}

	render() {
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
}

const mapToDispatchToProps = dispatch => ({
	setCurrentUser : user => dispatch(setCurrentUser(user)),
})

export default connect(null,mapToDispatchToProps)(App)