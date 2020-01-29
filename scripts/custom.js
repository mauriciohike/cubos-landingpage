const hamburguer = document.querySelector('.nav__hamburger');
const navbar = document.querySelector('.nav__container ul');

const toggleNavbar = () =>{
    navbar.classList.toggle('-active');
}
hamburguer.addEventListener('click', toggleNavbar);
