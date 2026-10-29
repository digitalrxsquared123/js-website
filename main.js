const mobileMenu = document.querySelector('#mobile-menu');
const menu = document.querySelector('.navbar_menu');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('is-active');
    menu.classList.toggle('active');
});



