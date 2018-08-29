document.addEventListener('DOMContentLoaded', () => {
    const navbarBurger = document.getElementById('navbar-burger');
    const navbarMenu = document.getElementById('navbar-menu');

    function toggleBurger() {
        navbarBurger.classList.toggle('is-active');
        navbarMenu.classList.toggle('is-active');
    }

    navbarBurger.addEventListener('click', toggleBurger);
    navbarBurger.addEventListener('touch', toggleBurger);
});
