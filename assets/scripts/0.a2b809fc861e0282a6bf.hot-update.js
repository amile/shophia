webpackHotUpdate(0,{

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
	
	/* Slideshow.prototype.userClick = function () {
		const self = this;
		for (let ind = 0; ind <= self.bullets.length; ind++) {
	
			self.bullets[ind].addEventListener('click', function () {
	
			});
		}
	};
	
	Slideshow.prototype = {
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
//# sourceMappingURL=0.a2b809fc861e0282a6bf.hot-update.js.map