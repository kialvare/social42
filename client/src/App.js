import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui';
import SideNav from './components/SideNav';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class App extends Component {
	constructor() {
		super();
		this.state = {
			collapsed: false
		};
		this.onCollapse = this.onCollapse.bind(this);
	}
	onCollapse(collapsed) {
		console.log(collapsed);
		this.setState({ collapsed });
	}
  componentDidMount() {
	// var uiConfig = {
	  //   signInSuccessUrl: '<url-to-redirect-to-on-success>',
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
  }
	render() {
		return (
			<Layout>
				<Sider
					collapsible
					collapsed={this.state.collapsed}
					onCollapse={this.onCollapse}
				>
					<div className="logo" />
					<Menu theme="dark" defaultSelectedKeys={['Pie']} mode="inline" onSelect={e => console.log(e)}>
						<Menu.Item key="Pie">
							<Icon type="pie-chart" />
							<span>Option 1</span>
						</Menu.Item>
						<Menu.Item key="Desktop">
							<Icon type="desktop" />
							<span>Option 2</span>
						</Menu.Item>
						<SubMenu
							key="sub1"
							title={<span><Icon type="user" /><span>User</span></span>}
						>
							<Menu.Item key="3">Tom</Menu.Item>
							<Menu.Item key="4">Bill</Menu.Item>
							<Menu.Item key="5">Alex</Menu.Item>
						</SubMenu>
						<SubMenu
							key="sub2"
							title={<span><Icon type="team" /><span>Team</span></span>}
						>
							<Menu.Item key="6">Team 1</Menu.Item>
							<Menu.Item key="8">Team 2</Menu.Item>
						</SubMenu>
						<Menu.Item key="9">
							<Icon type="file" />
							<span>File</span>
						</Menu.Item>
					</Menu>
				</Sider>
				<Layout>
					<Header style={{ background: '#fff', padding: 0 }} />
					<Content style={{ margin: '0 16px' }}>
					<Breadcrumb style={{ margin: '12px 0' }}>
					<Breadcrumb.Item>User</Breadcrumb.Item>
					<Breadcrumb.Item>Bill</Breadcrumb.Item>
					</Breadcrumb>
					<div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
					Bill is a cat.
					</div>
					</Content>
					<Footer style={{ textAlign: 'center' }}>
						Ant Design ©2016 Created by Ant UED
					</Footer>
				</Layout>
			</Layout>
		);
	}
}

export default App;
