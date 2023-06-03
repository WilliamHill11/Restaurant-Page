import createHome from './home';

const container = document.querySelector('#content');

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

export default createNav();
