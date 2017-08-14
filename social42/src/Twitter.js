import React, { Component } from 'react';

var Twit = require('twitter');

var client = new Twitter({
	consumer_key: 'l4Vnbx1yqCUA3DxfZqlFBh266',
	consumer_secret: 'HyjJfzheUWnc9Df1zDe20cKLfCd6buuK34kq5OLJMuXrclIf2S',
	access_token_key: '892914191828307968-zM6xwrUooFm7QFSaYl8xWl1BqEAjZeV',
	access_token_secret: 'qB5YG54eGrs7oE76NhJGX4wsaeCzIJe3erd5CtSmmeaML'
});

export default class Twitter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		}
	}
}

