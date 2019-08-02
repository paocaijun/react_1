import React from 'react'
import api from '@/utils/api'
import { Table, Divider, Tag } from 'antd'
import Tabs from '@/utils/tabs'
import './proxy.scss'
class SingerTable extends React.Component {
	constructor(props, context) {
		super(props)
		this.state = {
			tableData: []
		}
	}
	componentWillMount() {
		api.getsingerData().then(res => {
			this.setState({ tableData: res })
		})
	}
	componentDidMount() {
		this.initTab()
	}
	initTab() {
		let tabs = new Tabs('tabBox')
	}
	render() {
		const columns = [
			{ title: 'id', dataIndex: 'id', key: 'id', width: 200 },
			{ title: '歌手', dataIndex: 'name', key: 'name', width: 200 },
			{ title: '代表作', dataIndex: 'works', key: 'works', width: 200 },
			{ title: '粉丝（万）', dataIndex: 'fans', key: 'fans', width: 200 },
			{
				title: '操作',
				key: 'action',
				render: (text, row) => (
					<div>
						row.name
						<span className="p10" style={{ color: '#f66', fontSize: '14px' }}>
							DEL
						</span>
					</div>
				)
			}
		]
		return (
			<div className="todo-page common-page">
				<div className="bread">
					<span>PROXY</span>
					<span>/</span>
					<span>SINGER_TABLE</span>
				</div>
				<div className="todo-section">
					<div id="tabBox">
						<div className="pb20">
							<input type="button" value="singerTable" className="btns on" />
							<input type="button" value="tab2" className="btns" />
							<input type="button" value="tab3" className="btns" />
						</div>
						<div className="inner-box show">
							<Table bordered columns={columns} dataSource={this.state.tableData} scroll={{ y: 240 }} />
						</div>
						<div className="inner-box">2222</div>
						<div className="inner-box">33333</div>
					</div>
				</div>
			</div>
		)
	}
}

export default SingerTable
