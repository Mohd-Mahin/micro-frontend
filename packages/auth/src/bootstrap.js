import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './app';

// Mount function to start up the app
const mount = (el, { onNavigate, defaultHistory, initialPath, onSignIn }) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    });

    if (onNavigate) {
        // for child navigation to be detected in parent => onNavigate => registering in parent container
        history.listen(onNavigate);
    }

    ReactDOM.render(
        <App history={history} onSignIn={onSignIn} />,
        el
    );

    return {
        // for parent navigation to be detected in child(hash route) => onNavigate
        onParentNavigate({ pathname: nextPathname }) {
            const { pathname } = history.location;
            console.log(nextPathname, 'next path name');
            if (pathname !== nextPathname) {
                history.push(nextPathname);
            }
        }
    }
}

// If we are in development and isolation, call mount immediately
const devRoot = document.querySelector('#_auth-dev-root');
if (process.env.NODE_ENV === 'development' && devRoot) {
    mount(devRoot, {
        defaultHistory: createBrowserHistory()
    });
}


// We are running through a container and we should export the mount function
export { mount };


