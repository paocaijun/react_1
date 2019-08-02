import React from 'react'
import api from '@/utils/api'
import { Table } from 'antd'
import './blog.scss'

class BlogList extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			tableData: []
		}
	}
	getDataList() {
		api.queryBlogData()
			.then(res => {
				this.state.tableData = res
			})
			.catch(err => {
				console.log('err2', err)
			})
	}
	goDetail(row) {
		// TODO:  this.props.history.push()
		this.props.router.push(`/blog/detail/${row.id}`)
	}
	componentWillMount() {
		this.getDataList()
	}
	render() {
		const columns = [
			{ title: 'id', dataIndex: 'id', key: 'id', width: 60 },
			{
				title: '标题',
				dataIndex: 'title',
				key: 'title',
				width: 200,
				render: (text, row) => <a onClick={() => this.goDetail(row)}> {row.title}</a>
			},
			{ title: '内容', dataIndex: 'content', key: 'content', width: 200 },
			{ title: '作者', dataIndex: 'author', key: 'author', width: 200 },
			{ title: '创建时间', dataIndex: 'createtime', key: 'createtime', width: 200 }
		]
		return (
			<div className="blog-bg">
				<h3>博客列表</h3>
				<Table bordered columns={columns} dataSource={this.state.tableData} rowKey="id" />
			</div>
		)
	}
}
export default BlogList
