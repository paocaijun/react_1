import React, { Component } from 'react'
import { Row, Col, Button, Radio, Icon } from 'antd'
class ButtonCom extends Component {
	render() {
		const size = 'small'
		return (
			<div className="ui-page common-page">
				<div className="bread">
					<span>UI</span>
					<span>/</span>
					<span>按钮</span>
				</div>
				<Row gutter={16}>
					<Col span={12}>
						<div className="button-part">
							<Button type="primary">Primary</Button>
							<Button>default</Button>
							<Button type="dashed">dashed</Button>
							<Button type="danger">danger</Button>
						</div>
					</Col>
					<Col span={12}>
						<div className="button-part">
							<div>
								<Button type="primary" shape="circle" icon="search" />
								<Button type="primary" icon="search">
									Search
								</Button>
								<Button shape="circle" icon="search" />
								<Button icon="search">Search</Button>
								<br />
								<Button shape="circle" icon="search" />
								<Button icon="search">Search</Button>
								<Button type="dashed" shape="circle" icon="search" />
								<Button type="dashed" icon="search">
									Search
								</Button>
							</div>
						</div>
					</Col>
				</Row>
				<Row gutter={16}>
					<Col span={12}>
						<div className="button-part">
							<Radio.Group value={size} onChange={this.handleSizeChange}>
								<Radio.Button value="large">Large</Radio.Button>
								<Radio.Button value="default">Default</Radio.Button>
								<Radio.Button value="small">Small</Radio.Button>
							</Radio.Group>
							<br />
							<br />
							<Button type="primary" size={size}>
								Primary
							</Button>
							<Button size={size}>Normal</Button>
							<Button type="dashed" size={size}>
								Dashed
							</Button>
							<Button type="danger" size={size}>
								Danger
							</Button>
							<br />
							<Button type="primary" shape="circle" icon="download" size={size} />
							<Button type="primary" shape="round" icon="download" size={size}>
								Download
							</Button>
							<Button type="primary" icon="download" size={size}>
								Download
							</Button>
							<br />
							<Button.Group size={size}>
								<Button type="primary">
									<Icon type="left" />
									Backward
								</Button>
								<Button type="primary">
									Forward
									<Icon type="right" />
								</Button>
							</Button.Group>
						</div>
					</Col>
				</Row>
			</div>
		)
	}
}
export default ButtonCom
