import { createApp } from 'vue'
import './assets/css/style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css';
//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";
//core
import "primevue/resources/primevue.min.css";

const app = createApp(App)
const pinia = createPinia()

app.use(PrimeVue);
app.use(router)
app.use(pinia)
app.mount('#app')
