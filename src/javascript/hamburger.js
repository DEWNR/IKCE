const HTML = document.documentElement;
const menuToggle = document.querySelector('#navbarBurger');
const menu = document.querySelector('#primary-navigation');

menuToggle.addEventListener('click', (event) => {
  if (HTML.classList.contains('has-nav-open')) {
    hideMenu();
  } else {
    showMenu();
  }
});

const showMenu = () => {
  menu.classList.remove('is-hidden-touch');
  HTML.classList.add('has-nav-open');
  menuToggle.classList.add('is-active');
};

const hideMenu = () => {
  menu.classList.add('is-hidden-touch');
  HTML.classList.remove('has-nav-open');
  menuToggle.classList.remove('is-active');
};
