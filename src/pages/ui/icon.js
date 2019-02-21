import React, { Component } from 'react'
import { Row, Col, Button, Radio, Icon } from 'antd'
class IconComp extends Component {
	state = {
		iconData: [
			'home',
			'google',
			'facebook',
			'codepen',
			'amazon',
			'gitlab',
			'qq',
			'twitter',
			'apple',
			'robot',
			'android',
			'smile',
			'setting'
		]
	}
	render() {
		let iconList = []
		this.state.iconData.forEach(item => {
			iconList.push(
				<div className="icon-item" key={item}>
					<Icon type={item} />
					<div>{item}</div>
				</div>
			)
		})
		console.log('iconList', iconList)
		return (
			<div className="ui-page common-page">
				<div className="bread">
					<span>UI</span>
					<span>/</span>
					<span>图标</span>
				</div>
				<div className="button-part icon-part">{iconList}</div>
			</div>
		)
	}
}
export default IconComp
