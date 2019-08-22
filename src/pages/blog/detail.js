import React from 'react'
import api from '@/utils/api'
import './blog.scss'
import utils from '@/utils/misc'

class BlogDetail extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			detailMsg: {}
		}
	}
	componentWillMount() {
		this.getBlogDetail()
	}
	getBlogDetail() {
		let { id } = this.props.params
		if (!id) return
		api.queryBlogDetail({ id }).then(res => {
			this.state.detailMsg = res
		})
	}
	render() {
		let msg = [] //循环重复的dom必须用数组装
		for (let key in this.state.detailMsg) {
			msg.push(
				<div className="section" key={key}>
					<div className="label">{key}:</div>
					<div className="val">{this.state.detailMsg[key]}</div>
				</div>
			)
		}
		return (
			<div className="blog-bg">
				<div className="main">
					<div>
						<h3 className="blog-title">{this.state.detailMsg.title}</h3>
						<div className="title">
							<div className="author">{this.state.detailMsg.author}</div>
							<div className="time">{utils.formatFullDate(this.state.detailMsg.createtime)}</div>
						</div>
						<p className="content">{this.state.detailMsg.content}</p>
					</div>
				</div>
			</div>
		)
	}
}
export default BlogDetail
