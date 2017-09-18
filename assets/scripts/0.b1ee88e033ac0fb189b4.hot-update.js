webpackHotUpdate(0,{

/***/ 5:
/***/ function(module, exports) {

	'use strict';
	
	var currencySelector = document.getElementsByClassName('currency-selector__selector')[0];
	
	var selectorOuptut = document.getElementsByClassName('currency-selector__value')[0];
	
	var selectedValue = currencySelector.options[currencySelector.selectedIndex].value;
	
	selectorOuptut.innerHTML = selectedValue;
	
	currencySelector.addEventListener('change', function (event) {
		console.log('hi');
	});

/***/ }

})
//# sourceMappingURL=0.b1ee88e033ac0fb189b4.hot-update.js.map