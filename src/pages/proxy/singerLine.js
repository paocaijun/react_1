import React from 'react'
import { Icon } from 'antd'
class singerLine extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div style={{ paddingBottom: '10px' }} className="singer-item">
				<div className="">{this.props.name}</div>
				<div style={{ color: '#f30' }}>
					{this.props.singer}
					<span className="singer-edit" onClick={() => this.props.editItem(this.props)}>
						<Icon type="edit" />
					</span>
				</div>
			</div>
		)
	}
}
export default singerLine
