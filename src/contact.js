function createContact() {
  const name = document.createElement('h2');
  name.textContent = 'Contact: William Hill';
  const picture = document.createElement('div');
  picture.classList.add('contactPicture');
  name.appendChild(picture);

  return name;
}

export default createContact();
