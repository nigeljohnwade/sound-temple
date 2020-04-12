import { dirThis, logThis, } from './console';
import './styles/index.css';

const appRootSelector = 'body';
const appRoot = document.querySelector(appRootSelector);
appRoot.classList.add('appRoot');
const h1Element = document.createElement('h1');
h1Element.textContent = 'Sound Temple';
appRoot.appendChild(h1Element);

logThis('webpack');
dirThis(appRoot);
dirThis(document.querySelectorAll('*'));
dirThis('hello');
dirThis(111);

// example of HMR code
if (module.hot) {
    module.hot.accept('./console.js', function () {
        logThis('webpack');
        dirThis(appRoot);
    });
}

// only register service worker in production build
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