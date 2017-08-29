import React, { Component } from 'react';
import Layout from 'antd/lib/layout';
import Breadcrumb from 'antd/lib/breadcrumb';
const { Content } = Layout;

class UsersPage extends Component {
    state = {users:[]}

    componentDidMount() {
    fetch('/users')
    .then(res => res.json())
    .then(users => this.setState({ users}));
    }

//Added Users into this piece of crap here vvv and also the shit above

	render() {
		return (
            <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '12px 0' }}>
                    <Breadcrumb.Item>Page</Breadcrumb.Item>
                    <Breadcrumb.Item>Users</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                          <div className="App">
                            <h1>Users</h1>
                        {this.state.users.map(user =>
                         <div key={user.id}>{user.username}</div>
                         )}
                            </div>
                </div>
            </Content>
		);
	}
}

export default UsersPage;