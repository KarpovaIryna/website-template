;(function() {
	"use strict";
	new WOW().init();
	var mySwiper = new Swiper('.swiper-container', {
		loop: true,
		pagination: {
			el: '.ba-pagination',
			bulletClass: 'ba-empty',
			bulletActiveClass: 'ba-active',
			clickable: true,
		 },
	 })
})();

