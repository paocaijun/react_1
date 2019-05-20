// 懒加载
// importComp为函数
import React from 'react'
const AsyncComponent = importComp => {
	return class extends React.Component {
		constructor(props) {
			super(props)
			this.state = {
				mod: null
			}
		}
		componentDidMount() {
			// console.log('importComp', importComp)
			importComp().then(comp => {
				// comp是加载的组件
				this.setState({ mod: comp.default })
			})
		}
		render() {
			const C = this.state.mod
			return C ? <C {...this.props} /> : null
		}
	}
}
export default AsyncComponent
