import React, { component } from "react"
class App extends React.Component {
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
		console.log("this", this)
		this.setState(preState => ({
			countNum: preState.countNum + 5
		}))
	}
	componentWillMount() {
		console.log("mount", this)
	}
	render() {
		return (
			<div className="hello" onClick={this.toCount}>
				hello world{this.state.countNum}
			</div>
		)
	}
}
export default App
