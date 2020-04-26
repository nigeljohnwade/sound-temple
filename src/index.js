import { dirThis, } from 'console';
import './styles/index.css';
import { InitApp } from 'AppModule';
import { CreateStore } from './DataStore';
import { initPattern } from './data/korgVolcaInitialData';

const App = InitApp({
    appRootSelector: 'body',
    appH1Text: 'Sound Temple'
});

const store = CreateStore({
    initialData: {
        pattern1: {
            ...initPattern,
        },
    },
});

dirThis(store);
dirThis(App.root);
dirThis(App.h1);

// example of HMR code
if (module.hot) {
    module.hot.accept('./console.js', function () {
        dirThis(App.root);
        dirThis(App.h1);
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