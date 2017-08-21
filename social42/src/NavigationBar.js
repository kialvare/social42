import React, { Component } from 'react';
import NavButton from './NavButton.js';

const styles = {
	container: {
		width: 200,
		height: '100%',
		display: 'flex',
		backgroundColor: '#35353B',
	}
}

export default class NavigationBar extends Component {
	render () {
		const { text } = this.props;
		return (
		<div style={styles.container}>
			<NavButton text={'home'}/>
		</div>
		);
	}
}
