import itemsTemplate from './templates/gallery-item.hbs';
import menu from './menu.json';

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
  

const markup = itemsTemplate(menu);

const menuRef = document.querySelector('ul.js-menu');

menuRef.insertAdjacentHTML('beforeend', markup)

const themeSwitchRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

if (localStorage.getItem('DARK', Theme.DARK)) {
  bodyRef.classList.add(Theme.DARK);
  themeSwitchRef.checked = true;
}
themeSwitchRef.addEventListener('change', changeThemes);

function changeThemes() {
  if (themeSwitchRef.checked) {
    bodyRef.classList.add(Theme.DARK);
    localStorage.setItem('DARK', Theme.DARK);
  } else {
    bodyRef.classList.remove(Theme.DARK);
    localStorage.removeItem('DARK');
  }
}
