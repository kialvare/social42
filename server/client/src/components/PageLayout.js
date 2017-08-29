import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import PostPage from './PostPage';
import TasksPage from './TasksPage';
import UsersPage from './UsersPage';
import AnalyticsPage from './AnalyticsPage';
import CalendarPage from './CalendarPage';
import AdminPage from './AdminPage';
import NotFound from './NotFound';
import Layout from 'antd/lib/layout';
import MainHeader from './MainHeader';
import * as firebase from 'firebase';

const { Footer } = Layout;

class PageLayout extends Component {
	logout() {
		firebase.auth().signOut();
	}
	render() {
		return (
			<Layout>
				<MainHeader />
				<Switch>
					<Route exact path="/" component={HomePage}/>
					<Route exact path="/Home" component={HomePage}/>
					<Route exact path="/Post" component={PostPage}/>
					<Route exact path="/Tasks" component={TasksPage}/>
					<Route exact path="/Users" component={UsersPage}/>
					<Route exact path="/Analytics" component={AnalyticsPage}/>
					<Route exact path="/Calendar" component={CalendarPage}/>
					<Route exact path="/Admin" component={AdminPage}/>
					<Route path="*" component={NotFound} />
				</Switch>
				<Footer style={{ textAlign: 'center' }}>
					42 Social Media Team ©2016
				</Footer>
			</Layout>
		);
	}
}

export default PageLayout;