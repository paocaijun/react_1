import React from 'react'
import 'whatwg-fetch'
import api from '@/utils/api'
import SingerLine from './singerLine'
import ComModal from '@/components/common/ComModal'
import { Tree, Row, Col, Button, Input, message } from 'antd'
class Proxy1 extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			dataList: [],
			editValue: false,
			form: {
				name: '',
				singer: ''
			},
			visible: true
		}
		this.handleChange = this.handleChange.bind(this)
	}
	getDataList() {
		api.getMusicData({ name: '' })
			.then(res => {
				this.state.dataList = res.list
			})
			.catch(err => {
				console.log('err2', err)
			})
	}
	componentWillMount() {
		this.getDataList()
	}
	// 子组件触发的事件也需要修改this指向
	editItem = item => {
		this.setState({ editValue: true })
		this.setState(pre => {
			let { name, singer } = pre.dataList[item.index]
			return { form: { name, singer } }
		})
	}
	okBtn = () => {
		this.setState({ editValue: false })
		api.editData(this.state.form).then(() => {
			message.info('修改成功')
			this.getDataList()
		})
		// 前台修改数据，不请求数据
		// this.setState(pre => {
		// 	let handled = pre.dataList.map((line, i) => {
		// 		if (i === item.index) {
		// 			line = { name: '123', singer: 'Miss ZHOU' }
		// 		}
		// 		return line
		// 	})
		// 	// pre.dataList.splice(item.index, 1, { name: '123', singer: 'Miss ZHOU' })
		// 	return { dataList: handled }
		// })
	}
	cancelBtn = () => {
		this.setState({ editValue: false })
	}
	// 手动将value值赋值给input的value对应的state
	handleChange(ev) {
		let form = this.state.form
		form[ev.target.getAttribute('self')] = ev.target.value
		this.setState({ form: form })
	}
	render() {
		return (
			<div>
				<h3>喜欢的歌单</h3>
				<div className="singer-main">
					{this.state.dataList.map((item, i) => {
						return (
							<div key={i}>
								<SingerLine name={item.name} singer={item.singer} editItem={this.editItem} index={i} />
							</div>
						)
					})}
				</div>
				<ComModal visible={this.state.editValue} submitHandle={this.okBtn} cancelHandle={this.cancelBtn} title="编辑歌单">
					<div className="modal-content">
						<Row>
							<Col span={3} className="col-x">
								<span className="label">歌名:</span>
							</Col>
							<Col span={16} className="col-x">
								<Input
									self="name"
									placeholder="请输入歌曲名称"
									onChange={this.handleChange}
									value={this.state.form.name}
								/>
							</Col>
						</Row>
						<Row>
							<Col span={3} className="col-x">
								<span className="label">歌手:</span>
							</Col>
							<Col span={16} className="col-x">
								<Input
									self="singer"
									placeholder="请输入歌手名称"
									value={this.state.form.singer}
									onChange={this.handleChange}
								/>
							</Col>
						</Row>
					</div>
				</ComModal>
			</div>
		)
	}
}
export default Proxy1
