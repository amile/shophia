webpackHotUpdate(0,{

/***/ 5:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var valueList = (0, _jquery2.default)('.currency-selector__value');
	
	/* work variant
	
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
	
	function changeSelectedValue(event) {
		event.stopPropagation();
		var currentValue = (0, _jquery2.default)(this).text();
		var lastValue = (0, _jquery2.default)(valueList[0]).text();
		(0, _jquery2.default)(this).text(lastValue);
		(0, _jquery2.default)(valueList[0]).text(currentValue);
		(0, _jquery2.default)('select').val(currentValue);
		(0, _jquery2.default)('.currency-selector__value').removeClass('currency-selector__value_display_block');
		(0, _jquery2.default)(valueList[0]).addClass('currency-selector__value_display_block');
		(0, _jquery2.default)('.currency-selector__value').off('click', changeSelectedValue);
		(0, _jquery2.default)('.currency-selector').submit();
	}
	(0, _jquery2.default)('.currency-selector').click(function () {
	
		(0, _jquery2.default)('.currency-selector__value').addClass('currency-selector__value_display_block');
		(0, _jquery2.default)('.currency-selector__value').on('click', changeSelectedValue);
	});
	
	(0, _jquery2.default)('.main-menu__button_txt').click(function () {
		console.log('I"m button');
		(0, _jquery2.default)('.main-menu__menu').slideDown(600);
	});

/***/ }

})
//# sourceMappingURL=0.487b94ed736a3448c52f.hot-update.js.map