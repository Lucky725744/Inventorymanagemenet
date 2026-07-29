import './bootstrap';
import '../css/app.css';

import { createApp } from 'vue';
import App from './App.vue';
import setupPrimeVue from './plugins/primevue';
import router from './router';

const app = createApp(App);

app.use(router);
setupPrimeVue(app);


app.mount('#app');