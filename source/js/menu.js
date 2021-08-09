const toggleButton = document.querySelector('.main-nav__toggle');
const navBar = document.querySelector('.main-nav');
const body = document.querySelector('body');
toggleButton.addEventListener('click', function() {
    body.classList.toggle('no-scroll');
    navBar.classList.toggle('toggle');
});
