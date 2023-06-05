import container from './loadFile';

function createMenu() {
  const firstItem = document.createElement('h2');
  firstItem.textContent = 'Espresso Martini';
  const itemPicture = document.createElement('div');
  itemPicture.classList.add('coffee');
  firstItem.appendChild(itemPicture);

  return firstItem;
}

container.append(createMenu());

export default createMenu();
