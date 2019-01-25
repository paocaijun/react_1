import React, { Component } from "react"
import {
	Router,
	Route,
	IndexRoute,
	hashHistory,
	Redirect,
	IndexRedirect
} from "react-router"
import App from "./App"
import MainPage from "@/pages/mainPage"

import Home from "@/pages/home"
import HeadeNav from "@/pages/header/nav"
class CRouter extends Component {
	render() {
		return (
			<Router history={hashHistory}>
				{/* <Route path={"/"} component={App} /> */}
				<Route path={"/home"} component={Home} />
				<Route path={"/header"}>
					<IndexRoute component={HeadeNav} />
					<Route path={"nav"} component={HeadeNav} />
				</Route>
				<Route path={"/"} component={MainPage}>
					<IndexRedirect to="/index" />
					<Route path={"index"} component={Home} />
				</Route>
			</Router>
		)
	}
}
export default CRouter
