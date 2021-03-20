import { dirThis, logThis } from 'ConsoleUtilities';
import { InitApp } from 'AppModule';
import { CreateStore } from 'DataStore';
import { initPattern } from '../src/data/korgVolcaBeatsInitialData';
import './styles/index.css';

const store = CreateStore({
    initialData: {
        patterns: [
            {...initPattern},
        ],
    },
});

const App = InitApp({
    appRootSelector: 'body',
    appH1Text: 'Sound Temple',
    store: store,
});

logThis(store);

// example of HMR code
if (module.hot) {
    module.hot.accept('./index.js', function () {
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