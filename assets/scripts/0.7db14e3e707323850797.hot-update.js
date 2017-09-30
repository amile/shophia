webpackHotUpdate(0,{

/***/ 8:
/***/ function(module, exports) {

	'use strict';
	
	var subscribeForm = document.getElementsByClassName('form_subscribe')[0];
	var data = { email: '' };
	
	subscribeForm.addEventListener('submit', function (event) {
		data.email = subscribeForm.elements.email.value;
		console.log(data.email);
		var xml = new XMLHttpRequest();
		xml.open('POST', '/subscribe', true);
		xml.setRequestHeader('Content-Type', '');
		xml.send(data);
		event.preventDefault();
	});

/***/ }

})
//# sourceMappingURL=0.7db14e3e707323850797.hot-update.js.map