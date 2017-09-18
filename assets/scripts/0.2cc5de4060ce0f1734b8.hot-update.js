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
			(0, _jquery2.default)(el).addClass('currency-selector__value_selected');
		});
	
		var _loop = function _loop(i) {
			(0, _jquery2.default)(valueList[i]).click(function (event) {
				event.stopPropagation();
				console.log((0, _jquery2.default)(valueList[i]).text());
				Array.prototype.forEach.call(valueList, function (el) {
					console.log('none');
					if (el !== valueList[i]) {
						(0, _jquery2.default)(el).removeClass('currency-selector__value_selected');
					}
				});
			});
		};
	
		for (var i = 0; i < valueList.length; i++) {
			_loop(i);
		}
	});

/***/ }

})
//# sourceMappingURL=0.2cc5de4060ce0f1734b8.hot-update.js.map