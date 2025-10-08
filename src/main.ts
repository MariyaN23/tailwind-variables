import { createApp } from 'vue'
import App from './App.vue'
import './main.css'
import 'primeicons/primeicons.css'
import PrimeVue from 'primevue/config';
import Lara from '@primeuix/themes/lara';

const app = createApp(App)
app.use(PrimeVue, {
    theme: {
        preset: Lara,
        options: {
            darkModeSelector: '.my-app-dark',
        }
    }
})
app.mount('#app')
