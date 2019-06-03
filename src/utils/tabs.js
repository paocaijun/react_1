// es6类的练习
class Tabs {
	constructor(id) {
		this.oBox = document.querySelector(`#${id}`)
		if (this.oBox) {
			this.btns = this.oBox.querySelectorAll('.btns')
			this.innerBox = this.oBox.querySelectorAll('.inner-box')
			this.init()
		}
	}
	init() {
		for (let i = 0; i < this.btns.length; i++) {
			this.btns[i].onclick = function() {
				console.log('this', this)
				this.hide()
				this.show(i)
			}.bind(this)
		}
	}
	hide() {
		for (let i = 0; i < this.btns.length; i++) {
			this.btns[i].classList.contains('on') && this.btns[i].classList.remove('on')
			this.innerBox[i].classList.contains('show') && this.innerBox[i].classList.remove('show')
		}
	}
	show(index) {
		this.btns[index].classList.add('on')
		this.innerBox[index].classList.add('show')
	}
}
export default Tabs
