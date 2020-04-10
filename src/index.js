import logThis from './consoleLog';
import './styles/index.css';
import LegoDJ from  './assets/images/lego_dj.jpg';

logThis('webpack');
document.write('<h1>Sound Temple</h1>');
document.write('<p class="controller3">webpack</p>');
document.write('<p>assets</p>');
document.write('<p class="controller5">output</p>');
document.write('<p class="controller5">watch files</p>');
document.write('<p class="controller5">dev server</p>');

const rootElement = document.createElement('div');
const imageWrapperElement = document.createElement('div');
const imageElement = document.createElement('img');
imageElement.setAttribute('src', LegoDJ);
imageWrapperElement.appendChild(imageElement);
rootElement.appendChild(imageWrapperElement);
document.querySelector('body').appendChild(rootElement);
