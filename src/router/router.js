import React, { Component } from 'react'
import { Router, Route, IndexRoute, hashHistory, Redirect, IndexRedirect } from 'react-router'
import AsyncComponent from './lazy'
// 路由正常加载
import Test from '../Test'
import DashBoard from '@/pages/DashBoard'
// 路由懒加载
// import会返回一个promise对象
const Home = AsyncComponent(() => import('@/pages/home'))
const Buttons = AsyncComponent(() => import('@/pages/ui/buttons'))
const IconComp = AsyncComponent(() => import('@/pages/ui/icon'))
const FlexComp = AsyncComponent(() => import('@/pages/ui/flex'))
const News = AsyncComponent(() => import('@/pages/todo/news'))
const DayNews = AsyncComponent(() => import('@/pages/todo/dayNews'))

const ToLearn = AsyncComponent(() => import('@/pages/todo/toLearn'))

const ProxyIndex = AsyncComponent(() => import('@/pages/proxy/index'))
const AreaTree = AsyncComponent(() => import('@/pages/proxy/areaTree'))
const SingerList = AsyncComponent(() => import('@/pages/proxy/singerTable'))

const BlogList = AsyncComponent(() => import('@/pages/blog/list'))
const BlogDetail = AsyncComponent(() => import('@/pages/blog/detail'))
const BlogCreate = AsyncComponent(() => import('@/pages/blog/create'))

class CRouter extends Component {
	render() {
		return (
			<Router history={hashHistory}>
				<Route path={'/'} component={Test} />
				<Route path={'/'} component={DashBoard}>
					<IndexRedirect to="/index" />
					<Route path={'index'} component={Home} />
					<Route path={'ui/buttons'} component={Buttons} />
					<Route path={'ui/icons'} components={IconComp} />
					<Route path={'ui/flex'} components={FlexComp} />
					<Route path={'to/news'} components={News} />
					<Route path={'to/daynews'} components={DayNews} />
					<Route path={'to/tolearn'} components={ToLearn} />
					<Route path={'proxy/index'} components={ProxyIndex} />
					<Route path={'proxy/tree'} components={AreaTree} />
					<Route path={'proxy/singer'} components={SingerList} />
					<Route path={'blog/list'} components={BlogList} />
					<Route path={'blog/detail/:id'} components={BlogDetail} />
					<Route path={'blog/create'} components={BlogCreate} />
				</Route>
			</Router>
		)
	}
}
export default CRouter
