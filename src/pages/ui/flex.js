import React from 'react'
import '@/layouts/css/pages/flex'
class FlexComp extends React.Component {
	state = {}
	render() {
		return (
			<div className="ui-page common-page">
				<div className="bread">
					<span>UI</span>
					<span>/</span>
					<span>弹性布局</span>
				</div>
				<div className="flex-section">
					<div className="wrap ">
						<div className="left">LEFT</div>
						<div className="center">
							<p>CENTER</p>
							<p>CENTER</p>
							<p>CENTER</p>
							<p>CENTER</p>
						</div>
						<div className="right">RIGHT</div>
					</div>
					<p>某一项宽度固定</p>
					<div className="outer ">
						<div className="item item1">50%</div>
						<div className="item item2">50px</div>
						<div className="item">shrink</div>
						<div className="item">shrink</div>
					</div>
					<p>圣杯造型</p>
					<div className="cup">
						<div className="header">头部</div>
						<div className="body">
							<div className="left">left</div>
							<div className="center">
								center
								<p>pTag</p>
								<p>pTag</p>
							</div>
							<div className="right">right</div>
						</div>
						<div className="footer">底部</div>
					</div>
				</div>
			</div>
		)
	}
}
export default FlexComp
