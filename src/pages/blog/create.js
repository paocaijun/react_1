import React from 'react'
import api from '@/utils/api'
import { Form, Input, Button } from 'antd'

import './blog.scss'
function hasErrors(fieldsError) {
	console.log('1', Object.keys(fieldsError), fieldsError, Object.keys(fieldsError).some(field => fieldsError[field]))
	return Object.keys(fieldsError).some(field => fieldsError[field])
}
class BlogCreate extends React.Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		this.props.form.validateFields()
	}
	handleSubmit = e => {
		e.preventDefault()
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values)
				api.createBlog(values)
			}
		})
	}

	render() {
		const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form
		const titleError = isFieldTouched('title') && getFieldError('title')
		const contentError = isFieldTouched('content') && getFieldError('content')
		return (
			<div className="blog-bg">
				<h3>新建博客</h3>
				<Form onSubmit={this.handleSubmit} className="login-form" layout="inline">
					<Form.Item label="标题" validateStatus={titleError ? 'error' : ''} help={titleError || ''}>
						{getFieldDecorator('title', {
							rules: [{ required: true, message: 'Please input your 标题!' }]
						})(<Input placeholder="标题" />)}
					</Form.Item>
					<Form.Item label="内容" validateStatus={contentError ? 'error' : ''} help={contentError || ''}>
						{getFieldDecorator('content', {
							rules: [{ required: true, message: 'Please input your 内容!' }]
						})(<Input placeholder="内容" />)}
					</Form.Item>
					<Form.Item>
						<Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
							登录
						</Button>
					</Form.Item>
				</Form>
			</div>
		)
	}
}
// export default BlogCreate
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(BlogCreate)
export default WrappedNormalLoginForm
