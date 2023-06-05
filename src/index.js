import loadFile, { container } from './loadFile';
import createMenu from './menu';

let log = console.log;

log(container);

const home = document.querySelector('.home');
const menu = document.querySelector('.menu');
const contact = document.querySelector('.contact');

log(home, contact, menu);
