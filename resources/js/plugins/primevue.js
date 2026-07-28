import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';

import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import Button from 'primevue/button';
import Password from 'primevue/password';


export default function setupPrimeVue(app) {

    app.use(PrimeVue, {
        theme: {
            preset: Aura
        }
    });


    app.component('InputText', InputText);
    app.component('FloatLabel', FloatLabel);
    app.component('Button', Button);
    app.component('Password', Password);

}