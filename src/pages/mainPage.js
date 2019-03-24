import React, { Component } from 'react'
import { Layout, Menu, Icon, Popover } from 'antd'
import { Link } from 'react-router'
const { Header, Sider, Content, Footer } = Layout
const SubMenu = Menu.SubMenu
import '@/layouts/css/pages/main'
class MainPage extends Component {
	state = {
		menuList: [
			{
				title: '首页',
				iconType: 'scan',
				url: '/index'
			},
			{
				title: 'UI',
				iconType: 'rocket',
				childrens: [
					{
						label: '按钮',
						url: '/ui/buttons'
					},
					{
						label: '图标',
						url: '/ui/icons'
					},
					{
						label: '弹性布局',
						url: '/ui/flex'
					},
					{
						label: 'Todo',
						url: '/ui/todolist'
					},
					{
						label: '加载中',
						url: '/ui/buttons'
					}
				]
			},
			{
				title: '动画',
				iconType: 'copy',
				childrens: ['基础动画', '动画案例']
			}
		],
		collapsed: false,
		nowTime: new Date(),
		userName: ''
	}
	toogleCol = () => {
		this.setState(preState => ({ collapsed: !preState.collapsed }))
	}
	componentWillMount() {
		this.userName = localStorage.getItem('userName')
	}
	componentDidMount() {
		this.timerID = setInterval(() => this.timeUpdate(), 1000)
	}
	componentWillUnmount() {
		clearInterval(this.timerID)
	}
	timeUpdate() {
		this.setState({ nowTime: new Date() })
	}
	timeComputed(time) {
		let handleDate = `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()}`
		let handleTime = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
		return `${handleDate}   ${handleTime}`
	}
	loginOut = () => {}
	assignAccount = () => {}
	render() {
		var menuItems = []
		menuItems = this.state.menuList.map((item, i) => {
			let subItems = []
			item.childrens &&
				item.childrens.forEach((j, k) => {
					subItems.push(
						<Menu.Item key={`${i}-${k}`}>
							<Link to={j.url}>{j.label}</Link>
						</Menu.Item>
					)
				})
			if (subItems.length) {
				return (
					<SubMenu
						title={
							<span>
								<Icon type={item.iconType} />
								<span>{item.title}</span>
							</span>
						}
						key={i}>
						{subItems}
					</SubMenu>
				)
			} else {
				return (
					<Menu.Item title={item.title} key={item.url}>
						<Link to={item.url}>
							<Icon type={item.iconType} />
							<span>{item.title}</span>
						</Link>
					</Menu.Item>
				)
			}
		})
		let button = null
		if (this.userName) {
			button = (
				<div className="pop-section">
					<div>修改密码</div>
					<div onClick={this.assignAccount}>退出</div>
				</div>
			)
		} else {
			button = (
				<div className="pop-section" onClick={this.loginOut}>
					注册账号
				</div>
			)
		}
		let content = <div class="pop-content">iii</div>
		return (
			<div className="main-page">
				<Layout>
					<Sider collapsed={this.state.collapsed}>
						<Menu theme="dark" mode="inline" inlineCollapsed={this.state.collapsed} defaultSelectedKeys={['/index']}>
							{menuItems}
						</Menu>
					</Sider>
					<Content>
						<div className="nav">
							<div className="left-nav" onClick={this.toogleCol}>
								<Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
							</div>
							<div className="main-nav" />
							<div className="name-nav">
								<span className="user-name">{this.userName || 'Guest'}</span>
								<span className="icon">
									<Icon type="caret-down" />
								</span>

								{button}
							</div>
							<div className="right-nav">{this.timeComputed(this.state.nowTime)}</div>
						</div>
						<div className="main-content">{this.props.children}</div>
					</Content>
				</Layout>
			</div>
		)
	}
}
export default MainPage
