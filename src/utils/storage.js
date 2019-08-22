import utils from './misc'
class Storage {
	constructor(storage) {
		this.storage = storage
	}
	set(key, value) {
		!utils.isEmpty(value) && this.storage.setItem(key, value)
	}
	setObj(key, value) {
		if (utils.isEmpty(value) || typeof value !== 'object') return
		value = JSON.stringify(value)
		this.storage.setItem(key, value)
	}
	get(key) {
		return this.storage.getItem(key)
	}
	getObj(key) {
		let val = this.storage.getItem(key)
		if (val === null) return val
		try {
			val = JSON.parse(val)
		} catch (err) {
			console.log('err', err)
		}
		return val
	}
	remove(key) {
		this.storage.removeItem(key)
	}
	clear() {
		this.storage.clear()
	}
}
let defaultStorage = window.localStorage
export default {
	getDefaultStorage() {
		//  方便用于之前全部存在local需要切换存到session里面时
		return new Storage(defaultStorage)
	},
	getLocalStorage() {
		return new Storage(window.localStorage)
	},
	getSessionStorage() {
		return new Storage(window.sessionStorage)
	}
}
