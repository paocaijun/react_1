import React, { Component } from 'react'
import { Router, Route, IndexRoute, hashHistory, Redirect, IndexRedirect } from 'react-router'
import App from './App'
import MainPage from '@/pages/mainPage'
import Home from '@/pages/home'
import Buttons from '@/pages/ui/buttons'
import IconComp from '@/pages/ui/icon'
import FlexComp from '@/pages/ui/flex'
import TodoList from '@/pages/ui/todoList'
class CRouter extends Component {
	render() {
		return (
			<Router history={hashHistory}>
				{/* <Route path={"/"} component={App} /> */}
				{/* <Route path={"/home"} component={Home} /> */}
				<Route path={'/'} component={MainPage}>
					<IndexRedirect to="/index" />
					<Route path={'index'} component={Home} />
					<Route path={'ui/buttons'} component={Buttons} />
					<Route path={'ui/icons'} components={IconComp} />
					<Route path={'ui/flex'} components={FlexComp} />
					<Route path={'ui/todolist'} components={TodoList} />
				</Route>
			</Router>
		)
	}
}
export default CRouter
