webpackJsonp([9],{

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _icon = __webpack_require__(51);

var _icon2 = _interopRequireDefault(_icon);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(154);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IconComp = function (_Component) {
	_inherits(IconComp, _Component);

	function IconComp() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, IconComp);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = IconComp.__proto__ || Object.getPrototypeOf(IconComp)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			iconData: ['home', 'google', 'facebook', 'codepen', 'amazon', 'gitlab', 'qq', 'twitter', 'apple', 'robot', 'android', 'smile', 'setting'],
			aa: {
				key: 'data',
				value: '',
				children: [{
					key: 'pageNo',
					value: "true|number|'分页页数'"
				}, {
					key: 'pageSize',
					value: "true|number|'分页条数'"
				}, {
					key: 'result',
					value: '',
					children: [{
						key: 'id',
						value: "true|number|'编码'"
					}, {
						key: 'status',
						value: "true|number|'状态'"
					}]
				}]
			}
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(IconComp, [{
		key: 'render',
		value: function render() {
			var iconList = [];
			this.state.iconData.forEach(function (item) {
				iconList.push(_react2.default.createElement(
					'div',
					{ className: 'icon-item', key: item },
					_react2.default.createElement(_icon2.default, { type: item }),
					_react2.default.createElement(
						'div',
						null,
						item
					)
				));
			});
			console.log('iconList', iconList);
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
						'\u56FE\u6807'
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'button-part icon-part' },
					iconList
				)
			);
		}
	}]);

	return IconComp;
}(_react.Component);

exports.default = IconComp;

/***/ })

});
//# sourceMappingURL=9-d435d17673b1b7085b8b.js.map