const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav');
    const mobileNav = document.querySelector('.mobile-navbar');

    burger.addEventListener('click',() => {
        mobileNav.classList.toggle('mobile-navbar-active');
        nav.classList.toggle('nav-active');
    });
}

navSlide();
