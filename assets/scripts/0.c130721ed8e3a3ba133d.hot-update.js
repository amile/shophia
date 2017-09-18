webpackHotUpdate(0,{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _svg4everybody = __webpack_require__(1);
	
	var _svg4everybody2 = _interopRequireDefault(_svg4everybody);
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	__webpack_require__(5);
	
	__webpack_require__(6);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _jquery2.default)(function () {
		(0, _svg4everybody2.default)();
	});

/***/ },

/***/ 6:
/***/ function(module, exports) {

	'use strict';
	
	function Slideshow(element) {
		this.slider = document.getElementsByClassName(element)[0];
		this.slides = this.slider.getElementsByClassName('slider__item');
		this.bullets = this.slider.getElementsByClassName('slider-nav__bullet');
		this.slideClassName = this.slides[this.currentSlide + 1].className;
		this.slideClassNameActive = this.slides[this.currentSlide].className;
		this.bulletClassName = this.bullets[this.currentSlide + 1].className;
		this.bulletClassNameActive = this.bullets[this.currentSlide].className;
	}
	
	Slideshow.prototype.interval = function () {
		setInterval(this.nextSlide.bind(this), 3000);
	};
	
	Slideshow.prototype.nextSlide = function () {
		this.slides[this.currentSlide].className = this.slideClassName;
		this.bullets[this.currentSlide].className = this.bulletClassName;
		this.currentSlide = (this.currentSlide + 1) % this.slides.length;
		this.slides[this.currentSlide].className = this.slideClassNameActive;
		this.bullets[this.currentSlide].className = this.bulletClassNameActive;
	};
	Slideshow.prototype.userClick = function () {
		var self = this;
		for (ind = 0; ind <= self.bullets.length; ind++) {
	
			bullet.addEventListener('click', function () {});
		}
	};
	
	/* Slideshow.prototype = {
		init: function () {
			this.slides = this.slider.querySelectorAll('slider__hero');
			this.currentSlide = 0;
			setInterval(this.nextSlide, 2000);
		nextSlide: function () {
			this.slides[this.currentSlide].display = 'none';
			this.currentSlide = (currentSlide + 1) % this.slides.length;
			this.slides[this.currentSlide].display = 'block';
		}
	}; */
	
	var slider = new Slideshow('slider');
	
	slider.interval();

/***/ }

})
//# sourceMappingURL=0.c130721ed8e3a3ba133d.hot-update.js.map