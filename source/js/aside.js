const link = document.querySelector('.aside-category__link');
const item = document.querySelector(".aside-category__item");

link.addEventListener('click', function() {
    if(item.classList.contains('aside-category__item-current')) {
         item.classList.add('aside-category__item-current');
    } else {
        item.classList.remove('aside-category__item-current');
    }
});