let btnAbrir, btnCerrar, navbar;

btnAbrir = document.querySelector('#btnMenu');
btnCerrar = document.querySelector('#btnCerrar');
navbar = document.querySelector('#navbar');

btnAbrir.addEventListener('click', ()=>{
    navbar.classList.remove('navbar--cerrado');
})

btnCerrar.addEventListener('click', ()=>{
    navbar.classList.add('navbar--cerrado');
})