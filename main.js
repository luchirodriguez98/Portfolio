const body = document.querySelector('body');
const scrollButton = document.querySelector('.up-scroll');

scrollButton.addEventListener('click', scrollTop)

function scrollTop (){
    body.scrollTop = 0;
}
