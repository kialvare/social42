import React, { Component } from 'react';
import Layout from 'antd/lib/layout';
// import Login from './Login';
import Breadcrumb from 'antd/lib/breadcrumb';
const { Content } = Layout;

class HomePage extends Component {
	render() {
		return (
            <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '12px 0' }}>
                    <Breadcrumb.Item>Page</Breadcrumb.Item>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                    Home Page
                </div>
            </Content>
		);
	}
}

export default HomePage;