import React, { Component } from 'react';
import Menu from 'antd/lib/menu';
import Dropdown from 'antd/lib/dropdown';
import Layout from 'antd/lib/layout';
import Avatar from 'antd/lib/avatar';
import * as firebase from 'firebase';

const { Header } = Layout;

const onAvatarMenuSelect = (e) => {
	switch(e.key) {
		case 'logout':
			firebase.auth().signOut();
			break;
		default:
			return;
	}
};

const menu = (
    <Menu onSelect={ onAvatarMenuSelect }>
		<Menu.Item key="logout">logout</Menu.Item>
		<Menu.Item key="1">something</Menu.Item>
		<Menu.Divider />
		<Menu.Item key="3">3d menu item</Menu.Item>
    </Menu>
  );

class MainHeader extends Component {
	render() {
		return (
			<Header style={{ background: '#fff', padding: 0 }} >
				<div className="avatar">
					<Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
						<Avatar className="ant-dropdown-link" icon="user" />
					</Dropdown>
				</div>
			</Header>
		);
	}
}

export default MainHeader;