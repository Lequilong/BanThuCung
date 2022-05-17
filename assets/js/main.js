const btnOnTop = document.querySelector('.btn-on-top');
const btnMenu = document.querySelector('.btn-menu-mobile');
const menuMoblie = document.querySelector('.header__menu');
const modal = document.querySelector('.modal');


window.addEventListener('scroll', (e) => {
    if (window.scrollY > 300)
        btnOnTop.classList.add('active')
    else
        btnOnTop.classList.remove('active')
});

btnMenu.addEventListener('click', () => {
    handleCloseOpenMenu();
});
modal.addEventListener('click', () => {
    handleCloseOpenMenu();
});

const handleCloseOpenMenu = () => {
    btnMenu.classList.toggle('active');
    menuMoblie.classList.toggle('active');
    modal.classList.toggle('active');
}