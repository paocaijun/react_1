import ReactEcharts from 'echarts-for-react'
import React, { Component } from 'react'
const option = {
	title: {
		text: '最近50天每天项目完成情况',
		left: 'left',
		textStyle: {
			color: '#fff',
			fontSize: 12
		}
	},
	xAxis: {
		type: 'category',
		boundaryGap: true,
		data: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
		axisLabel: {
			color: '#fff'
		},
		axisLine: {
			show: true,
			onZero: true,
			lineStyle: {
				color: '#48b',
				width: 1,
				type: 'solid'
			}
		}
	},
	yAxis: {
		type: 'value',
		axisLabel: {
			formatter: '{value} °C',
			color: '#fff'
		},
		boundaryGap: ['8%', '8%']
	},
	// hover时显示
	tooltip: {
		trigger: 'axis'
	},
	// toolbox: {
	// 	show: true,
	// 	feature: {
	// 		mark: { show: true },
	// 		dataView: { show: true, readOnly: false },
	// 		magicType: { show: true, type: ['line', 'bar'] },
	// 		restore: { show: true },
	// 		saveAsImage: { show: true }
	// 	}
	// },
	series: [
		{
			type: 'line',
			smooth: true,
			data: [10, 42, 80, 65, 67, 22, 33, 2, 1, 673, 22],
			itemStyle: { normal: { areaStyle: { type: 'default', color: '#757a86' }, lineStyle: { color: '#757a86' } } },
			markPoint: {
				data: [{ type: 'max', name: '最大值' }, { type: 'min', name: '最小值' }],
				itemStyle: {
					normal: {
						color: '#757a86'
					}
				}
			}
		},
		{
			name: '预购',
			type: 'bar',
			smooth: true,
			itemStyle: { normal: { color: '#f1be14' } },
			data: [30, 44, 3, 525, -21, 21, 67, 22, 33, 2, 673],
			markPoint: {
				data: [{ type: 'max', name: '最大值' }, { type: 'min', name: '最小值' }]
			}
		}
	],
	backgroundColor: '#08263a'
}
class EchartsView extends Component {
	render() {
		return (
			<div className="">
				<ReactEcharts option={option} style={{ height: '240px', width: '90%' }} />
			</div>
		)
	}
}
export default EchartsView
