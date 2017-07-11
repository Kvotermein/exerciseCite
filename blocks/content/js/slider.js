'use strict'
var sliderButtons = document.querySelectorAll('.firstbtn');
var sliderImages = document.querySelectorAll('.img')

for (var i = 0; i < sliderButtons.length; i++) {
	sliderButtons[i].onclick  = function () {
		if (!this.classList.contains('active')) {
			sliderSelect(this)
			this.classList.add('active')
		};
	}
}

function sliderSelect(id) {
	for (var i = 0; i < sliderButtons.length; i++) {
		sliderButtons[i].classList.remove('active')
		if (id===sliderButtons[i]) {
			for (var j = 0; j < sliderImages.length; j++) {
				sliderImages[j].classList.remove('active')
			}
			// sliderImages[i].style.background = 'url(../assets/img/img.jpg)'
			sliderImages[i].classList.add('active')
		}
	}

}