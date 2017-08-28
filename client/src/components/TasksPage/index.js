import React, { Component } from 'react';
import Layout from 'antd/lib/layout';
import Breadcrumb from 'antd/lib/breadcrumb';
const { Content } = Layout;

class TasksPage extends Component {
	render() {
		return (
            <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '12px 0' }}>
                    <Breadcrumb.Item>Page</Breadcrumb.Item>
                    <Breadcrumb.Item>Tasks</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                    Tasks Page
                </div>
            </Content>
		);
	}
}

export default TasksPage;