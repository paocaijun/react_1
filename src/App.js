import React, { Component } from "react"
class App extends Component {
	constructor(props, context) {
		super(props)
		this.state = {
			name: "app_component",
			toTop: false,
			countNum: 10
		}
		this.toCount = this.toCount.bind(this)
	}
	toCount() {
		this.setState(preState => ({
			countNum: preState.countNum + 5
		}))
	}
	componentWillMount() {}
	render() {
		return (
			<div className="hello" onClick={this.toCount}>
				hello world eeee{this.state.countNum}
			</div>
		)
	}
}
export default App
