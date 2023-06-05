// import { container } from './loadFile';

function createMenu() {
  const firstItem = document.createElement('h2');
  firstItem.textContent = 'Espresso Martini';
  firstItem.classList.add('body');

  return firstItem;
}

export default createMenu();
