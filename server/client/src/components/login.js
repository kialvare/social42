import React, { Component } from 'react';
import * as firebase from 'firebase';

class Login extends Component {
	constructor() {
		super();
		this.login = this.login.bind(this);
	}
	componentDidMount() {
		firebase.auth().onAuthStateChanged(firebaseUser => {
			console.log(firebaseUser);
		})
	}
	login(e) {
		console.log(e)
		let email = document.getElementById('email').value;
		let password = document.getElementById('password').value;
		let auth = firebase.auth();

		const promise = auth.signInWithEmailAndPassword(email, password);
		promise.catch(e => {
			auth.createUserWithEmailAndPassword(email, password)
			.catch(e => console.log(e));
		});
	}
	render() {
		return (
			<div>
				<input id="email" type="email" name="email" />
				<input id="password" type="password" name="password" />
				<button onClick={this.login} >Login</button>
			</div>
		);
	}
}

export default Login;