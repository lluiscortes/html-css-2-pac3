/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// FontAwesome
import '@fortawesome/fontawesome-free/js/all.js';

// AOS
import AOS from 'aos';

/**
 * Write any other JavaScript below
 */

// AOS
AOS.init({
  duration: 1000,
  offset: 0,
});

// Header behavior
const toggle = document.getElementById('toggle');
const navbar = document.getElementById('navbar');
const navLinks = document.getElementsByClassName('navbar__link');
const openMenu = () => {
  navbar.classList.add('navbar--show');
  toggle.classList.add('toggle--close');
}
const closeMenu = () => {
  navbar.classList.remove('navbar--show');
  toggle.classList.remove('toggle--close');
}
const toggleMenu = () => {
  if (navbar.classList.contains('navbar--show')) {
    closeMenu();
  } else {
    openMenu();
  }
}
toggle.addEventListener('click', toggleMenu);
for (var i = 0, len = navLinks.length; i < len; i++) {
  navLinks[i].addEventListener('click', closeMenu);
}
