const btn = document.querySelector('.toggle-btn');
const navbar = document.querySelector('.navbar');
const sidebar = document.querySelector('.sidebar');
const close = document.querySelector('.close');


btn.addEventListener('click', () => {
    sidebar.classList.add('show-navbar');
    if (close.classList.contains('fa-bars')) {
        close.classList.remove('fa-bars');
        close.classList.add('fa-times');
        btn.style.color = 'red';
    } else {
        close.classList.add('fa-bars');
        close.classList.remove('fa-times');
        sidebar.classList.remove('show-navbar');
        btn.style.color = '#4985FF';
    }
});

// Ekran scroll bo'lganda navbar sticky bo'lib qolishi uchun
window.addEventListener('scroll', () => {
    navbar.classList.toggle('sticky', window.scrollY > 0);
})