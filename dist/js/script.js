window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navber-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
}

const hamburger =document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

window.addEventListener('click', function(e){
    if(e.target != hamburger && e.target != navMenu){
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});

const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function(){
    if(darkToggle.checked){
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});

// Change position toggle in mode 
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) darkToggle.checked = true;
else darkToggle.checked = false;

AOS.init();
const swiper = new Swiper('.swiper__footer', {
// Optional parameters
direction: 'horizontal',
loop: true,
slidesPerView: 3,
autoWidth:true,
breakpoints:{
    800: {
        slidesPerView: 5,
    }
},
spaceBetween: 1,
// centeredSlides:true,


// Navigation arrows
navigation: {
    nextEl: '.next_btn',
    prevEl: '.previous_btn',
},

});
  