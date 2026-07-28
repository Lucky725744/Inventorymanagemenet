import './bootstrap';
import '../css/app.css';

import { createApp } from 'vue';
import App from './App.vue';

import setupPrimeVue from './plugins/primevue';


const app = createApp(App);


setupPrimeVue(app);


app.mount('#app');