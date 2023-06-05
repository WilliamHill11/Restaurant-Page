import loadFile, { container } from './loadFile';
import HOME from './home';
import MENU from './menu';
import { body } from './loadFile';
import CONTACT from './contact';

let log = console.log;

log(container);

const home = document.querySelector('.home');
const menu = document.querySelector('.menu');
const contact = document.querySelector('.contact');
const content = document.querySelector('.body');
const content2 = document.querySelector('chicken');

menu.addEventListener('click', createMenu);
home.addEventListener('click', createHome);
contact.addEventListener('click', createContact);

function createHome() {
  //   if (content.textContent === HOME) return;
  content.textContent = '';
  content.append(HOME);
}

log(HOME, 'yoooo');
function createMenu() {
  //   if (content.textContent === MENU) return;
  content.textContent = '';
  content.append(MENU);
}

function createContact() {
  //   if (content.textContent === CONTACT) return;
  content.textContent = '';
  content.append(CONTACT);
}
