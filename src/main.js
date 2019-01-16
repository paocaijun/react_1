import React from "react"
import ReactDOM from "react-dom"
import App from "./App.js"
import "@/layouts/css/index.scss"
import { createStore } from "redux"
const rootReducer = function(state, action) {
	if (typeof state === "undefined") {
		return 0
	}
	switch (action.type) {
		case "add_five":
			return state + 5
		case "add_ten":
			return state + 10
		default:
			return state
	}
	return state
}
// import {rootReducer} from './reducers'
import { Provider } from "react-redux"
const store = createStore(rootReducer)
console.log("store", store)
ReactDOM.render(
	<div>
		<Provider store={store}>
			<App />
		</Provider>
	</div>,
	document.getElementById("app")
)
// ReactDOM.render(<div>Hello World1111</div>, document.getElementById("app"));
