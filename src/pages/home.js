import React, { Component } from 'react'
import { Row, Col } from 'antd'
import EchartsView from '@/components/EchartsView'
import EchartsVisitStatic from '@/components/EchartsVisitStatic'
// 图片取打包之后的路径
class Home extends Component {
	render() {
		return (
			<div className="home-page common-page">
				<div className="bread">首页</div>
				<Row>
					<Col span={8}>
						<div>
							<div className="card-item">
								<div className="content">
									<div className="desc">收藏</div>
									<div className="num">891</div>
								</div>
							</div>
							<div className="card-item">
								<div className="content">
									<div className="desc">照片</div>
									<div className="num">1900</div>
								</div>
							</div>
							<div className="card-item">
								<div className="content">
									<div className="desc">云数据</div>
									<div className="num">4190</div>
								</div>
							</div>
							<div className="card-item">
								<div className="content">
									<div className="desc">邮件</div>
									<div className="num">555</div>
								</div>
							</div>
						</div>
					</Col>
					<Col span={16}>
						<EchartsView />
					</Col>
				</Row>
				<Row gutter={10}>
					<Col span={8}>
						<div className="task-section">
							<div>任务</div>
							<div className="color999 fs12">10个已经完成，2个待完成，1个正在进行中</div>
							<ul>
								<li className="task-item">
									<div>
										<span className="circle" />
										<span className="desc">新版本迭代会</span>
									</div>
								</li>
								<li className="task-item">
									<div>
										<span className="circle" />
										<span className="desc">完成网站设计初版</span>
									</div>
								</li>
								<li className="task-item">
									<div>
										<span className="circle" />
										<span className="desc">接口联调</span>
									</div>
								</li>
							</ul>
						</div>
					</Col>
					<Col span={8}>
						<div className="task-section">
							<div>消息栏</div>
							<ul>
								<li className="task-item">
									<div className="thumb">11111</div>
									<div className="msg">
										<div className="fs12">麦小兜</div>
										<span className="color999 fs12">蓝瓶的盖好喝的钙</span>
									</div>
								</li>
								<li className="task-item">
									<div className="thumb">11111</div>
									<div className="msg">
										<div className="fs12">益达来一打</div>
										<span className="color999 fs12">一枝独秀</span>
									</div>
								</li>
								<li className="task-item">
									<div className="thumb">11111</div>
									<div className="msg">
										<div className="fs12">浪湖课堂</div>
										<span className="color999 fs12">骨骼清奇，能表演个胸口碎大石么</span>
									</div>
								</li>
							</ul>
						</div>
					</Col>
					<Col span={8}>
						<div className="task-section">
							<div>访问量统计</div>
							<div className="color999 fs12">最近7天用户访问量</div>
							<EchartsVisitStatic />
						</div>
					</Col>
				</Row>
				<img src="../img/2.jpg" />
			</div>
		)
	}
}
export default Home
