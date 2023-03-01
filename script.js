let toggle = document.querySelector('.toggle');
let nav = document.querySelector('.nav-bar')
let sun = document.querySelector('.moon');
// sun switch function
toggle.addEventListener('click', () => {
    document.body.classList.toggle('body-dark');
    nav.classList.toggle('nav-bar-dark');
	toggle.classList.toggle('toggle-day');	
	if(sun.src.match('Images/icon-moon.svg')){
		sun.src = 'Images/icon-sun.svg';
		sun.classList.add('sun')
	 } else{
		sun.src= 'Images/icon-moon.svg'
	 }
	});

//hamburger icon
window.onload = function () {
	window.addEventListener('scroll', function (e) {
		if (window.pageYOffset > 100) {
			document.querySelector("header").classList.add('is-scrolling');
		} else {
			document.querySelector("header").classList.remove('is-scrolling');
		}
	});

	const menu_btn = document.querySelector('.hamburger');
	const mobile_menu = document.querySelector('.mobile-nav');

	menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('is-active');
		mobile_menu.classList.toggle('is-active');
	});
}
