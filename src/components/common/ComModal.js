import React from 'react'
import { Modal, Button } from 'antd'
import PropTypes from 'prop-types' //校验规则
class ComModal extends React.Component {
	//  默认的props
	static defaultProps = {
		visible: false,
		title: '提示',
		okText: '确认',
		cancelText: '取消'
	}
	static propTypes = {
		cancelText: PropTypes.string
	}
	constructor(props) {
		super(props)
	}
	componentWillMount() {
		console.log('1', React)
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
