import React from 'react'
// class是定义组件关键字
// App 组件的名称 必须是以大写字母开头
// React.Component 是组件的父类 （基本的组件）
// extends是继承
class App extends React.Component {
    // 组件必须要有返回值
    // render是渲染组件的函数 渲染的时候必须有返回值
    render() {
        return <div className='hello'>hello world22!</div>
    }
}

// 组件如果需要在别的地方使用 需要导出

export default App