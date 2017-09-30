webpackHotUpdate(0,{

/***/ 8:
/***/ function(module, exports) {

	'use strict';
	
	/* const subscribeForm = document.getElementsByClassName('form_subscribe')[0];
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
	
	$('form_subscribe').submit(function (event) {
		var $form = $(this);
		console.log($form.serialize());
		$.ajax({
			type: 'POST',
			url: '/subscribe',
			data: $form.serialize()
		});
		event.preventDefault();
	});

/***/ }

})
//# sourceMappingURL=0.f68d0ba8b60fe9d6add4.hot-update.js.map