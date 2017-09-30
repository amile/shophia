webpackHotUpdate(0,{

/***/ 8:
/***/ function(module, exports) {

	'use strict';
	
	var subscribeForm = document.getElementsByClassName('form_subscribe')[0];
	var data = 'email=';
	
	subscribeForm.addEventListener('submit', function (event) {
		data += subscribeForm.elements.email.value;
		console.log(data.email);
		var xml = new XMLHttpRequest();
		xml.open('POST', '/subscribe', true);
		xml.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		xml.send(data);
		event.preventDefault();
	});
	
	$('form_subscribe').submit(function (e) {
		var $form = $(this);
		$.ajax({
			type: 'POST',
			url: '/subscribe',
			data: $form.serialize(),
			success: function success() {}
		});
		e.preventDefault();
	});

/***/ }

})
//# sourceMappingURL=0.47b1488264b545043d55.hot-update.js.map