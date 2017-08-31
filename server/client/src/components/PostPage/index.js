import React, { Component } from 'react';
import Layout from 'antd/lib/layout';
import Breadcrumb from 'antd/lib/breadcrumb';
import Textarea from 'antd/lib/input';
import Button from 'antd/lib/button';
const { Content } = Layout;

class PostPage extends Component {
	render() {
		return (
            <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '12px 0' }}>
                    <Breadcrumb.Item>Page</Breadcrumb.Item>
                    <Breadcrumb.Item>Post</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
					<form method="post" action="/tweet">
						<Textarea rows={4} name="tweeter"/>
						<Button type="submit">Tweet</Button>
					</form>
                </div>
            </Content>
		);
	}
}

export default PostPage;
