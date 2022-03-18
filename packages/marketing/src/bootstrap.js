import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

// Mount function to start up the app
const mount = (el) => {
    ReactDOM.render(
        <App />,
        el
    );
}

// If we are in development and isolation, call mount immediately
const devRoot = document.querySelector('#_marketing-dev-root');
if (process.env.NODE_ENV === 'development' && devRoot) {
    mount(devRoot);
}


// We are running through a container and we should export the mount function
export { mount };


