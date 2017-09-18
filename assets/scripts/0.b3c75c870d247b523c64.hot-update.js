webpackHotUpdate(0,{

/***/ 5:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _jquery2.default)(document).ready(function () {
		console.log('hi');
		(0, _jquery2.default)('.currency-selector').click(function () {
			console.log(this);
		});
	}); /* const currencySelector = document.getElementsByClassName('currency-selector__selector')[0];
	    
	    const selectorOuptut = document.getElementsByClassName('currency-selector__value')[0];
	    
	    
	    
	    currencySelector.addEventListener('change', function () {
	    
	    	const selectedValue = currencySelector.options[currencySelector.selectedIndex].value;
	    
	    	selectorOuptut.innerHTML = selectedValue;
	    }); */

/***/ }

})
//# sourceMappingURL=0.b3c75c870d247b523c64.hot-update.js.map