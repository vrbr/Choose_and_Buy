const filterButton = document.querySelector('.filter-button__btn');
const filterPopup = document.querySelector('.popup-filter');
const closePopup = document.querySelector('.popup-filter-close');
const buttonTransparent = document.querySelector('.button-transparent');

filterButton.addEventListener('click', function () {
    filterPopup.style.opacity = '1';
    filterPopup.style.visibility = 'visible';
});

closePopup.addEventListener('click', function () {
    filterPopup.style.visibility = 'hidden';
});

buttonTransparent.addEventListener('mouseup', function () {
    buttonTransparent.style.backgroundColor = "transparent";
});