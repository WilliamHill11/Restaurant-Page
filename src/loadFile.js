import HOME from './home';
import createHome from './home';

export const container = document.querySelector('#content');
export const body = document.createElement('div');
body.classList.add('body');

function createNav() {
  const header = document.createElement('header');
  header.classList.add('header');

  const navBar = document.createElement('nav');
  navBar.classList.add('nav');
  header.append(navBar);

  const home = document.createElement('p');
  home.textContent = 'HOME';
  home.classList.add('home');

  const menu = document.createElement('p');
  menu.textContent = 'MENU';
  menu.classList.add('menu');

  const contact = document.createElement('p');
  contact.textContent = 'CONTACT';
  contact.classList.add('contact');

  navBar.append(home, menu, contact);

  return header;
}

container.appendChild(createNav());
container.appendChild(createHome);
container.appendChild(body);
body.appendChild(HOME);

export default createNav();
