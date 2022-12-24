//// burger menu
if (window.getComputedStyle(document.querySelector('.nav__icon')).display != "none") {
	let icon = document.querySelector('.nav__icon');
	let nav = document.querySelector('.nav__links');
	icon.addEventListener("click", function (e) {
		icon.classList.toggle('active');
		nav.classList.toggle('active');
	});
}
