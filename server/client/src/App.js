import React, { Component } from 'react';
import './App.css';
import LoginPage from './components/LoginPage';
import * as firebase from 'firebase';
import SideNav from './components/SideNav';
import PageLayout from './components/PageLayout';
import Layout from 'antd/lib/layout';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
	constructor() {
		super();
		this.state = {
			user: null
		}
	}
	componentDidMount() {
    // fetch('/users')
    // .then(res => res.json())
    // .then(users => this.setState({ users}));
		// console.log(this.props);
		// var uiConfig = {
		//   signInSuccessUrl: '/',
		//   signInOptions: [
		//     // Leave the lines as is for the providers you want to offer your users.
		//     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
		//     // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
		//     // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
		//     // firebase.auth.GithubAuthProvider.PROVIDER_ID,
		//     firebase.auth.EmailAuthProvider.PROVIDER_ID,
		//     // firebase.auth.PhoneAuthProvider.PROVIDER_ID
		//   ],
		//   // Terms of service url.
		//   tosUrl: '<your-tos-url>',
		//   signInFlow: 'popup',
		// };

		// // Initialize the FirebaseUI Widget using Firebase.
		// var ui = new firebaseui.auth.AuthUI(firebase.auth());
		// // The start method will wait until the DOM is loaded.
		// ui.start('#firebaseui-auth-container', uiConfig);

		firebase.auth().onAuthStateChanged((user) => {
			console.log(user);
			this.setState({user});
		});
	}

	renderPage() {
		return (<Switch>
			<Route path="/" component={(props) => {
				return (
					<Layout className="ant-layout-has-sider">
						<SideNav {...props} />
						<PageLayout {...props} />
						{/* <div id="firebaseui-auth-container" ></div> */}
					</Layout>
				);
			}} />
		</Switch>);
	}

	render() {
		// console.log(this.props);
		let page = this.state.user ? this.renderPage() : (<LoginPage />);
		return (
			<div className="App">
				{ page }
			</div>
		);
	}
}

export default App;
