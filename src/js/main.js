const headerNav = document.querySelector('.header__nav');
const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
	burger.classList.toggle('active');
	headerNav.classList.toggle('active');
});
