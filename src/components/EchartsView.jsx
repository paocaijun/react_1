import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';
import React, { Component } from 'react';
const option = {
    xAxis: [
        {
            show: true,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisLabel: {
                textStyle: {
                    color: '#ccc'
                }
            }
        },
        {
            show: false,
            data: ['Mon', '222']
        }
    ],
    yAxis: {
        type: 'value'
    },
    visualMap: {
        show: false,
        min: 0,
        max: 50,
        dimension: 0,
        inRange: {
            color: ['#4a657a', '#308e92', '#b1cfa5', '#f5d69f', '#f5898b', '#ef5055']
        }
    },
    series: [
        {
            data: [0, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
        }
    ],
    backgroundColor: '#08263a',
    title: {
        text: '最近50天每天项目完成情况',
        left: 'center',
        textStyle: {
            color: '#ff6600',
            fontSize: 16
        }
    }
};
class EchartsView extends Component {
    render() {
        return (
            <div>
                <ReactEcharts option={option} style={{ height: '120px', width: '100%' }} />
            </div>
        );
    }
}
export default EchartsView;
