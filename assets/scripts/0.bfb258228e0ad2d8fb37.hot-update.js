webpackHotUpdate(0,{

/***/ 6:
/***/ function(module, exports) {

	'use strict';
	
	function Slideshow(element) {
		this.slider = document.querySelector(element);
		this.currentSlide = 0;
		this.init();
	}
	Slideshow.prototype.init = function () {
		this.slides = this.slider.querySelectorAll('slider__hero');
		setInterval(this.nextSlide, 2000);
	};
	Slideshow.prototype.nextSlide = function () {
		console.log('hello');
		this.slides[this.currentSlide].display = 'none';
		this.currentSlide = (currentSlide + 1) % this.slides.length;
		this.slides[this.currentSlide].display = 'block';
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

/***/ }

})
//# sourceMappingURL=0.bfb258228e0ad2d8fb37.hot-update.js.map