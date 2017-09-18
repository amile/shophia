webpackHotUpdate(0,{

/***/ 5:
/***/ function(module, exports) {

	'use strict';
	
	var currencySelector = document.getElementsByClassName('currency-selector__selector')[0];
	
	var selectorOuptut = document.getElementsByClassName('currency-selector__value')[0];
	
	currencySelector.addEventListener('change', function () {
	
		var selectedValue = currencySelector.options[currencySelector.selectedIndex].value;
	
		selectorOuptut.innerHTML = selectedValue;
	});

/***/ }

})
//# sourceMappingURL=0.c34c7eb5159920d3062b.hot-update.js.map