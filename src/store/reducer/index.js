import { combineReducers } from 'redux'
import common from './common'
import todo from './todo'
import news from './news'

export default combineReducers({ common, todo, news })
