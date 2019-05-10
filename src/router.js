import React, { Component } from 'react'
import { Router, Route, IndexRoute, hashHistory, Redirect, IndexRedirect } from 'react-router'
import Test from './Test'
import Index from '@/pages/DashBoard'
import Home from '@/pages/home'
import Buttons from '@/pages/ui/buttons'
import IconComp from '@/pages/ui/icon'
import FlexComp from '@/pages/ui/flex'
import TodoList from '@/pages/ui/todoList'
import ProxyIndex from '@/pages/proxy/index'
import AreaTree from '@/pages/proxy/areaTree'

class CRouter extends Component {
	render() {
		return (
			<Router history={hashHistory}>
				<Route path={'/'} component={Test} />
				<Route path={'/'} component={Index}>
					<IndexRedirect to="/index" />
					<Route path={'index'} component={Home} />
					<Route path={'ui/buttons'} component={Buttons} />
					<Route path={'ui/icons'} components={IconComp} />
					<Route path={'ui/flex'} components={FlexComp} />
					<Route path={'ui/todolist'} components={TodoList} />
					<Route path={'proxy/index'} components={ProxyIndex} />
					<Route path={'proxy/tree'} components={AreaTree} />
				</Route>
			</Router>
		)
	}
}
export default CRouter
