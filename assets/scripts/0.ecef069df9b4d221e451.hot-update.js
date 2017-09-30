webpackHotUpdate(0,{

/***/ 8:
/***/ function(module, exports) {

	'use strict';
	
	var subscribeForm = document.getElementsByClassName('form_subscribe')[0];
	
	subscribeForm.addEventListener('submit', function (event) {
		event.preventDefault();
		var data = subscribeForm.elements.email.value;
		console.log(data);
		var xml = new XMLHttpRequest();
		xml.open('POST', '/subscribe', true);
		xml.setRequestHeader('Content-Type', '');
		xml.send(data);
	});

/***/ }

})
//# sourceMappingURL=0.ecef069df9b4d221e451.hot-update.js.map