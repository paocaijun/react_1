import React from 'react'
import { Modal, Button } from 'antd'
class ComModal extends React.Component {
	//  默认的props
	static defaultProps = {
		visible: false,
		title: '提示',
		okText: '确认',
		cancelText: '取消'
	}
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<Modal
				className="common-modal"
				visible={this.props.visible}
				title={this.props.title}
				footer={[
					<Button key="submit" type="primary" onClick={this.props.submitHandle}>
						{this.props.okText}
					</Button>,
					<Button key="cancel" onClick={this.props.cancelHandle}>
						{this.props.cancelText}
					</Button>
				]}
				onCancel={this.props.cancelHandle}>
				{this.props.children}
			</Modal>
		)
	}
}
export default ComModal
