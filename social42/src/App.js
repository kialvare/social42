import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {value: ''};

		
	}

	render() {
		return (
			<div className="App">
				<div className="App-header">
				<h2 className="Title">Post to Twitter</h2>
			</div>
			<form onSubmit={this.handleSubmit}>
				<label>
				Tweet:
				<br />
				<input type="text" />
				<br />
				<input type="submit" value="Submit" />
				</label>
			</form>
			</div>
		);
	}
}

export default App;
