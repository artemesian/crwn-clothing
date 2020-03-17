import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from './Components/Header/Header.js'
import HomePage from './Pages/HomePage/HomePage.js'
import ShopPage from './Pages/ShopPage/ShopPage.js'
import CheckoutPage from './Pages/CheckoutPage/CheckoutPage.js'
import SignInSignUp from './Components/SignInSignUp/SignInSignUp.js'

import { auth, createUserProfileDocument } from './Firebase/firebase.js';

import { setCurrentUser } from './Redux/user/user-actions.js';
import { selectCurrentUser } from './Redux/user/user-selectors.js';

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
					<Route exact path='/checkout' component={CheckoutPage}/>
					<Route exact path='/signin' render={() => 
						this.props.currentUser ? 
						(<Redirect to="/" />)
						:
						(<SignInSignUp/>) 
					}/>
				</Switch>
			</div>
			);
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
	setCurrentUser : user => dispatch(setCurrentUser(user)),
})

export default connect(mapStateToProps,mapDispatchToProps)(App)