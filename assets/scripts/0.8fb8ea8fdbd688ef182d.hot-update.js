webpackHotUpdate(0,{

/***/ 7:
/***/ function(module, exports) {

	'use strict';
	
	var subscribeForm = document.getElementsByClassName('form_subscribe')[0];
	
	subscribeForm.addEventListener('submit', function (event) {
		event.preventDefault();
		var data = subscribeForm.elements.name.email.value;
		console.log(data);
		var xml = new XMLHttpRequest();
		xml.open('POST', '', true);
		xml.setRequestHeader('Content-Type', '');
	
		xml.send(data);
	});

/***/ }

})
//# sourceMappingURL=0.8fb8ea8fdbd688ef182d.hot-update.js.map