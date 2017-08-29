import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Layout from 'antd/lib/layout';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';

const { Sider } = Layout;
const pages = ['home', 'post', 'tasks', 'users', 'analytics', 'calendar', 'admin'];
// const SubMenu = Menu.SubMenu;

class SideNav extends Component {
	constructor() {
		super();
		this.state = {
			collapsed: false,
			page: ['home']
		};
		this.onCollapse = this.onCollapse.bind(this);
		this.onChangePage = this.onChangePage.bind(this);
	}

	onCollapse(collapsed) {
		this.setState({ collapsed });
	}

	componentDidMount() {
		let page = this.state.page[0];
		let addressPage = this.props.location.pathname.substring(1);
		console.log(addressPage);
		// Makes sure the page matches what's on the address bar on load.
		if (pages.includes(addressPage) && page !== addressPage) {
			console.log('changing to', addressPage);
			this.setState({ page: [addressPage] })
		}
		else if (addressPage.trim() === '') {
			this.setState({ page: ['home'] })
		}
		else {
			this.setState({ page: [''] })
		}
	}

	// Changes the side nav page highlight
	onChangePage(e) {
		this.setState({ page: e.keyPath });
	}

	render() {
		return (
			<Sider
				collapsible
				collapsed={this.state.collapsed}
				onCollapse={this.onCollapse}
			>
				<div className="logo" />
				<Menu theme="dark" selectedKeys={this.state.page} mode="inline" onSelect={this.onChangePage}>
					<Menu.Item key="home">
						<Icon type="home" />
						<span>home</span>
						<Link to="/home"></Link>
					</Menu.Item>
					<Menu.Item key="post">
						<Icon type="edit" />
						<span>post</span>
						<Link to="/post"></Link>
					</Menu.Item>
					<Menu.Item key="tasks">
						<Icon type="copy" />
						<span>tasks</span>
						<Link to="/tasks"></Link>
					</Menu.Item>
					<Menu.Item key="users">
						<Icon type="team" />
						<span>users</span>
						<Link to="/users"></Link>
					</Menu.Item>
					<Menu.Item key="analytics">
						<Icon type="line-chart" />
						<span>analytics</span>
						<Link to="/analytics"></Link>
					</Menu.Item>
					<Menu.Item key="calendar">
						<Icon type="calendar" />
						<span>calendar</span>
						<Link to="/calendar"></Link>
					</Menu.Item>
					<Menu.Item key="admin">
						<Icon type="key" />
						<span>admin</span>
						<Link to="/admin"></Link>
					</Menu.Item>
				</Menu>
			</Sider>
		);
	}
}

export default SideNav;

/* <SubMenu
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
</Menu.Item> */