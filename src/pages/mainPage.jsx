import React, { Component } from "react"
import { Layout, Menu, Icon, Button } from "antd"
import { Link } from "react-router"
const { Header, Sider, Content, Footer } = Layout
const SubMenu = Menu.SubMenu
class MainPage extends Component {
	state = {
		menuList: [
			{
				title: "首页",
				iconType: "scan",
				url: "/index"
			},
			{
				title: "UI",
				iconType: "rocket",
				childrens: [
					{
						label: "按钮",
						url: "/ui/buttons"
					},
					{
						label: "图标",
						url: "/ui/icons"
					},
					{
						label: "加载中",
						url: "/ui/buttons"
					}
				]
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
					<Menu.Item title={item.title} key={i}>
						<Link to={item.url}>
							<Icon type={item.iconType} />
							<span>{item.title}</span>
						</Link>
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
