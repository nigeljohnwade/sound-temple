import {
    logThis,
    dirThis,
} from './console';
import './styles/index.css';
import LegoDJ from './assets/images/lego_dj.jpg';

logThis('webpack');
document.write('<h1>Sound Temple</h1>');
document.write('<p class="controller3">webpack</p>');
document.write('<p>assets</p>');
document.write('<p class="controller5">output</p>');
document.write('<p class="controller1">watch files</p>');
document.write('<p class="controller4Ext">dev server</p>');
document.write('<p class="controller3">HMR</p>');
document.write('<p class="controller5">CSS Extract</p>');
document.write('<p class="controller1">Production optimisation</p>');
document.write('<p class="controller4Ext">Service worker</p>');

const rootElement = document.createElement('div');
const imageWrapperElement = document.createElement('div');
const imageElement = document.createElement('img');
imageElement.setAttribute('src', LegoDJ);
imageWrapperElement.appendChild(imageElement);
rootElement.appendChild(imageWrapperElement);
document.querySelector('body').appendChild(rootElement);

dirThis(rootElement);

if (module.hot) {
    module.hot.accept('./console.js', function () {
        logThis('webpack');
    });
}

if (process.env.NODE_ENV === 'production') {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/service-worker.js').then(registration => {
                console.log('SW registered: ', registration);
            }).catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
        });
    }
}