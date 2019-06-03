webpackJsonp([8],{

/***/ 1459:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(1460);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(13)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/lib/loader.js?sourceMap!./flex.scss", function() {
		var newContent = require("!!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/lib/loader.js?sourceMap!./flex.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1460:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// Imports
var urlEscape = __webpack_require__(174);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(657));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(1461));

// Module
exports.push([module.i, "@charset \"UTF-8\";\n.flex-section {\n  padding: 30px;\n  background-color: #fff; }\n  .flex-section .wrap {\n    display: flex;\n    width: 600px;\n    margin-bottom: 20px;\n    /*已占宽度为100+100px+200，剩余宽度为600-400=200,拉伸系数为2+2+1=5,200/5=40。所以left:100+2*40=180;center:180px;right:280*/ }\n    .flex-section .wrap .left {\n      background: pink;\n      flex: 2 1 100px;\n      /* flex-basis为具体值或者%时，width失效,0%代表无宽度*/\n      width: 200px;\n      /*无效*/ }\n    .flex-section .wrap .center {\n      background: lightyellow;\n      flex: 2 1 auto;\n      width: 100px; }\n    .flex-section .wrap .right {\n      background: lightblue;\n      flex: 1 1 200px; }\n  .flex-section .outer {\n    display: flex;\n    width: 600px;\n    margin-bottom: 20px;\n    background-color: #ded; }\n    .flex-section .outer .item {\n      border: 1px solid #89e;\n      height: 40px;\n      flex: 1;\n      /*拉伸占用剩余空间*/ }\n    .flex-section .outer .item1 {\n      flex: 0 0 50%; }\n    .flex-section .outer .item2 {\n      width: 50px;\n      flex-shrink: 0;\n      /*不拉伸*/ }\n  .flex-section .cup {\n    display: flex;\n    flex-direction: column;\n    width: 600px;\n    height: 240px;\n    background-color: #992; }\n    .flex-section .cup > div {\n      padding: 6px 0; }\n    .flex-section .cup .header {\n      background-color: lightblue; }\n    .flex-section .cup .body {\n      background-color: #ded;\n      flex: 1;\n      display: flex; }\n      .flex-section .cup .body .left,\n      .flex-section .cup .body .center,\n      .flex-section .cup .body .right {\n        border: 1px dashed #989;\n        width: 100px; }\n      .flex-section .cup .body .center {\n        flex: 1; }\n    .flex-section .cup .footer {\n      background-color: lightblue; }\n  .flex-section .ul li:nth-child(3n) {\n    height: 50px;\n    width: 600px;\n    background: url(" + ___CSS_LOADER_URL___0___ + ") top left no-repeat, url(" + ___CSS_LOADER_URL___1___ + ") bottom right no-repeat;\n    background-size: contain; }\n  .flex-section .ul li:nth-child(4n + 1) {\n    background-color: pink;\n    transition: all 1s ease; }\n    .flex-section .ul li:nth-child(4n + 1):hover {\n      background-color: #6a6; }\n\n@keyframes showDiv {\n  0% {\n    top: 0;\n    left: 0; }\n  100% {\n    top: 200px;\n    left: 100px; } }\n", ""]);



/***/ }),

/***/ 1461:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/t.jpg";

/***/ }),

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(1459);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FlexComp = function (_React$Component) {
	_inherits(FlexComp, _React$Component);

	function FlexComp(props) {
		_classCallCheck(this, FlexComp);

		var _this = _possibleConstructorReturn(this, (FlexComp.__proto__ || Object.getPrototypeOf(FlexComp)).call(this, props));

		_this.state = {};

		_this.skin = 'white';
		_this.eyeColor = 'white';
		return _this;
	}

	_createClass(FlexComp, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			console.log('this', this.skin, this.props);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'ui-page common-page' },
				_react2.default.createElement(
					'div',
					{ className: 'bread' },
					_react2.default.createElement(
						'span',
						null,
						'UI'
					),
					_react2.default.createElement(
						'span',
						null,
						'/'
					),
					_react2.default.createElement(
						'span',
						null,
						'\u5F39\u6027\u5E03\u5C40'
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'flex-section' },
					_react2.default.createElement(
						'div',
						{ className: 'wrap ' },
						_react2.default.createElement(
							'div',
							{ className: 'left' },
							'LEFT'
						),
						_react2.default.createElement(
							'div',
							{ className: 'center' },
							_react2.default.createElement(
								'p',
								null,
								'CENTER'
							),
							_react2.default.createElement(
								'p',
								null,
								'CENTER'
							),
							_react2.default.createElement(
								'p',
								null,
								'CENTER'
							),
							_react2.default.createElement(
								'p',
								null,
								'CENTER'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'right' },
							'RIGHT'
						)
					),
					_react2.default.createElement(
						'p',
						null,
						'\u67D0\u4E00\u9879\u5BBD\u5EA6\u56FA\u5B9A'
					),
					_react2.default.createElement(
						'div',
						{ className: 'outer ' },
						_react2.default.createElement(
							'div',
							{ className: 'item item1' },
							'50%'
						),
						_react2.default.createElement(
							'div',
							{ className: 'item item2' },
							'50px'
						),
						_react2.default.createElement(
							'div',
							{ className: 'item' },
							'shrink'
						),
						_react2.default.createElement(
							'div',
							{ className: 'item' },
							'shrink'
						)
					),
					_react2.default.createElement(
						'p',
						null,
						'\u5723\u676F\u9020\u578B'
					),
					_react2.default.createElement(
						'div',
						{ className: 'cup' },
						_react2.default.createElement(
							'div',
							{ className: 'header' },
							'\u5934\u90E8'
						),
						_react2.default.createElement(
							'div',
							{ className: 'body' },
							_react2.default.createElement(
								'div',
								{ className: 'left' },
								'left'
							),
							_react2.default.createElement(
								'div',
								{ className: 'center' },
								'center',
								_react2.default.createElement(
									'p',
									null,
									'pTag'
								),
								_react2.default.createElement(
									'p',
									null,
									'pTag'
								)
							),
							_react2.default.createElement(
								'div',
								{ className: 'right' },
								'right'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'footer' },
							'\u5E95\u90E8'
						)
					)
				)
			);
		}
	}]);

	return FlexComp;
}(_react2.default.Component);

exports.default = FlexComp;

/***/ }),

/***/ 657:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/2.jpg";

/***/ })

});
//# sourceMappingURL=8-758961ab418ff6059de5.js.map