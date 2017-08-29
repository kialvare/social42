import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import * as firebase from 'firebase';
import configureStore from './store/configureStore';
import { BrowserRouter } from 'react-router-dom';

var config = {
	apiKey: "AIzaSyBRvL-20tfvq7JE3P3iZTAFzwTWJhBNdxw",
	authDomain: "social42-c6e11.firebaseapp.com",
	databaseURL: "https://social42-c6e11.firebaseio.com",
	projectId: "social42-c6e11",
	storageBucket: "social42-c6e11.appspot.com",
	messagingSenderId: "579489889425"
};
firebase.initializeApp(config);

let store = configureStore();

ReactDOM.render(
<Provider store={store}>
	<BrowserRouter>
		<App />
	</BrowserRouter>
</Provider>, document.getElementById('root'));
registerServiceWorker();
