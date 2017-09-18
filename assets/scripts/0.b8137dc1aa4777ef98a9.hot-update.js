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
	
	function hideMenu() {
		console.log('I"m clicked');
		(0, _jquery2.default)('.main-menu__menu').slideUp(600);
		(0, _jquery2.default)('.main-menu').off('click', hideMenu);
	}
	
	function showMenu() {
		console.log('I"m button');
		(0, _jquery2.default)('.main-menu__menu').slideDown(600);
		(0, _jquery2.default)('.main-menu').on('click', hideMenu);
	}
	
	(0, _jquery2.default)('.main-menu').on('click', showMenu);

/***/ }

})
//# sourceMappingURL=0.b8137dc1aa4777ef98a9.hot-update.js.map