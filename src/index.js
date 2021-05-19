import './sass/main.scss';
import gallery from './menu.json';
import galleryTpl from './tamplates/gallery.hbs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const galleryCheckbox = document.querySelector('#theme-switch-toggle');
const bodyEl = document.querySelector('body');
const savedDataLight = localStorage.getItem('Theme');
const galleryContainer = document.querySelector('.js-menu');

makeCheckboxTrue(savedDataLight);

function makeCheckboxTrue(savedDataLight) {
  const dark = 'dark-theme';

  if (savedDataLight == dark) {
    galleryCheckbox.checked = true;
    bodyEl.classList.add('dark-theme');
  }
}

const glrMarkup = glrMarkupEl(gallery);

bodyEl.classList.add('light-theme');

galleryContainer.insertAdjacentHTML('beforeend', glrMarkup);

galleryCheckbox.addEventListener('change', onCheckboxChange);

function onCheckboxChange(evt) {
  if (evt.currentTarget.checked) {
    bodyEl.classList.replace('light-theme', 'dark-theme');
    localStorage.setItem('Theme', 'dark-theme');
  } else {
    bodyEl.classList.replace('dark-theme', 'light-theme');
    localStorage.setItem('Theme', 'light-theme');
  }
}

function glrMarkupEl(gallery) {
  return gallery.map(el => galleryTpl(el)).join('');
}
