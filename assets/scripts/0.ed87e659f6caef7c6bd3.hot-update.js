webpackHotUpdate(0,{

/***/ 5:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var valueList = (0, _jquery2.default)('.currency-selector__value');
	
	/* wark variant
	
	$('.currency-selector').click(function () {
		Array.prototype.forEach.call(valueList, function (el) {
			$(el).addClass('currency-selector__value_selected');
		});
		Array.prototype.forEach.call(valueList, function (el) {
			$(el).click(changeSelectedValue);
		});
	});
	function changeSelectedValue(event) {
		event.stopPropagation();
		const currentValue = $(this).text();
		const lastValue = $(valueList[0]).text();
		$(this).text(lastValue);
		$(valueList[0]).text(currentValue);
		Array.prototype.forEach.call(valueList, function (el) {
			console.log('none');
			if (el !== valueList[0]) {
				$(el).removeClass('currency-selector__value_selected');
			}
		});
		Array.prototype.forEach.call(valueList, function (el) {
			$(el).off();
		});
	} */
	
	/* const currencySelector = document.getElementsByClassName('currency-selector__selector')[0];
	
	const selectorOuptut = document.getElementsByClassName('currency-selector__value')[0];
	
	
	
	currencySelector.addEventListener('change', function () {
	
		const selectedValue = currencySelector.options[currencySelector.selectedIndex].value;
	
		selectorOuptut.innerHTML = selectedValue;
	}); */
	
	(0, _jquery2.default)('.currency-selector').click(function () {
	
		Array.prototype.forEach.call(valueList, function (el) {
			(0, _jquery2.default)(el).addClass('currency-selector__value_selected');
		});
		function print(event) {
			console.log((0, _jquery2.default)(event.target).text());
		}
		(0, _jquery2.default)(valueList[1]).click(print);
		Array.prototype.forEach.call(valueList, function (el) {
			(0, _jquery2.default)(el).click(changeSelectedValue);
		});
	});
	function changeSelectedValue(event) {
		event.stopPropagation();
		var currentValue = (0, _jquery2.default)(this).text();
		var lastValue = (0, _jquery2.default)(valueList[0]).text();
		(0, _jquery2.default)(this).text(lastValue);
		(0, _jquery2.default)(valueList[0]).text(currentValue);
		Array.prototype.forEach.call(valueList, function (el) {
			console.log('none');
			if (el !== valueList[0]) {
				(0, _jquery2.default)(el).removeClass('currency-selector__value_selected');
			}
		});
		Array.prototype.forEach.call(valueList, function (el) {
			(0, _jquery2.default)(el).off();
		});
	}

/***/ }

})
//# sourceMappingURL=0.ed87e659f6caef7c6bd3.hot-update.js.map