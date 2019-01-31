import React, { Component } from "react"
import { Row, Col } from "antd"
// import img1 from '@/layouts/2.jpg';
class Home extends Component {
	render() {
		return (
			<div className="home-page common-page">
				<div className="bread">首页</div>
				<Row gutter={16}>
					<Col span={8}>
						<div className="general-desc">左上</div>
					</Col>
					<Col span={16}>right</Col>
				</Row>
				{/* <img src="../layouts/2.jpg" /> */}
			</div>
		)
	}
}
export default Home
