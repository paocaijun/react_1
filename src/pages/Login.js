import React, { Component } from 'react'
import { Input, Button, message } from 'antd'
const { Password } = Input
import api from '@/utils/api'
import storage from '@/utils/storage'

class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			username: 'zhangsan',
			password: '123'
		}
	}
	submitHandle() {
		api.userLogin(this.state).then(res => {
			message.success('登陆成功')
			storage.getDefaultStorage().setObj('userMsg', res)
			this.props.router.push(`/blog/list`)
		})
	}
	changeValue(ev, key) {
		this.state[key] = ev.target.value
	}
	componentWillMount() {
		console.log('storage.getLocalStorage', storage.getDefaultStorage())
	}
	render() {
		return (
			<div className="common-page login-page">
				<h3>Login</h3>
				<div className="form-line">
					<span>名称：</span>
					<Input placeholder="username" onChange={ev => this.changeValue(ev, 'username')} />
				</div>
				<div className="form-line">
					<span>密码：</span>
					<Password placeholder="password" onChange={ev => this.changeValue(ev, 'password')} />
				</div>
				<div>
					<Button onClick={() => this.submitHandle()}>提交</Button>
				</div>
				<h3>先启动redis</h3>
			</div>
		)
	}
}
export default Login
