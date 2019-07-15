const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    burger.addEventListener('clikc', () => {
        nav.classList.toggle('nav-active');
    });
}
navSlide();