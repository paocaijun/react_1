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
		],
		aa: {
			key: 'data',
			value: '',
			children: [
				{
					key: 'pageNo',
					value: "true|number|'分页页数'"
				},
				{
					key: 'pageSize',
					value: "true|number|'分页条数'"
				},
				{
					key: 'result',
					value: '',
					children: [
						{
							key: 'id',
							value: "true|number|'编码'"
						},
						{
							key: 'status',
							value: "true|number|'状态'"
						}
					]
				}
			]
		}
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
