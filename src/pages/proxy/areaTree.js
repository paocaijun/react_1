import React from 'react'
import { Tree } from 'antd'
import api from '@/utils/api'
import '@/layouts/css/pages/proxy.scss'
const { TreeNode } = Tree
class AreaTree extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			treeData: [],
			handledArr: []
		}
	}
	nodeSelect(node) {
		console.log('node', node)
	}
	initTreeData() {
		api.getAreaTree({ userName: 'tom', password: '2222' }).then(res => {
			this.state.treeData = this.handleTree(res)
			this.loopFn(this.state.treeData)
		})
	}
	handleTree(arr) {
		function SearchParent(id, child, pArr) {
			pArr.map(line => {
				if (line.id === id) {
					let children = line.child || []
					children.push(child)
					line.child = children
				} else {
					line.child && line.child.length > 0 ? SearchParent(id, child, line.child) : ''
				}
			})
		}
		for (let i = 0; i < arr.length; i++) {
			let item = arr[i]
			if (item.pid) {
				let child = arr.splice(i, 1)
				i--
				SearchParent(item.pid, child[0], arr)
			}
		}
		return arr
	}
	// 循环树，生成Dom结构
	loopFn = brr => {
		function loop(arr) {
			return (
				arr.length > 0 &&
				arr.map(item => {
					if (item.child && item.child.length > 0) {
						return (
							<TreeNode title={item.label} key={item.id}>
								{loop(item.child)}
							</TreeNode>
						)
					}
					return <TreeNode title={item.label} key={item.id} />
				})
			)
		}
		this.state.handledArr = loop(brr)
	}
	componentWillMount() {
		console.log('mounted tree')
		this.initTreeData()
	}
	// 递归查找.pnode
	findTarget(target) {
		if (target.className && target.className.indexOf('pnode') > -1) {
			console.log('target is' + target)
		} else {
			this.findTarget(target.parentNode)
		}
	}
	render() {
		return (
			<div className="tree-main">
				<h3>地区数据结构</h3>
				<Tree defaultExpandAll showLine onSelect={this.nodeSelect}>
					{this.state.handledArr}
					<TreeNode title="parent 1-0" key="0-0-0">
						<TreeNode title="leaf" key="0-0-0-0" />
						<TreeNode title="leaf" key="0-0-0-1" />
					</TreeNode>
				</Tree>
				<div className="pnode" onClick={ev => this.findTarget(ev.target)}>
					<div className="part1">head</div>
					<div className="part2 test">
						<h3>title:</h3>
						<div>这是主要的</div>
					</div>
				</div>
			</div>
		)
	}
}
export default AreaTree
