const menuBar = document.querySelector('#menu-bar');

const menuList = document.querySelector('.menu');

menuBar.addEventListener('click', function(){
    menuList.classList.toggle('show');
    menuBar.classList.toggle('d-none');
    menuBar.classList.toggle('clicked');
});