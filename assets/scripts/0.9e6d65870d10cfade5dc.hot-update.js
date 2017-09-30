webpackHotUpdate(0,{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _svg4everybody = __webpack_require__(1);
	
	var _svg4everybody2 = _interopRequireDefault(_svg4everybody);
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	__webpack_require__(5);
	
	__webpack_require__(6);
	
	__webpack_require__(8);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _jquery2.default)(function () {
		(0, _svg4everybody2.default)();
	});

/***/ },

/***/ 8:
/***/ function(module, exports) {

	'use strict';
	
	var subscribeForm = document.getElementsByClassName('form_subscribe')[0];
	
	subscribeForm.addEventListener('submit', function (event) {
		event.preventDefault();
		var data = subscribeForm.elements.email.value;
		console.log(data);
		var xml = new XMLHttpRequest();
		xml.open('POST', '', true);
		xml.setRequestHeader('Content-Type', '');
		xml.send(data);
	});

/***/ }

})
//# sourceMappingURL=0.9e6d65870d10cfade5dc.hot-update.js.map