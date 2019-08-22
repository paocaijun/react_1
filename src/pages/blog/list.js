import React from 'react'
import api from '@/utils/api'
import { Table, Button, Input } from 'antd'
const { Search } = Input
import './blog.scss'
import utils from '@/utils/misc'

class BlogList extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			tableData: [],
			requestParams: { author: '', keyword: '' }
		}
	}
	getDataList() {
		api.queryBlogData(this.state.requestParams)
			.then(res => {
				this.state.tableData = res
			})
			.catch(err => {
				console.log('err2', err)
			})
	}
	searchFn(key, ev) {
		let obj = {}
		obj[key] = ev.target.value
		let data = Object.assign({}, this.state.requestParams, obj)
		this.setState({ requestParams: data })
		// this.state.requestParams[key] = ev.target.value
	}
	goDetail(row) {
		// TODO:  this.props.history.push()
		this.props.router.push(`/blog/detail/${row.id}`)
	}
	componentWillMount() {
		this.getDataList()
	}
	handleEdit(row) {
		this.props.router.push(`/blog/edit/${row.id}`)
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
			{
				title: '创建时间',
				dataIndex: 'createtime',
				key: 'createtime',
				width: 200,
				render: (text, row) => {
					return utils.formatFullDate(row.createtime)
				}
			},
			{
				title: '操作',
				dataIndex: 'handle',
				key: 'handle',
				width: 200,
				render: (text, row) => <div onClick={() => this.handleEdit(row)}>编辑</div>
			}
		]
		const blogList = this.state.tableData.map(item => {
			return (
				<div className="each-blog" key={item.id}>
					<div className="title">
						<h3 onClick={() => this.goDetail(item)}>{item.title}</h3>
						<div className="operate">
							<span onClick={() => this.handleEdit(item)}>编辑</span>
							<span>删除</span>
						</div>
					</div>
					<p className="content">{item.content.slice(0, 100)}...</p>
					<div className="title">
						<div className="author">{item.author}</div>
						<div className="time">{utils.formatFullDate(item.createtime)}</div>
					</div>
				</div>
			)
		})
		return (
			<div className="blog-bg">
				<h3 className="big-title">博客列表</h3>
				<div>{blogList}</div>
				<div className="new-btn">
					<Button type="primary" onClick={() => this.props.router.push(`/blog/create`)}>
						新增
					</Button>
				</div>
				<div className="search-line">
					<Input placeholder="搜索作者" onChange={ev => this.searchFn('author', ev)} style={{ width: 200 }} />
					<Input placeholder="搜索标题" onChange={ev => this.searchFn('keyword', ev)} style={{ width: 200 }} />
					<Button type="primary" onClick={() => this.getDataList()}>
						搜索
					</Button>
				</div>
				{/* <Table bordered columns={columns} dataSource={this.state.tableData} rowKey="id" /> */}
			</div>
		)
	}
}
export default BlogList
