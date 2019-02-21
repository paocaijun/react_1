import ReactEcharts from 'echarts-for-react'
import React, { Component } from 'react'
import echarts from 'echarts'

const option = {
	xAxis: {
		type: 'category',
		data: ['2017-05-01', '2017-05-02', '2017-05-03', '2017-05-04', '2017-05-05', '2017-05-06', '2017-05-07'],
		boundaryGap: false,
		axisLine: {
			lineStyle: {
				color: '#609ee9'
			}
		},
		axisLabel: {
			margin: 10,
			textStyle: {
				fontSize: 10
			}
		}
	},
	yAxis: {
		type: 'value',
		splitLine: {
			lineStyle: {
				color: ['#D4DFF5']
			}
		}
	},
	// tooltip: {
	// 	trigger: 'axis'
	// },
	series: [
		{
			type: 'line',
			smooth: true,
			data: ['1200', '1400', '808', '811', '626', '488', '1600'],
			areaStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(
						0,
						0,
						0,
						1,
						[
							{
								offset: 0,
								color: 'rgba(216, 244, 247,1)'
							},
							{
								offset: 1,
								color: 'rgba(216, 244, 247,0.2)'
							}
						],
						false
					)
				}
			},
			itemStyle: {
				normal: {
					color: '#58c8da'
				}
			}
		}
	]
}
class EchartsVisitStatic extends Component {
	render() {
		return (
			<div className="">
				<ReactEcharts option={option} style={{ height: '330px', width: '90%' }} />
			</div>
		)
	}
}
export default EchartsVisitStatic
