function createContact() {
  const name = document.createElement('h2');
  name.textContent = 'William Hill';
  name.classList.add('body');

  return name;
}

export default createContact();
