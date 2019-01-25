import React, { Component } from "react"
import { Layout, Menu, Icon, Button } from "antd"
const { Header, Sider, Content, Footer } = Layout
const SubMenu = Menu.SubMenu
class MainPage extends Component {
	state = {
		menuList: [
			{
				title: "首页",
				iconType: "scan"
			},
			{
				title: "UI",
				iconType: "rocket",
				childrens: ["按钮", "图标", "加载中"]
			},
			{
				title: "动画",
				iconType: "copy",
				childrens: ["基础动画", "动画案例"]
			}
		],
		collapsed: false
	}
	toogleCol = para => {
		this.setState({ collapsed: !this.state.collapsed })
	}
	render() {
		var menuItems = []
		menuItems = this.state.menuList.map((item, i) => {
			let subItems = []
			item.childrens &&
				item.childrens.forEach((j, k) => {
					subItems.push(<Menu.Item key={`${i}-${k}`}>{j}</Menu.Item>)
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
					<Menu.Item title={item.title} key={i}>
						<Icon type={item.iconType} />
						<span>{item.title}</span>
					</Menu.Item>
				)
			}
		})
		return (
			<div className="main-page">
				<Layout>
					<Sider collapsed={this.state.collapsed}>
						<Menu
							theme="dark"
							mode="inline"
							inlineCollapsed={this.state.collapsed}>
							{menuItems}
						</Menu>
					</Sider>
					<Content>
						<span onClick={this.toogleCol} className="p10 fs16">
							<Icon
								type={
									this.state.collapsed
										? "menu-unfold"
										: "menu-fold"
								}
							/>
						</span>
						{this.props.children}
					</Content>
				</Layout>
			</div>
		)
	}
}
export default MainPage
