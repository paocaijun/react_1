import React from 'react'
import api from '@/utils/api'
import { Form, Input, Button } from 'antd'
const { TextArea } = Input

import './blog.scss'
function hasErrors(fieldsError) {
	return Object.keys(fieldsError).some(field => fieldsError[field])
}
class BlogCreate extends React.Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		this.props.form.validateFields()
		console.log('mount', this.props, this.props.route)
	}
	handleSubmit = e => {
		e.preventDefault()
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values)
				let _promise = api.createBlog
				// let _promise = api.editBlog
				_promise(values).then(res => {
					// alert('新增成功')
					if (res.code == 0) {
						this.props.router.push(`/blog/list`)
					}
				})
			}
		})
	}

	render() {
		const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form
		const titleError = isFieldTouched('title') && getFieldError('title')
		const contentError = isFieldTouched('content') && getFieldError('content')
		// 为什么直接写在FORM上报错
		const formItemLayout = {
			labelCol: {
				xs: { span: 24 },
				sm: { span: 4 }
			},
			wrapperCol: {
				xs: { span: 24 },
				sm: { span: 12 }
			}
		}
		const tailFormItemLayout = {
			wrapperCol: {
				sm: {
					span: 16,
					offset: 4
				}
			}
		}
		const { layout, ...rest } = formItemLayout
		return (
			<div className="blog-bg">
				<h3>新建博客</h3>
				<Form onSubmit={this.handleSubmit} className="login-form">
					<Form.Item
						{...formItemLayout}
						label="标题"
						validateStatus={titleError ? 'error' : ''}
						help={titleError || ''}>
						{getFieldDecorator('title', {
							rules: [{ required: true, message: '请输入标题!' }]
						})(<Input placeholder="标题" />)}
					</Form.Item>
					<Form.Item
						{...formItemLayout}
						label="content"
						validateStatus={contentError ? 'error' : ''}
						help={contentError || ''}>
						{getFieldDecorator('content', {
							rules: [{ required: true, message: '请输入内容!' }]
						})(<TextArea placeholder="内容" type="textArea" />)}
					</Form.Item>
					<Form.Item {...tailFormItemLayout}>
						<Button type="primary" htmlType="submit">
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
