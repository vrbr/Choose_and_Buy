if (document.documentElement.clientWidth > 767) {
    let input1 = document.querySelector(".about__checkbox-1");
    let input2 = document.querySelector(".about__checkbox-2");
    let input3 = document.querySelector(".about__checkbox-3");
    input1.checked = false;
    input2.checked = false;
    input3.checked = false;
} else {
    input1.checked = true;
    input2.checked = true;
    input3.checked = true;
};