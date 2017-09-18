webpackHotUpdate(0,{

/***/ 6:
/***/ function(module, exports) {

	'use strict';
	
	function Slideshow(element) {
		this.slider = document.getElementsByClassName(element)[0];
		this.slides = this.slider.getElementsByClassName('slider__item');
		this.bullets = this.slider.getElementsByClassName('slider-nav__bullet');
		this.currentSlide = 0;
		this.bulletClassName = this.bullets[1].className;
		this.bulletClassNameActive = this.bullets[0].className;
		// this.init();
	}
	
	/* Slideshow.prototype = {	
	}; */
	
	Slideshow.prototype.init = function () {
		setInterval(this.nextSlide.bind(this), 4000);
	};
	Slideshow.prototype.nextSlide = function () {
		this.slides[this.currentSlide].style.display = 'none';
		this.bullest[this.currentSlide].className = this.bulletClassName;
		this.currentSlide = (this.currentSlide + 1) % this.slides.length;
		this.slides[this.currentSlide].style.display = 'block';
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
	
	slider.init();

/***/ }

})
//# sourceMappingURL=0.1adfb8dd165421d32e3c.hot-update.js.map