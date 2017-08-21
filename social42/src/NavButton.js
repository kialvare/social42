import React, { Component } from 'react';

const styles = {
	container: {
		width: 200,
		height: 80,
		backgroundColor: '#35353B',
	},
	text: {
		//fontFamily: 'Raleway', 'Helvetica', 'sans serif'
	}
}

export default class NavButton extends Component {
	render () {
		const { text } = this.props;
		return (
			<div style={styles.container}>
				
			</div>
		);
	}
}
