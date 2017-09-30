webpackHotUpdate(0,{

/***/ 8:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var subscribeForm = document.getElementsByClassName('form_subscribe')[0]; /* const subscribeForm = document.getElementsByClassName('form_subscribe')[0];
	                                                                          let data = 'email=';
	                                                                          
	                                                                          subscribeForm.addEventListener('submit', function (event) {
	                                                                          	data += subscribeForm.elements.email.value;
	                                                                          	console.log(data.email);
	                                                                          	const xml = new XMLHttpRequest();
	                                                                          	xml.open('POST', '/subscribe', true);
	                                                                          	xml.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	                                                                          	xml.send(data);
	                                                                          	event.preventDefault();
	                                                                          }); */
	
	console.log(encodedURIComponent(subscribeForm.elements.email.value));
	
	(0, _jquery2.default)('.form_subscribe').submit(function (event) {
		var $form = (0, _jquery2.default)(this);
		_jquery2.default.ajax({
			type: 'POST',
			url: '/subscribe',
			data: $form.serialize()
		});
		event.preventDefault();
	});

/***/ }

})
//# sourceMappingURL=0.fcbfa816718686d400a2.hot-update.js.map