const hamburger = document.querySelector('.nav__hamburger');
const navbar = document.querySelector('.nav__container ul');

const toggleNavbar = () =>{
    if(navbar.classList.contains('active')){
        TweenMax.fromTo(navbar, .5, {
            y: 0,
            display: 'flex'
        }, {
            y: -400,
            opacity: 0,
            display: 'none'
        });

        navbar.classList.toggle('active')
    }else{
        TweenMax.fromTo(navbar, .5, {
            y: -100,
            display: 'none'
        }, {
            y: 0,
            display: 'flex'
        });

        navbar.classList.toggle('active')
    }
};

hamburger.addEventListener('click', toggleNavbar);