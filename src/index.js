import './styles/index.css';
import LegoDJ from  './assets/images/lego_dj.jpg';


document.write('<h1>Sound Temple</h1>');
document.write('<p>webpack</p>');
document.write('<p>assets</p>');
const rootElement = document.createElement('div');
const imageWrapperElement = document.createElement('div');
const imageElement = document.createElement('img');
imageElement.setAttribute('src', LegoDJ);
imageWrapperElement.appendChild(imageElement);
rootElement.appendChild(imageWrapperElement);
document.querySelector('body').appendChild(rootElement);

