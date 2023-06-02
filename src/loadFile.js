export const container = document.querySelector('#content');

console.log(container);

function createHeader() {
  const header = document.createElement('header');

  return header;
}

container.appendChild(createHeader());
