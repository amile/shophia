webpackHotUpdate(0,{

/***/ 5:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var valueList = (0, _jquery2.default)('.currency-selector__value'); /* const currencySelector = document.getElementsByClassName('currency-selector__selector')[0];
	                                                                    
	                                                                    const selectorOuptut = document.getElementsByClassName('currency-selector__value')[0];
	                                                                    
	                                                                    
	                                                                    
	                                                                    currencySelector.addEventListener('change', function () {
	                                                                    
	                                                                    	const selectedValue = currencySelector.options[currencySelector.selectedIndex].value;
	                                                                    
	                                                                    	selectorOuptut.innerHTML = selectedValue;
	                                                                    }); */
	
	var valueSelected = (0, _jquery2.default)('.currency-selector__value_selected');
	
	console.log(valueList);
	
	(0, _jquery2.default)('.currency-selector').click(function () {
		Array.prototype.forEach.call(valueList, function (el) {
			el.addClass('currency-selector__value_selected');
		});
		for (var i = 0; i < valueList.length; i++) {
			(0, _jquery2.default)(valueList[i]).click(function (event) {
				event.stopPropagation();
				console.log('value');
				Array.prototype.forEach.call(valueList, function (el) {
					console.log('none');
					if (el !== this) {
						el.removeClass('currency-selector__value_selected');
					}
				});
			});
		}
	});

/***/ }

})
//# sourceMappingURL=0.916461176ace9fd38d06.hot-update.js.map