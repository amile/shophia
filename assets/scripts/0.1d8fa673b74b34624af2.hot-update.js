webpackHotUpdate(0,{

/***/ 6:
/***/ function(module, exports) {

	'use strict';
	
	console.log(document.getElementsByClassName('slider'));
	
	function Slideshow(element) {
		this.slider = document.getElementsByClassName(element)[0];
		this.slides = this.slider.querySelectorAll('slider__hero');
		this.currentSlide = 0;
		this.init();
	}
	Slideshow.prototype.init = function () {
		console.log(this.slides);
		setInterval(this.nextSlide, 2000);
	};
	Slideshow.prototype.nextSlide = function () {
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
//# sourceMappingURL=0.1d8fa673b74b34624af2.hot-update.js.map