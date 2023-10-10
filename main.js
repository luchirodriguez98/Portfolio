const scrollButton = document.querySelector('.up-scroll');
const mobileMenuButton = document.querySelector('.mobile-menu');
const mobileMenuContainer = document.querySelector('.menu-toggle');

scrollButton.addEventListener('click', scrollToTop)
mobileMenuButton.addEventListener('click', toggleMenuMobile)

function scrollToTop (){
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Desplazamiento suave
    });
}

function toggleMenuMobile () {
    mobileMenuContainer.classList.toggle('open')
    

}
