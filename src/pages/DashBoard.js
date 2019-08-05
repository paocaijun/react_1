import React, { Component } from 'react'
import { Layout, Menu, Icon, Popover, Spin } from 'antd'
import { Link } from 'react-router'
import { connect } from 'react-redux'
const { Header, Sider, Content, Footer } = Layout
const SubMenu = Menu.SubMenu
import '@/layouts/css/pages/main'
class DashBoard extends Component {
	constructor() {
		super()
		this.state = {
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
							label: '图标',
							url: '/ui/icons'
						},
						{
							label: '弹性布局',
							url: '/ui/flex'
						}
					]
				},
				{
					title: 'TODO',
					iconType: 'copy',
					childrens: [
						{
							label: '新闻list',
							url: '/to/news'
						},
						{
							label: '实时新闻',
							url: '/to/daynews'
						},
						{
							label: '学习list',
							url: '/to/tolearn'
						}
					]
				},
				{
					title: 'proxy',
					iconType: 'skin',
					childrens: [
						{
							label: '收藏的歌单',
							url: '/proxy/index'
						},
						{
							label: '树形结构',
							url: '/proxy/tree'
						},
						{
							label: '歌手list',
							url: '/proxy/singer'
						}
					]
				},
				{
					title: '博客',
					iconType: 'skin',
					url: '/blog/list'
				}
			],
			collapsed: false,
			nowTime: new Date(),
			userName: '',
			LoadingDisplay: 'none'
		}
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
	componentWillReceiveProps(nextProps) {
		// console.log('nextProps dash', nextProps)
		this.state.LoadingDisplay = nextProps.loading ? 'block' : 'none'
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
	initMenu() {
		var menuItems = this.state.menuList.map((item, i) => {
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
		return menuItems
	}
	render() {
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
		return (
			<div className="main-page">
				<div style={{ display: this.state.LoadingDisplay }} className="load-modal">
					<Spin tip="Loading..." />
				</div>
				<Layout>
					<Sider collapsed={this.state.collapsed}>
						<Menu theme="dark" mode="inline" inlineCollapsed={this.state.collapsed} defaultSelectedKeys={['/index']}>
							{this.initMenu()}
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
export default connect(state => ({ loading: state.common.loading }))(DashBoard)
