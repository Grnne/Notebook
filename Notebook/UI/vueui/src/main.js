import {createApp} from 'vue';
import App from './App.vue';
import '@/assets/styles/variables.css'
import {createPinia} from 'pinia';
import router from '@/router';
import components from '@/components/ui'


const app = createApp(App);
const pinia = createPinia();


app.use(pinia);
app.use(router);

components.forEach(component => {
    app.component(component.name, component);
})

app.mount('#app');