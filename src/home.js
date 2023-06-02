function createHome() {
  const body = document.createElement('div');
  body.classList.add('body');

  const title = document.createElement('h1');
  title.textContent = 'Chef La Ras';
  title.classList.add('title');
  body.append(title);

  const homeText = document.createElement('p');
  homeText.textContent =
    'There was something in the tree. It was difficult to tell from the ground, but Rachael could see movement. She squinted her eyes and peered in the direction of the movement, trying to decipher exactly what she had spied. The more she peered, however, the more she thought it might be a figment of her imagination. Nothing seemed to move until the moment she began to take her eyes off the tree. Then in the corner of her eye, she would see the movement again and begin the process of staring again.';
  homeText.classList.add('homeText');
  body.append(homeText);

  return body;
}

export default createHome();
