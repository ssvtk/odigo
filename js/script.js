(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 100) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
        }
    };
}());


//BURGER handler
(function () {
    const burger = document.querySelector('.burger');
    const headerNav = document.querySelector('.header__nav')
    const headerNavClose = document.querySelector('.header__nav-close')
    burger.addEventListener('click', () => {
        headerNav.classList.add('header__nav_active');
    })
    headerNavClose.addEventListener('click', () => {
        headerNav.classList.remove('header__nav_active');
    })

}())
