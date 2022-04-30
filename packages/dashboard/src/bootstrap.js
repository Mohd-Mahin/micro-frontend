import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';


// Mount function to start up the app
const mount = (el) => {
    const app = createApp(Dashboard);
    app.mount(el);
}

// If we are in development and isolation, call mount immediately
const devRoot = document.querySelector('#_dashboard-dev-root');
if (process.env.NODE_ENV === 'development' && devRoot) {
    mount(devRoot);
}


// We are running through a container and we should export the mount function
export { mount };

