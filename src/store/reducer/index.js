import { combineReducers } from 'redux'
import common from './common'
import todo from './todo'
import news from './news'

export default combineReducers({ common, todo, news })
// 以上reducer会挨个执行
// 一个action可能匹配多个reducer(case 匹配上就行)，可能修改多个状态，connect的第一个参数取想要的reducer对应的state就行
