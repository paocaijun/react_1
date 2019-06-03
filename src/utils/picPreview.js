/*    图片预览插件，在todo/news.js中使用，componentDidMount调用
 **    传入的ele为定义img 的class
 */
;(function(global) {
	'use strict'
	var yPreview = function() {}
	// 有必要调用到插件本身this的， 就放在prototype上边， 功能函数尽量放在下方工具中
	yPreview.prototype = {
		// 默认配置
		options: {
			name: 'yPreview',
			elem: 'preview-images'
		},
		index: null,
		init: function(opts) {
			var _this = this
			var option = config(opts, this.options) //用户配置
			var _elems = document.getElementsByClassName(option.elem) // img标签
			var _elemsLength = _elems.length
			initPreviewArea(_elems)
			var yPreviewImage = document.getElementById('yPreviewImage')
			var yPreviewArea = document.getElementById('yPreviewArea')
			for (var i = 0; i < _elemsLength; i++) {
				_elems[i].setAttribute('data-id', i)
				_elems[i].style.cursor = 'pointer'
				_elems[i].addEventListener('click', function() {
					var src = this.getAttribute('src')
					yPreviewImage.setAttribute('src', src)
					yPreviewImage.setAttribute('data-id', this.getAttribute('data-id'))
					show(yPreviewArea)
				})
			}
		}
	}
	function hide(elem) {
		elem.style.display = 'none'
	}
	function show(elem) {
		elem.style.display = 'block'
	}
	function setStyle(elem, styles) {
		for (var key in styles) {
			elem.style[key] = styles[key]
		}
	}
	function initPreviewArea(elems) {
		var elemsLength = elems.length

		var div = document.createElement('div')
		div.setAttribute('id', 'yPreviewArea')
		var divStyle = {
			position: 'fixed',
			top: 0,
			left: 0,
			width: '100%',
			height: window.innerHeight + 'px',
			background: 'rgba(0, 0, 0, .6)',
			display: 'none',
			userSelect: 'none'
		}
		var img = document.createElement('img')
		img.setAttribute('id', 'yPreviewImage')
		var imgStyle = {
			position: 'relative',
			top: '50%',
			left: '50%',
			maxHeight: window.innerHeight + 'px'
		}
		setStyle(img, imgStyle)
		img.style.transform = 'translate(-50%, -50%)'
		// img.addEventListener('click', function () {
		//   div.style.display = 'none';
		// })
		div.appendChild(img)

		var next = document.createElement('a')
		next.innerText = '>'
		var nextStyle = {
			position: 'absolute',
			top: '50%',
			right: 0,
			margin: '12px',
			width: '42px',
			height: '42px',
			lineHight: '42px',
			display: 'block',
			background: '#1E67B9',
			cursor: 'pointer',
			color: '#fff',
			textAlign: 'center',
			fontSize: '27px',
			borderRadius: '50%'
		}
		setStyle(next, nextStyle)
		next.addEventListener('click', function() {
			var idx = img.getAttribute('data-id')
			if (elemsLength - 1 > idx) {
				var _idx = parseInt(idx)
				img.setAttribute('src', elems[_idx + 1].getAttribute('src'))
				img.setAttribute('data-id', elems[_idx + 1].getAttribute('data-id'))
			} else {
				img.setAttribute('src', elems[0].getAttribute('src'))
				img.setAttribute('data-id', elems[0].getAttribute('data-id'))
			}
		})
		div.appendChild(next)

		var prev = document.createElement('a')
		prev.innerText = '<'
		var prevStyle = {
			position: 'absolute',
			top: '50%',
			left: 0,
			margin: '12px',
			width: '42px',
			height: '42px',
			lineHight: '42px',
			display: 'block',
			background: '#1E67B9',
			cursor: 'pointer',
			color: '#fff',
			textAlign: 'center',
			fontSize: '27px',
			borderRadius: '50%'
		}
		setStyle(prev, prevStyle)
		prev.addEventListener('click', function() {
			var idx = img.getAttribute('data-id')
			if (idx != 0) {
				var _idx = parseInt(idx)
				console.log(elems[_idx - 1].getAttribute('src'))
				img.setAttribute('src', elems[_idx - 1].getAttribute('src'))
				img.setAttribute('data-id', elems[_idx - 1].getAttribute('data-id'))
			} else {
				img.setAttribute('src', elems[elemsLength - 1].getAttribute('src'))
				img.setAttribute('data-id', elems[elemsLength - 1].getAttribute('data-id'))
			}
		})
		div.appendChild(prev)

		var close = document.createElement('a')
		close.innerText = '×'
		var closeStyle = {
			position: 'absolute',
			top: '12px',
			right: '12px',
			display: 'block',
			fontSize: '32px',
			color: '#fff',
			cursor: 'pointer',
			zIndex: 99
		}
		close.addEventListener('click', function() {
			hide(div)
		})
		setStyle(close, closeStyle)
		div.appendChild(close)

		setStyle(div, divStyle)
		document.body.appendChild(div)
	}
	function config(opts, options) {
		//默认参数
		if (!opts) return options
		for (var key in opts) {
			if (!!opts[key]) {
				options[key] = opts[key]
			}
		}
		return options
	}
	global.yPreview = yPreview //注册到全局中，暴露出去 届时可以直接new yPreview() 实例化对象
})(window)
// this全局变量：window or global(nodejs下的全局变量)
